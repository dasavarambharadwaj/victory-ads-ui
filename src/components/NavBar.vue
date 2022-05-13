<template>
  <nav id="header" class="w-full z-30 top-0 py-1 lg:py-6">
    <div class="flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
      <div class="pl-4 flex items-center">
        <a class=" font-bold text-2xl lg:text-3xl" href="#">Victory Ads</a>
      </div>
      <div class="block lg:hidden pr-4">
        <button id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded border-gray-600 hover:border-cyan-700 appearance-none focus:outline-none">
          <span class="material-symbols-outlined text-xs">menu</span>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 p-4 lg:p-0 z-20"
        id="nav-content">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <VLink href="#">Add Business</VLink>
          </li>

          <li class="mr-3">
            <VLink href="#">Sangareddy</VLink>
          </li>
          <li class="mr-3">
            <a href="#">
                <div class="relative w-12 h-12">
                  <span class="material-symbols-outlined text-5xl">account_circle</span>
                  <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
                </div>
              </a>
          </li>
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

