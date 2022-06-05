<template>
  <div
    class="max-w-screen-2xl mb-8 mt-24 px-8 grid gap-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-blue-900 text-gray-200 rounded-lg shadow-lg">
    <div class="flex flex-col justify-between">
      <div class="flex lg:justify-between flex-col lg:flex-row items-center">
        <h2 class="text-4xl text-yellow-400 lg:text-5xl font-bold leading-tight mb-4">Categories</h2>
        <v-input placeholder="Search Hospitals" prefixIcon="search" size="small" class=" lg:w-1/4 w-full mx-2"
          v-model="categorySearchString"></v-input>
      </div>
      <div class="mt-8 text-center hidden lg:block">
        <contact-us></contact-us>
      </div>
    </div>
    <div class="rounded-md p-2  text-gray-200">
      <v-selector @selected="categorySelected" :list="categoriesList"></v-selector>
    </div>
  </div>
</template>

<script>
import VInput from '@/components/vInput'
import VSelector from '@/pages/categoryList/components/vSelector.vue'
  export default {
    name: 'categoriesPage',
    data() {
        return {
            categorySearchString:'',
            categoriesList:[
              {
                icon:'local_hospital',
                name:'Hospital',
                value:0
              },
              {
                icon:'school',
                name:'Schools & Colleges',
                value:1
              },
              {
                icon:'cake',
                name:'Bakery',
                value:2
              },
              {
                icon:'restaurant',
                name:'Restaurant',
                value:3
              },
            ]
        }
    },
    props: {
    },
    components:{
        VInput,
        VSelector
    },
    methods: {
      categorySelected(value) {
      this.$router.push({name:'Category',params:{id:value}})
      }
    }
  }
</script>