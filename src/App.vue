<template>
<div class="w-full select-none text-gray-200 bg-gray-900 gradient-background h-screen leading-relaxed tracking-wide overflow-auto">
  <div class="mx-auto flex flex-col h-full">
    <div id="nav-bar-container">
      <NavBar />
    </div>
    <div class=" flex-grow overflow-y-auto">
    <div id="main-content" class="min-h-full p-2" :key="refreshComponent">
      <router-view />
    </div>
    <div id="footer-container">
      <v-footer></v-footer>
    </div>
    </div>
  </div>
</div>
<div class="fixed w-full h-full top-0 z-30 bg-gray-900 bg-opacity-75 overflow-auto" v-if="showLocationPopup">
  <div class="bg-white w-[calc(100%-20px)] max-w-md rounded-md m-auto mt-32">
    <ask-location @change="checkLocation"></ask-location>
  </div>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import VFooter from './components/vFooter.vue'
import askLocation from '@/components/askLocation.vue'
import {mapState} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      refreshComponent: 0
    }
  },
  components: {
    NavBar,
    VFooter,
    askLocation
  },
  computed: mapState([
    'location',
    'showLocationPopup'
  ]),
  created() {
    this.checkLocation();
  },
  methods:{
    checkLocation() {
      this.$store.commit('setshowLocationPopup',this.location === "")
      this.refreshComponent += 1
    }
  }
}
</script>

<style>
.gradient-background {
  /* background-image:linear-gradient(-225deg, #cbbacc 0%, #2580b3 100%); */
}

</style>
