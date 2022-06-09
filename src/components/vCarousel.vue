<template>
  <div class="flex-row m-auto w-full bg-red-300 justify-between lg:justify-center items-center rounded-lg border border-gray-200 p-8 flex ">
    <div class=" max-w-[160px] w-1/5">
      <announce-icon></announce-icon>
    </div>
    <div class="flex flex-col">
    <div class="text-center flex flex-col flex-grow">
      <div>
        <h1 class="text-xl md:text-2xl lg:text-4xl  text-red-800 font-bold">Show Your Ad Here</h1>
        <p class="mx-auto mt-2 md:text-sm text-xs lg:text-md text-gray-800">Contact Us to display your business advertisement.</p>
      </div>
      <router-link to="/about">
      <button class="mt-2 rounded-md bg-transparent px-8 py-4 font-medium  transition-colors bg-red-800 text-white disabled:opacity-50">Contact Us</button>
      </router-link>
    </div>
    </div>
  </div>
</template>
<script>
import AnnounceIcon from '@/assets/illustrations/announceIcon.vue'
export default {
  name:"VCarousel",
  components:{
    AnnounceIcon
  }
}
</script>