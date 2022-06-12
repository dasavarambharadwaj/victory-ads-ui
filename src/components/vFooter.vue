<template>
  <footer class="flex pb-12 flex-col items-center lg:items-start justify-between px-6 py-4 bg-gray-800 sm:flex-row">
    <router-link to="/" class="flex flex-col items-center">
      <a class="text-xl font-bold text-cyan-400">Victory Ads</a>
      <span>Sangareddy</span>
      
    </router-link>
    <p class="py-2 text-gray-800 dark:text-white sm:py-0">2022 &#169; All rights reserved</p>
    <p class="py-2 text-gray-800 dark:text-white sm:py-0">Terms &amp; conditions</p>
  </footer>
</template>
<script>
export default {
    name:"VFooter"
    
}
</script>