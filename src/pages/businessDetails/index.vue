<template>
  <div class="flex flex-col justify-center">
    <div v-if="data.UI_config?.logo" class="inline w-32 h-32 mx-auto my-4 border rounded-md border-gray-200">
      <img class="h-full m-auto" :src="getUrlByName(data.UI_config?.logo)" alt="test" />
    </div>
    
    <h1 class="text-2xl title-font flex justify-center text-center font-medium mb-1 text-yellow-400">{{ data.business_name }}</h1>
    <h2 class="text-xs title-font flex justify-center tracking-widest cursor-pointer" @click="categorySelected">{{ data.category_name }}</h2>
    <div class="flex justify-center my-4">
      <span class="flex items-center">
        <span class="material-symbols-outlined cursor-pointer" @click="showPhoneNumbers">call</span>
        <span class="material-symbols-outlined ml-4 cursor-pointer" :class="{'opacity-30':!data.email}" @click="showEmails">mail</span>
        <a class="material-symbols-outlined ml-4 cursor-pointer" :class="{'opacity-30':!data.co_ordinates}" :href="data.co_ordinates" target="_blank">pin_drop</a>
        <a class="material-symbols-outlined ml-4 cursor-pointer" :class="{'opacity-30':!data.UI_config?.website}" :href="data.UI_config?.website" target="_blank">language</a>
      </span>
      <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
        <a :class="{'opacity-30':!data.UI_config?.fb}">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
            viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-2" :class="{'opacity-30':!data.UI_config?.twitter}">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
            viewBox="0 0 24 24">
            <path
              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
            </path>
          </svg>
        </a>
      </span>
    </div>
    <span class="flex justify-center text-center items-center pb-5">
      <p class="leading-relaxed">
        {{ data.address }}
      </p>
    </span>
    <div>
      <div class="relative flex items-center justify-center w-full dark:text-gray-50" v-if="images.length > 0">
		<button aria-label="Slide back" type="button" @click="scrollImageLeft" class="absolute leading-none left-0 z-30 p-2 ml-10 focus:outline-none text-gray-900 rounded-full bg-gray-200 focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
			<span class="material-symbols-outlined">chevron_left</span>
		</button>
		<div class="flex items-center w-full h-full gap-2 py-4 m-auto image-wrapper scroll-smooth overflow-auto">
			<div class="relative flex h-96 aspect-square rounded-md flex-shrink-0 bg-white w-full sm:w-auto" v-for="(item, index) in images" :key="index">
				<img class="m-auto max-h-full max-w-full rounded-md" :src="getUrlByName(item.image_location)" :alt="item.image_name">
			</div>
		</div>
		<button aria-label="Slide forward" id="next" @click="scrollImageRight" class="absolute leading-none right-0 z-30 p-2 mr-10 focus:outline-none text-gray-900 rounded-full bg-gray-200 focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
			<span class="material-symbols-outlined">chevron_right</span>
		</button>
	</div>
    </div>
    <div class="bg-gray-800 rounded-md my-2 md:m-12">
      <div class="p-5" v-if="data.UI_config?.info">
        <p class="text-center">
          {{ data.UI_config?.info }}
        </p>
      </div>
      <div v-if="data.UI_config?.pointsHeading" class="flex mb-4 lg:flex-row flex-col gap-4 p-2 justify-center">
      <div class="flex flex-col p-4 max-w-lg w-full rounded-md mb-4 mx-auto text-gray-900 pb-5 lg:mx-5 bg-purple-200">
        <h2 class="text-lg font-bold mx-auto text-purple-900" v-if="data.UI_config?.pointsHeading">{{data.UI_config?.pointsHeading}}</h2>
        <ul class="list-disc list-outside marker:text-purple-900 text-base pl-10 max-h-80 overflow-y-auto" v-if="data.UI_config?.points">
          <li class=" max-w-2xl" v-for="(point,index) in data.UI_config?.points" :key="index">{{point}}</li>
        </ul>
      </div>
      <div v-if="data.UI_config?.pointsHeading2" class="flex flex-col text-gray-900 p-4 max-w-lg w-full mb-4 mx-auto rounded-md pb-5 lg:mx-5 bg-purple-200">
        <h2 class="text-lg font-bold mx-auto text-purple-900" v-if="data.UI_config?.pointsHeading2">{{data.UI_config?.pointsHeading2}}</h2>
        <ul class="list-disc marker:text-purple-900 list-outside text-base pl-10 max-h-80 overflow-y-auto" v-if="data.UI_config?.points2">
          <li class=" max-w-2xl" v-for="(point,index) in data.UI_config?.points2" :key="index">{{point}}</li>
        </ul>
      </div>
      </div>
    </div>
    <customer-images :list="customerImages"></customer-images>
  </div>
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
  <div class="absolute w-full h-full top-0 z-30 left-0 right-0 bg-gray-900 bg-opacity-75 m-auto overflow-auto"
    @click="hideEmail" v-if="showEmail">
    <div class="bg-gray-900 border border-gray-200 w-[calc(100%-20px)] max-w-md rounded-md m-auto mt-32 p-4"
      @click.stop="">
      <div class="text-gray-200 text-center text-xl mb-4 font-bold">Email Address</div>
      <a class="text-gray-200 flex items-center justify-between p-2 m-2 border-gray-200">
        <div class="flex">
          <span class="mr-4">1. </span>
          <span class="select-all">{{ data.email }}</span>
        </div>
        <div class="relative flex items-center">
          <span class="material-symbols-outlined cursor-pointer mr-4" v-if="!copiedEmail"
            @click.prevent="copyEmail()">content_copy</span>
          <span class="material-symbols-outlined cursor-pointer mr-4 text-green-500"
            v-if="copiedEmail">check_circle</span>
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
      showEmail: false,
      copied: 0,
      images: [],
      copiedEmail: false,
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
    categorySelected() {
      this.$router.push({ name: 'Category', params: { id: this.data.category_id, name: this.data.category_name } })
    },
    scrollImageLeft() {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      let content = document.querySelector(".image-wrapper");
      if(vw <= 640) {
        content.scrollLeft -= (vw-24)
      } else {
      content.scrollLeft -= 392;
      }
    },
    scrollImageRight() {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      let content = document.querySelector(".image-wrapper");
      if(vw <= 640) {
        content.scrollLeft += (vw-24)
      } else {
      content.scrollLeft += 392;
      }
    },
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
    copyEmail() {
      navigator.clipboard.writeText(this.data.email)
      this.copiedEmail = true;
      setTimeout(() => {
        this.copiedEmail = false
      }, 2000);
    },
    async showPhoneNumbers() {
      this.showPhoneNumber = true
    },
    hidePhoneNumbers() {
      this.showPhoneNumber = false
    },
    async showEmails() {
      if(this.data.email) {
        this.showEmail = true
      }
    },
    hideEmail() {
      this.showEmail = false
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