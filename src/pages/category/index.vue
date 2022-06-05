<template>
  <div
    class="max-w-screen-2xl mb-8 mt-24 px-8 grid gap-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-blue-900 text-gray-200 rounded-lg shadow-lg">
    <div class="flex flex-col justify-between">
      <div class="flex lg:justify-between flex-col lg:flex-row items-center">
        <h2 class="text-4xl text-yellow-400 lg:text-5xl font-bold leading-tight mb-4">Hospitals</h2>
        <v-input placeholder="Search Hospitals" prefixIcon="search" size="small" class=" lg:w-1/4 w-full mx-2"
          v-model="categorySearchString"></v-input>
      </div>
      <div class="mt-8 text-center hidden lg:block">
        <contact-us></contact-us>
      </div>
    </div>
    <div class="rounded-md p-2  text-gray-200">
      <v-category-list @selected="BusinessSelected" :list="list"></v-category-list>
    </div>
  </div>
</template>

<script>
import VInput from '@/components/vInput.vue'
import VCategoryList from './components/vCategoryList.vue'
  export default {
    name: 'subCategoryPage',
    data() {
        return {
            categoryId:null,
            list: [{
              id:0,
              name: "Multi Speciality Hospital 1",
              address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
              icon:"local_hospital"
            },
            {
              id:1,
              name: "Children's Multi Speciality Hospital 1",
              address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
              icon:"local_hospital"
            },
            {
              id:2,
              name: "Multi Speciality Hospital 2",
              address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
              icon:"local_hospital"
            },
            {
              id:3,
              name: "Multi Speciality Hospital 3",
              address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
              icon:"local_hospital"
            },
            {
              id:4,
              name: "Multi Speciality Hospital 4",
              address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
              icon:"local_hospital"
            },
            {
              id:5,
              name: "Multi Speciality Hospital 5",
              address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
              icon:"local_hospital"
            },
            {
              id:6,
              name: "Multi Speciality Hospital 6",
              address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
              icon:"local_hospital"
            },
            {
              id:7,
              name: "Diagnostic center",
              address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
              icon:"local_hospital"
            }
            ]
        }
    },
    components:{
      VInput,
        VCategoryList
    },
    created() {
        this.categoryId = this.$route.params.id
    },
    methods:{
      BusinessSelected(val) {
        this.$router.push({name:'BusinessDetails',params:{id:val}})
      }
    }
  }
</script>