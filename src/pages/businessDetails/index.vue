<template>
<section class="text-gray-200 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded-md border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font tracking-widest">Hospital</h2>
        <h1 class=" text-3xl title-font font-medium mb-1">Children's Multi Speciality Hospital</h1>
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
                Near New Bus stand, Shantinagar, Sangareddy, Telangana, 502001
            </p>
        </span>
        <div class="flex mt-6 items-center pb-5 mb-5">
        <p class="leading-relaxed">
            Et officia veniam enim nisi quis qui minim non nostrud veniam. Excepteur amet elit duis excepteur minim
            exercitation Lorem reprehenderit eu. Nostrud sint aliquip dolore nulla ex id Lorem quis velit id. Laborum
            esse in ut deserunt irure duis laborum ad pariatur incididunt labore deserunt.
            Adipisicing reprehenderit dolor laborum aliqua. Reprehenderit consectetur ex nostrud in enim magna. Laborum
            ut excepteur aliqua non voluptate Lorem aute exercitation consectetur. Ea proident eu id aute laborum tempor
            sint velit aute.
        </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  export default {
    name: 'BusinessDetails',
    data() {
        return {
            id:null
        }
    },
    props: {
    },
    components:{
    },
    created() {
        this.id = this.$route.params.id
    },
    methods:{

    }
  }
</script>