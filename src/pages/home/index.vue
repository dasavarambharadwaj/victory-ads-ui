<template>
  <div class="text-center my-12">
    <h1 class="text-2xl lg:text-4xl font-bold text-yellow-400 my-3">Search Local Business</h1>
    <div class="w-full lg:w-1/2 text-center inline-block">
      <VSelect class="my-3" @change="printLocation" v-model="location" :list="locations" item-text="text" item-value="value" placeholder="Select Location" prefixIcon="pin_drop"></VSelect>
      <VSelect class="my-3" :list="businesses" item-text="text" item-value="value" placeholder="Search Local Business" prefixIcon="search"></VSelect>
    </div>
    </div>
    <div class="w-full h-96 bg-white">
      <VCarousel />
    </div>
    <div class="w-full h-96">
    </div>
</template>

<script>
import VSelect from '@/components/vSelect'
import VCarousel from '@/components/vCarousel'
  export default {
    name: 'HomePage',
    props: {
      msg: String
    },
    components:{
      VSelect,
      VCarousel
    },
    data() {
      return {
        location:'',
        locations:[
          {
            text:"Sangareddy",
            value:"sangareddy"
          },
          {
            text:"Zaheerabad",
            value:"zaheerabad"
          },
          {
            text:"Sadasivapet",
            value:"sadasivapet"
          },
          {
            text:"Patancheru",
            value:"patancheru"
          }
        ],
        businesses:[
          {
            text:"Balaji Hospital",
            value:0
          },
          {
            text:"Karachi Bakery",
            value:1
          },
          {
            text:"Silver Bawarchi",
            value:2
          },
          {
            text:"KS Bakers",
            value:3
          }
        ]
      }
    },
    methods: {
      printLocation() {
        console.log(this.location)
      }
    }
  }
</script>