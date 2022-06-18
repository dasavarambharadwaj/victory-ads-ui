<template>
  <section class="text-gray-200 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap justify-center">
        <div class="lg:w-1/2 w-full max-w-sm">
          <div class="dui-carousel dui-carousel-center rounded-md w-full">
            <div :id="'item' + (index + 1)" class="dui-carousel-item w-full" v-for="(item, index) in images" :key="index">
              <img :src="getUrlByName(item.image_location)" :alt="item.image_name"
                class="lg:block  w-full object-cover object-center rounded-md border border-gray-200" />
            </div>
          </div>
          <div class="flex justify-center w-full py-2 gap-2">
            <a :href="'#item' + (index + 1)" v-for="(item, index) in images" :key="index"
              class="dui-btn dui-btn-xs">{{ index + 1 }}</a>
          </div>
        </div>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-xs title-font tracking-widest">{{ data.category_name }}</h2>
          <h1 class="text-2xl title-font font-medium mb-1 text-yellow-400">{{ data.business_name }}</h1>
          <div class="flex mb-4">
            <span class="flex items-center">
              <span class="material-symbols-outlined cursor-pointer" @click="showPhoneNumbers">call</span>
              <span class="material-symbols-outlined ml-4 cursor-pointer">mail</span>
              <span class="material-symbols-outlined ml-4 cursor-pointer">pin_drop</span>
              <span class="material-symbols-outlined ml-4 cursor-pointer">language</span>
            </span>
            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
              <a class="">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 ">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                  </path>
                </svg>
              </a>
            </span>
          </div>

          <span class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <p class="leading-relaxed">
              {{ data.address }}
            </p>
          </span>
          <div class="flex mt-6 items-center pb-5 mb-5">
            <p class="leading-relaxed">
              {{ data.UI_config?.info }}
            </p>
          </div>
        </div>
      </div>
      <customer-images :list="customerImages"></customer-images>
    </div>
  </section>
  <div class="absolute w-full h-full top-0 z-30 left-0 right-0 bg-gray-900 bg-opacity-75 m-auto overflow-auto"
    @click="hidePhoneNumbers" v-if="showPhoneNumber">
    <div class="bg-gray-900 border border-gray-200 w-[calc(100%-20px)] max-w-md rounded-md m-auto mt-32 p-4"
      @click.stop="">
      <div class="text-gray-200 text-center text-xl mb-4 font-bold">Phone Numbers</div>
      <a class="text-gray-200 flex items-center justify-between p-2 m-2 border-gray-200" :href="'tel://' + item"
        v-for="(item, key, index) in data.ph_no" :key="index">
        <div class="flex">
          <span class="mr-4">{{ (index + 1) + '.' }}</span>
          <span>{{ item }}</span>
        </div>
        <div class="relative flex items-center">
          <span class="material-symbols-outlined cursor-pointer mr-4" v-if="copied !== key"
            @click.prevent="copyByKey(key)">content_copy</span>
          <span class="material-symbols-outlined cursor-pointer mr-4 text-green-500"
            v-if="copied === key">check_circle</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/apiService'
import customerImages from './components/customerImages.vue' 
export default {
  name: 'BusinessDetails',
  data() {
    return {
      id: null,
      data: {},
      showPhoneNumber: false,
      copied: 0,
      images: [],
      customerImages: []
    }
  },
  props: {
  },
  components: {
    customerImages
  },
  created() {
    this.id = this.$route.params.id
    this.getBusinessDetailsById()
    this.getImagesById()
  },
  methods: {
    getUrlByName(name) {
      return process.env.VUE_APP_BACKEND_URL + "/image/" + name
    },
    copyByKey(key) {
      navigator.clipboard.writeText(this.data.ph_no[key])
      this.copied = key;
      setTimeout(() => {
        this.copied = 0
      }, 2000);
    },
    async showPhoneNumbers() {
      console.log(this.data)
      this.showPhoneNumber = true
    },
    hidePhoneNumbers() {
      this.showPhoneNumber = false
    },
    async getBusinessDetailsById() {
      if (this.id) {
        let response = await apiService.get('/businessDetails', { business_id: this.id })
        this.data = response?.data[0][0]
        this.customerImages = response?.data[1]
      }
    },
    async getImagesById() {
      if (this.id) {
        let response = await apiService.get('/getImagesByBusinessId', { business_id: this.id })
        this.images = response?.data[0]
      }
    }
  }
}
</script>