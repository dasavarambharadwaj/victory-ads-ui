<template>
      <div
        class="max-w-screen-2xl mb-8 mt-24 px-8 grid gap-8 grid-cols-1 lg:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-800 text-gray-200 rounded-lg shadow-lg">
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Contact Us</h2>
            <div class="mt-8">
              Need to get in touch with us? Either fill out the form so we will contact you, or send us an email at <span class="underline select-text"> victoryads.srd@gmail.com</span>
            </div>
          </div>
          <div class="mt-8 text-center">
            <contact-us></contact-us>
          </div>
        </div>
        <div class="text-white">
          <div>
            <v-input size="small" placeholder="Your Name" prefixIcon="person" label="Name"></v-input>
          </div>
          <div class="mt-8">
            <v-input size="small" placeholder="Your Email Address" prefixIcon="alternate_email" label="Email"></v-input>
          </div>
          <div class="mt-8">
            <v-input size="small" placeholder="Your Mobile Number" prefixIcon="call" label="Mobile"></v-input>
          </div>
          <div class="mt-8">
            <v-textarea size="small" placeholder="Your Query..." label="How can we help?"></v-textarea>
            </div>
          <div class="mt-8 text-center">
            <button class="mt-2 rounded-md bg-transparent px-8 py-4 font-medium  transition-colors bg-blue-800 text-white disabled:opacity-50">Submit</button>
          </div>
        </div>
      </div>
</template>

<script>
import VInput from '@/components/vInput.vue'
import VTextarea from '@/components/vTextarea.vue'
import ContactUs from '@/assets/illustrations/contactUs.vue'
  export default {
    name: 'AboutPage',
    props: {
    },
    components:{
      VInput,
      VTextarea,
      ContactUs
    }
  }
</script>