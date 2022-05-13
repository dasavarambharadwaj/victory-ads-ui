<template>
<div class="w-full  text-cyan-50 gradient-background bg-gray-700 h-screen leading-relaxed tracking-wide ">
  <div class="container mx-auto flex flex-col">
    <NavBar />
    <HomePage/>
  </div>
</div>
</template>

<script>
import HomePage from './pages/home'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    NavBar
}
}
</script>

<style>
.gradient-background {
  background-color:currentColor;
}

</style>
