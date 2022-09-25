<template>
  <div class="text-center flex flex-col items-center mt-2">
    <div class="w-full flex mb-6 flex-col items-center ">
      <VCarousel />
    </div>
    <div class="flex flex-col sm:flex-row w-full gap-3 justify-center">
      <router-link to="/category-list" class="p-3 backdrop-blur bg-blue-600/30 w-full sm:w-1/3 sm:max-w-xs flex flex-col justify-center rounded-md">
          <span class="text-lg font-bold">Categories</span>
          <div class=" text-xs">Filter based on category</div>
      </router-link>
      <router-link to="/add-business" class="p-3 backdrop-blur bg-green-600/30 w-full sm:w-1/3 sm:max-w-xs flex flex-col justify-center rounded-md">
        <span class="text-lg font-bold">Add Business</span>
        <div class=" text-xs">List your business on our website</div>
      </router-link>
      <router-link to="/about" class="p-3 backdrop-blur bg-red-600/30 w-full sm:w-1/3 sm:max-w-xs flex flex-col justify-center rounded-md">
        <span class="text-lg font-bold">Contact Us</span>
        <div class=" text-xs">Tell us your query and we will contact you</div>
    </router-link>
    </div>
  </div>
</template>

<script>

import VCarousel from '@/components/vCarousel'
export default {
  name: 'HomePage',
  components: {
    VCarousel
  }
}
</script>