<template>
  <div
    class="max-w-screen-2xl mb-8 mt-24 px-8 grid gap-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-blue-900 text-gray-200 rounded-lg shadow-lg">
    <div class="flex flex-col justify-between">
      <div class="flex lg:justify-between flex-col lg:flex-row items-center">
        <h2 class="text-4xl text-yellow-400 lg:text-5xl font-bold leading-tight mb-4">{{categoryName}}</h2>
        <v-input placeholder="Search" prefixIcon="search" size="small" class=" lg:w-1/4 w-full mx-2"
          v-model="categorySearchString"></v-input>
      </div>
      <div class="mt-8 text-center hidden lg:block">
        <contact-us></contact-us>
      </div>
    </div>
    <div class="rounded-md p-2  text-gray-200">
      <div v-if="loading">Loading</div>
      <div v-else-if="list.length === 0" class=" flex items-center flex-col max-w-xs m-auto">
        <h1 class=" text-4xl font-bold text-gray-200 mb-4">No Data</h1>
        <no-data></no-data>
      </div>
      <div v-else>
        <v-category-list @selected="BusinessSelected" :list="list"></v-category-list>
      </div>
    </div>
  </div>
</template>

<script>
import VInput from '@/components/vInput.vue'
import VCategoryList from './components/vCategoryList.vue'
import apiService from '@/services/apiService'
import {mapState} from 'vuex'
import noData from '@/assets/illustrations/noData.vue'
  export default {
    name: 'subCategoryPage',
    data() {
        return {
            categoryId:null,
            categoryName: "",
            categorySearchString:"",
            list: [],
            loading:false
        }
    },
    components:{
      VInput,
      VCategoryList,
      noData
    },
    created() {
        this.categoryId = this.$route.params.id
        this.categoryName = this.$route.params.name
        this.getBusinessListByCategory()
    },
    computed: mapState([
      'location_id'
    ]),
    methods:{
      BusinessSelected(val) {
        this.$router.push({name:'BusinessDetails',params:{id:val}})
      },
      async getBusinessListByCategory() {
        if(this.categoryId && this.location_id) {
          this.loading = true
          let response = await apiService.get('/businessByCategory',{search:this.categorySearchString,category_id:this.categoryId,location_id:this.location_id})
          this.list = response?.data[0]
          this.loading = false
        }
      }
    }
  }
</script>