<template>
<section class="text-gray-200 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="Image" class="lg:w-1/2 w-full object-cover object-center rounded-md border border-gray-200" src="">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font tracking-widest">Hospital</h2>
        <h1 class="lg:text-5xl text-4xl title-font font-medium mb-1 text-yellow-400">{{data.business_name}}</h1>
        <div class="flex mb-4">
            <span class="flex items-center">
                <span class="material-symbols-outlined cursor-pointer">call</span>
                <span class="material-symbols-outlined ml-4 cursor-pointer">mail</span>
                <span class="material-symbols-outlined ml-4 cursor-pointer">pin_drop</span>
                <span class="material-symbols-outlined ml-4 cursor-pointer">language</span>
            </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a class="">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-2 ">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>

        <span class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <p class="leading-relaxed">
                {{data.address}}
            </p>
        </span>
        <div class="flex mt-6 items-center pb-5 mb-5">
        <p class="leading-relaxed">
            No extra info available
        </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import apiService from '@/services/apiService'
  export default {
    name: 'BusinessDetails',
    data() {
        return {
            id:null,
            data:{}
        }
    },
    props: {
    },
    components:{
    },
    created() {
        this.id = this.$route.params.id
        this.getBusinessDetailsById()
    },
    methods:{
      async getBusinessDetailsById() {
        let response = await apiService.get('/businessDetails',{business_id:this.id})
        this.data = response?.data[0]
      }
    }
  }
</script>