<template>
  <div
    class=" max-w-screen-2xl mt-24 mb-8 px-8 grid gap-8 grid-cols-1 lg:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-blue-900 text-gray-200 rounded-lg shadow-lg">
    <div class="flex flex-col justify-between">
      <div>
        <h2 class="text-2xl text-yellow-400 font-bold leading-tight text-center">Add Business</h2>
        <div class="mt-8 text-center">
          Fill out the form to get your business listed on our website.
        </div>
      </div>
      <div class="mt-8 text-center hidden lg:block">
        <search-icon></search-icon>
      </div>
    </div>
    <div class="">
      <div class=" px-2">
        <v-input placeholder="Enter Business Name" prefixIcon="store" size="small" label="Business Name"></v-input>
      </div>
      <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
        <v-input placeholder="Select Category" prefixIcon="category" size="small" label="Category"></v-input>
      </div>
      <div class="px-2 mt-8 lg:w-1/2 w-full inline-block">
        <v-input placeholder="Enter Owner Name" prefixIcon="person" size="small" label="Owner Name"></v-input>
      </div>
      <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
        <v-input placeholder="Enter Mobile Number" prefixIcon="call" size="small" label="Mobile No 1"></v-input>
      </div>
      <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
        <v-input placeholder="Enter Mobile Number" prefixIcon="call" size="small" label="Mobile No 2"></v-input>
      </div>
      <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
        <v-input placeholder="Enter Email Address" prefixIcon="alternate_email" size="small" label="Email"></v-input>
      </div>
      <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
        <v-select class="" label="City" @textChanged="getLocationData" @change="locationChanged" placeholder="Select City"
      prefixIcon="pin_drop" v-model="locationId" :list="locations" item-text="location_name" item-value="location_id"
      size="small"></v-select>
      </div>
      <div class="px-2 mt-8">
        <v-textarea placeholder="Enter Address" size="small" label="Address"></v-textarea>
      </div>
      <div class="mt-8 text-center">
        <button
          class="mt-2 rounded-md bg-transparent px-8 py-4 font-medium  transition-colors bg-yellow-400 text-blue-900 disabled:opacity-50">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
import VInput from '@/components/vInput.vue'
import vTextarea from '@/components/vTextarea.vue'
import SearchIcon from '@/assets/illustrations/searchIcon.vue'
import vSelect from '@/components/vSelect.vue'
import apiService from '@/services/apiService'
export default {
  name: 'AddBusiness',
  props: {
  },
  components: {
    VInput,
    vTextarea,
    SearchIcon,
    vSelect
  },
  data() {
    return {
      locationId: '',
      locations: [],
    }
  },
  created() {
    this.getLocationData('')
  },
  methods:{
    async getLocationData(search) {
      if (typeof search == "string") {
        let response = await apiService.get('/locations', { search: search })
        this.locations = response?.data[0]
      }
    }
  }
}
</script>