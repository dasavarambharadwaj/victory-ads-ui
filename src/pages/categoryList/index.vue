<template>
  <div class="w-full container mx-auto">
    <div class="flex lg:justify-between flex-col lg:flex-row items-center">
      <div class="text-2xl text-center lg:text-left font-bold">Categories</div>
      <v-input placeholder="Search Categories" prefixIcon="search" size="small" class=" lg:w-1/4 w-full mx-2"
        v-model="categorySearchString"></v-input>
    </div>
    <div class=" rounded-md p-2 border border-white text-gray-900 bg-gray-200">
        <v-selector @click="categorySelected" :list="categoriesList"></v-selector>
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
      categorySelected(e) {
      this.$router.push({name:'Category',params:{id:e.target.dataset.value}})
      }
    }
  }
</script>