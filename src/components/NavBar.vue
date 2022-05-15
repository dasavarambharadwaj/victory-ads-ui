<template>
  <nav id="header" class="w-full z-30 top-0 py-1 lg:py-6">
    <div class="flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
      <div class="pl-4 flex items-center">
      <router-link to="/"><a class=" font-bold text-2xl lg:text-3xl">Victory Ads</a></router-link> 
        
      </div>
      <div class="block lg:hidden pr-4">
        <button id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded-md border-gray-600 hover:border-cyan-700 appearance-none focus:outline-none">
          <span class="material-symbols-outlined text-xs">menu</span>
        </button>
      </div>
      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 p-4 lg:p-0 z-20"
        id="nav-content">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <router-link to="/add-business">
              <VLink>Add Business</VLink>
            </router-link>
          </li>

          <li class="mr-3">
            <button id="dropdownDefault" data-dropdown-toggle="dropdown"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button">
              Categories</button>
            <!-- Dropdown menu -->
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-md shadow w-44 dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
            </div>
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
  props: {
    msg: String
  },
  components:{
    VLink
  }
}
</script>

