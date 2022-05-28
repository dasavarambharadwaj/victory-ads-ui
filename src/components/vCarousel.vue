<template>
  <div class="flex flex-col lg:flex-row m-8  justify-between rounded-lg border border-gray-200 p-8">
  <div class="lg:h-96">
    <announce-icon></announce-icon>
  </div>
  <div class="flex flex-col">
  <div class="mt-8 text-center flex flex-col justify-end flex-grow">
    <div>
      <h1 class="lg:text-5xl text-4xl text-yellow-400 font-bold">Show Your Ad Here</h1>
      <p class="mx-auto mt-2 text-gray-200">Contact Us to display your business advertisement.</p>
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