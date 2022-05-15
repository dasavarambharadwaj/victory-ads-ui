<template>
<div class="w-full text-white bg-gray-900 gradient-background h-screen leading-relaxed tracking-wide ">
  <div class="mx-auto flex flex-col">
  <div id="nav-bar-container">
    <NavBar />
  </div>
  <div id="main-content">
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
