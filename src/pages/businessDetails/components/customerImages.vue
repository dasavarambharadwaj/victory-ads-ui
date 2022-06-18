<template>
  <div class="p-2 bg-gray-800 rounded-lg shadow" v-if="list.length > 0">
    <div class="flex flex-wrap justify-center">
      <div class="p-2 w-full md:w-1/2 lg:w-1/4" v-for="item in list" :key="item">
        <div class="flex justify-center items-center">
          <div class="flex-shrink-0">
            <a class="block relative">
              <img alt="profil" :src="getUrlByName(item.image_location)"
                class="mx-auto object-cover rounded-md h-32 w-20 " />
            </a>
          </div>
          <div class="mt-2 w-1/2 flex flex-col ml-4">
            <span class="text-white text-lg break-words font-medium">
              {{item.customer_name}}
            </span>
            <span class="text-gray-400 break-words text-xs">
              {{item.customer_role}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "customerImages",
  props:{
    list:{
      default() {
        return []
      },
      type: Array
    }
  },
  methods:{
    getUrlByName(name) {
      return process.env.VUE_APP_BACKEND_URL + "/image/" + name
    },
  }
}
</script>