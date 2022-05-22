<template>
  <div class="w-full container mx-auto">
    <div class="flex lg:justify-between flex-col lg:flex-row items-center">
      <div class="text-2xl text-center lg:text-left font-bold">Hospitals</div>
      <v-input placeholder="Search Hospitals" prefixIcon="search" size="small" class=" lg:w-1/4 w-full mx-2"
        v-model="categorySearchString"></v-input>
    </div>
    <div class="rounded-md p-2 bg-gray-200 text-gray-900">
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