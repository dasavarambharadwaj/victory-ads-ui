<template>
<div class="w-full select-none text-gray-200 bg-gray-900 gradient-background h-screen leading-relaxed tracking-wide overflow-auto">
  <div class="mx-auto flex flex-col">
  <div id="nav-bar-container">
    <NavBar />
  </div>
  <div id="main-conten" class="lg:h-[calc(100vh-136px)] h-[calc(100vh-74px)] overflow-y-auto">
    <router-view />
  </div>
  </div>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
}
}
</script>

<style>
.gradient-background {
  /* background-image:linear-gradient(-225deg, #cbbacc 0%, #2580b3 100%); */
}

</style>
