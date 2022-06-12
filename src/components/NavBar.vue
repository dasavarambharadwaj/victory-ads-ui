<template>
  <nav id="header" class="w-full z-30 top-0 py-1 lg:py-6">
    <div class="flex items-center justify-between mt-0 px-2 py-2 lg:py-6">
      <div class="pl-4 flex items-center">
      <router-link to="/">
      <a class="flex flex-col justify-center self-center items-center font-bold lg:text-3xl">
        <span class="text-2xl lg:text-4xl text-lg-400 text-cyan-400">Victory Ads</span>
        <span class="text-sm lg:text-lg">Sangareddy</span>
        </a>
      
      </router-link>
      </div>
      <div class="flex lg:hidden flex-row items-center">
        <div class="flex justify-center items-center cursor-pointer mr-4" @click="askLocation">
          <span class="material-symbols-outlined text-2xl lg:text-3xl">pin_drop</span>
          <span class="text-sm">{{location|| 'Select Location'}}</span>
        </div>
        <div class="block lg:hidden pr-4 relative">
          <button id="nav-toggle" @click="toggleRightMenu"
            class="flex items-center px-3 py-2 border rounded-md border-gray-600 hover:border-cyan-700 appearance-none focus:outline-none">
            <span class="material-symbols-outlined text-2xl lg:text-3xl">{{toggleMenu?'arrow_forward':'menu'}}</span>
          </button>
          <div @click="toggleRightMenu" v-if="toggleMenu" class="z-20 fixed w-full mt-2 text-gray-200 font-bold text-2xl right-0 bg-gray-900 h-[calc(100vh-62px)]">
            <ul class="py-1 text-xl" aria-labelledby="dropdownDefault">
              <router-link to="/add-business">
              <li class="m-2 p-8 border-b border-gray-200 cursor-pointer hover:bg-gray-900 hover:text-gray-200">
                <VLink>Add Business</VLink>
              </li>
              </router-link>
              <router-link to="/category-list">
              <li class="m-2 p-8 border-b border-gray-200 cursor-pointer hover:bg-gray-900 hover:text-gray-200">
                <VLink>Categories</VLink>
              </li>
              </router-link>
              <router-link to="/about">
              <li class="m-2 p-8 border-b border-gray-200 cursor-pointer hover:bg-gray-900 hover:text-gray-200">
                <VLink>Contact Us</VLink>
              </li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="w-full flex-grow lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 p-4 lg:p-0 z-20"
        id="nav-content">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3 cursor-pointer flex items-center justify-center" @click="askLocation">
              <span class="material-symbols-outlined text-2xl lg:text-3xl">pin_drop</span>
              <span class="text-sm">{{location|| 'Select Location'}}</span>
          </li>
          <li class="mr-3">
            <router-link to="/add-business">
              <VLink>Add Business</VLink>
            </router-link>
          </li>
          <li class="mr-3">
            <router-link to="/about">
              <VLink>Contact Us</VLink>
            </router-link>
          </li>
          <li class="mr-3">
            <router-link to="/category-list">
              <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                class="text-gray-200 bg-blue-900  px-8 py-4 focus:ring-4 focus:outline-none 
                 font-medium rounded-md text-center inline-flex 
                items-center"
                type="button">Categories</button>
              </router-link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import VLink from '@/components/vLink'
import { mapState } from 'vuex'
export default {
  name: 'NavBar',
  data() {
    return{
      toggleMenu:false
    }
  },
  props: {
    msg: String
  },
  components:{
    VLink
  },
  computed: {
    ...mapState([
      'location'
    ])
  },
  methods: {
    askLocation() {
      this.$store.commit('setLocation',"")
      this.$store.commit('setLocationId',null)
      this.$store.commit('setshowLocationPopup',true)
    },
    toggleRightMenu() {
      this.toggleMenu = !this.toggleMenu
    }
  }
}
</script>

