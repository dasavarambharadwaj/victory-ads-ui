<template>
  <nav id="header" class="w-full z-30 top-0 py-1 lg:py-6">
    <div class="flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
      <div class="pl-4 flex items-center">
      <router-link to="/"><a class=" font-bold text-2xl lg:text-3xl">Victory Ads</a></router-link>
      </div>
      <div class="block lg:hidden pr-4 relative">
        <button id="nav-toggle" @click="toggleRightMenu"
          class="flex items-center px-3 py-2 border rounded-md border-gray-600 hover:border-cyan-700 appearance-none focus:outline-none">
          <span class="material-symbols-outlined text-2xl lg:text-3xl">{{toggleMenu?'arrow_forward':'menu'}}</span>
        </button>
        <div @click="toggleRightMenu" v-if="toggleMenu" class="z-20 fixed w-full text-gray-900 right-0 bg-gray-200 h-[calc(100vh-62px)]">
          <ul class="py-1 text-sm " aria-labelledby="dropdownDefault">
            <router-link to="/add-business">
            <li class="m-2 p-2 border-b border-gray-900 cursor-pointer hover:bg-gray-900 hover:text-gray-200">
              <VLink>Add Business</VLink>
            </li>
            </router-link>
            <router-link to="/category-list">
            <li class="m-2 p-2 border-b border-gray-900 cursor-pointer hover:bg-gray-900 hover:text-gray-200">
              <VLink>Categories</VLink>
            </li>
            </router-link>
            <router-link to="/about">
            <li class="m-2 p-2 border-b border-gray-900 cursor-pointer hover:bg-gray-900 hover:text-gray-200">
              <VLink>About Us</VLink>
            </li>
            </router-link>
          </ul>
        </div>
      </div>
      <div
        class="w-full flex-grow lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 p-4 lg:p-0 z-20"
        id="nav-content">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <router-link to="/add-business">
              <VLink>Add Business</VLink>
            </router-link>
          </li>

          <li class="mr-3">
            <router-link to="/category-list">
              <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                class="text-gray-200 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex 
                items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">Categories</button>
              </router-link>
            <!-- Dropdown menu -->
            
          </li>
          <!-- <li class="mr-3">
            <a href="#">
                <div class="relative w-12 h-12">
                  <span class="material-symbols-outlined text-5xl">account_circle</span>
                  <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-md bg-green-400 z-2"></div>
                </div>
              </a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import VLink from '@/components/vLink'
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
  methods: {
    toggleRightMenu() {
      this.toggleMenu = !this.toggleMenu
    }
  }
}
</script>

