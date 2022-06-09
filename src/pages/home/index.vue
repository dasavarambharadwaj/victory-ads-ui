<template>
  <div class="text-center my-12">
    <!-- <h1 class="lg:text-5xl text-4xl font-bold text-yellow-400 my-3">Search Local Business</h1> -->
    <div class="w-full lg:w-1/2 text-center inline-block">
      <!-- <VSelect class="my-3" @change="printLocation" v-model="location" :list="locations" item-text="text" item-value="value" placeholder="Select Location" prefixIcon="pin_drop"></VSelect> -->
      <VSelect class="my-3" @change="gotoBusinessPage" :list="businesses" v-model="selectedBusinessId" item-text="name" item-value="id" placeholder="Search Local Business" prefixIcon="search"></VSelect>
    </div>
    </div>
    <div class="w-full flex flex-col items-center ">
      <VCarousel />
    </div>
    <div class="w-full h-96">
    </div>
</template>

<script>
import VSelect from '@/components/vSelect'
import VCarousel from '@/components/vCarousel'
import {mapState} from 'vuex'
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    VSelect,
    VCarousel
  },
  computed: mapState([
    'location'
  ]),
  data() {
    return {
      locations: [{
          text: "Sangareddy",
          value: "sangareddy"
        },
        {
          text: "Zaheerabad",
          value: "zaheerabad"
        },
        {
          text: "Sadasivapet",
          value: "sadasivapet"
        },
        {
          text: "Patancheru",
          value: "patancheru"
        },
        {
          text: "Ram Chandra Puram",
          value: "Ram Chandra Puram"
        },
        {
          text: "Jogipet",
          value: "Jogipet"
        },
        {
          text: "Narayankhed",
          value: "Narayankhed"
        }
      ],
      businesses: [{
          id: 0,
          name: "Multi Speciality Hospital 1",
          address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
          icon: "local_hospital"
        },
        {
          id: 1,
          name: "Children's Multi Speciality Hospital 1",
          address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
          icon: "local_hospital"
        },
        {
          id: 2,
          name: "Multi Speciality Hospital 2",
          address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
          icon: "local_hospital"
        },
        {
          id: 3,
          name: "Multi Speciality Hospital 3",
          address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
          icon: "local_hospital"
        },
        {
          id: 4,
          name: "Multi Speciality Hospital 4",
          address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
          icon: "local_hospital"
        },
        {
          id: 5,
          name: "Multi Speciality Hospital 5",
          address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
          icon: "local_hospital"
        },
        {
          id: 6,
          name: "Multi Speciality Hospital 6",
          address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
          icon: "local_hospital"
        },
        {
          id: 7,
          name: "Diagnostic center",
          address: "Beside New Bus-stand, Shantinagar, Sangareddy, Telangana, 502001",
          icon: "local_hospital"
        }
      ],
      selectedBusinessId: null
    }
  },
  methods: {
    gotoBusinessPage() {
      if(this.selectedBusinessId) {
        this.$router.push({name:'BusinessDetails',params:{id:this.selectedBusinessId}})
      }

    }
  }
}
</script>