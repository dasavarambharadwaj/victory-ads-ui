<template>
      <div
        class=" max-w-screen-2xl mt-24 mb-8 px-8 grid gap-8 grid-cols-1 lg:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-800 text-gray-200 rounded-lg shadow-lg">
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Add Your Business</h2>
            <div class="mt-8">
              Fill out the form to get your business listed on our website.
            </div>
          </div>
          <div class="mt-8 text-center">
            <search-icon></search-icon>
          </div>
        </div>
        <div class="">
          <div class=" px-2">
            <v-input placeholder="Enter Business Name" prefixIcon="store" size="small" label="Business Name"></v-input>
          </div>
          <div class="px-2 mt-8 lg:w-1/2 w-full inline-block">
            <v-input placeholder="Enter Owner Name" prefixIcon="person" size="small" label="Owner Name"></v-input>
          </div>
          <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
            <v-input placeholder="Enter Mobile Number" prefixIcon="call" size="small" label="Mobile No"></v-input>
          </div>
          <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
            <v-input placeholder="Enter Email Address" prefixIcon="alternate_email" size="small" label="Email"></v-input>
          </div>
          <div class="lg:w-1/2 w-full px-2 mt-8 inline-block">
            <v-input placeholder="Select City" prefixIcon="map" size="small" label="City"></v-input>
          </div>
          <div class="px-2 mt-8">
            <v-textarea placeholder="Enter Address" size="small" label="Address"></v-textarea>
          </div>
          <div class="mt-8 text-center">
            <button class="mt-2 rounded-md bg-transparent px-8 py-4 font-medium  transition-colors bg-blue-800 text-white disabled:opacity-50">Submit</button>
          </div>
        </div>
      </div>
</template>
<script>
import VInput from '@/components/vInput.vue'
import vTextarea from '@/components/vTextarea.vue'
import SearchIcon from '@/assets/illustrations/searchIcon.vue'
  export default {
    name: 'AddBusiness',
    props: {
    },
    components:{
        VInput,
        vTextarea,
        SearchIcon
    }
  }
</script>