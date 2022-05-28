<template>
<div class="w-full select-none text-gray-200 bg-gray-900 gradient-background h-screen leading-relaxed tracking-wide overflow-auto">
  <div class="mx-auto flex flex-col">
    <div id="nav-bar-container">
      <NavBar />
    </div>
    <div class="h-[calc(100vh-92px)] lg:h-[calc(100vh-164px)] overflow-y-auto">
    <div id="main-content" class="min-h-full">
      <router-view />
    </div>
    <div id="footer-container">
      <v-footer></v-footer>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import VFooter from './components/vFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    VFooter
}
}
</script>

<style>
.gradient-background {
  /* background-image:linear-gradient(-225deg, #cbbacc 0%, #2580b3 100%); */
}

</style>
