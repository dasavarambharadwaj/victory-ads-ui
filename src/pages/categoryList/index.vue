<template>
  <div
    class="max-w-screen-2xl mb-8 mt-24 px-8 grid gap-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-blue-900 text-gray-200 rounded-lg shadow-lg">
    <div class="flex flex-col justify-between">
      <div class="flex lg:justify-between flex-col lg:flex-row items-center">
        <h2 class="text-4xl text-yellow-400 lg:text-5xl font-bold leading-tight mb-4">Categories</h2>
        <v-input placeholder="Search" prefixIcon="search" size="small" class=" lg:w-1/4 w-full mx-2"
          v-model="categorySearchString" @change="getCategories"></v-input>
      </div>
      <div class="mt-8 text-center hidden lg:block">
        <contact-us></contact-us>
      </div>
    </div>
    <div class="rounded-md p-2  text-gray-200">
      <v-selector @selected="categorySelected" :loading="loading" :list="categoriesList"></v-selector>
    </div>
  </div>
</template>

<script>
import VInput from '@/components/vInput'
import VSelector from '@/pages/categoryList/components/vSelector.vue'
import apiService from '@/services/apiService'
  export default {
    name: 'categoriesPage',
    data() {
        return {
            categorySearchString:'',
            categoriesList:[],
            timeout:null,
            loading: false
        }
    },
    props: {
    },
    components:{
        VInput,
        VSelector
    },
    async created(){
      await this.getCategories()
    },
    methods: {
      categorySelected(value,name) {
      this.$router.push({name:'Category',params:{id:value,name:name}})
      },
      async getCategories() {
        this.loading = true
        if(this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(async () => {
          try {
            let response = await apiService.get('/categories',{search:this.categorySearchString})
            if(response.data) {
              this.categoriesList = response?.data[0]
            } else {
              this.categoriesList = []
            }
          } catch(e) {
            this.categoriesList = []
          }
          this.loading = false
        }, 300);
        
        
      }
    }
  }
</script>