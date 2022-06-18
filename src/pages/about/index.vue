<template>
  <div
    class="max-w-screen-2xl mb-8 mt-24 px-8 grid gap-8 grid-cols-1 lg:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-blue-900 text-gray-200 rounded-lg shadow-lg">
    <div class="flex flex-col justify-between">
      <div>
        <h2 class="text-2xl text-yellow-400 font-bold leading-tight text-center">Contact Us</h2>
        <div class="mt-8 text-sm text-center">
          Need to get in touch with us? Either fill out the form so we will contact you, or send us an email at <span
            class="underline select-text"> victoryads.srd@gmail.com</span>
        </div>
      </div>
      <div class="mt-8 text-center hidden lg:block">
        <contact-us></contact-us>
      </div>
    </div>
    <div>
      <div>
        <v-input size="small" :required="true" placeholder="Your Name" prefixIcon="person" v-model="model.name"
          @change="validate('name')" label="Name"></v-input>
        <p v-if="validations.name" class="text-red-900 rounded-md bg-red-400 pl-3 font-light">
          {{ validations.name }}
        </p>
      </div>
      <div class="mt-8">
        <v-input size="small" placeholder="Your Email Address" v-model="model.email" @change="() => { validate('email') }"
          prefixIcon="alternate_email" label="Email"></v-input>
        <p v-if="validations.email" class="text-red-900 rounded-md bg-red-400 pl-3 font-light">
          {{ validations.email }}
        </p>
      </div>
      <div class="mt-8">
        <v-input size="small" :required="true" placeholder="Your Mobile Number" v-model="model.phone"
          @change="() => { validate('phone') }" prefixIcon="call" label="Mobile"></v-input>
        <p v-if="validations.phone" class="text-red-900 rounded-md bg-red-400 pl-3 font-light">
          {{ validations.phone }}
        </p>
      </div>
      <div class="mt-8">
        <v-textarea size="small" :required="true" placeholder="Your Query..." v-model="model.query"
          @change="() => { validate('query') }" label="How can we help?"></v-textarea>
        <p v-if="validations.query" class="text-red-900 rounded-md bg-red-400 pl-3 font-light">
          {{ validations.query }}
        </p>
      </div>
      <div class="mt-8 text-center">
        <button @click="() => { submit() }" :disabled="loading"
          class="mt-2 rounded-md bg-transparent px-8 py-4 font-medium  transition-colors bg-yellow-400 text-blue-900 disabled:opacity-50">
            <span v-if="!loading">Submit</span>
            <span v-else>
              <v-loading></v-loading>
            </span>
          </button>
      </div>
    </div>
  </div>
  <div class="fixed w-full h-full z-30 top-0 bg-gray-900 bg-opacity-0 overflow-auto transition-all" @click="() => { dataSaved = false }" :class="dataSaved ? 'max-h-full' : 'max-h-0'">
      <div @click.stop
        class="m-auto flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        <i class="material-symbols-outlined text-7xl">priority</i>
        <h2 class="text-xl font-semibold text-center leading-tight tracking-wide">Thank you. We have received your request. We will
          contact you soon</h2>
        <p class="flex-1 text-center dark:text-gray-400"></p>
        <button type="button" class="px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
          @click="() => { dataSaved = false }">Okay</button>
      </div>
  </div>

</template>
<script>
import VInput from '@/components/vInput.vue'
import VTextarea from '@/components/vTextarea.vue'
import ContactUs from '@/assets/illustrations/contactUs.vue'
import apiService from '@/services/apiService'
import vLoading from '@/components/vLoading.vue'
export default {
  name: 'AboutPage',
  props: {
  },
  data() {
    return {
      validations: {
        name: '',
        email: '',
        phone: '',
        query: ''
      },
      model: {
        name: '',
        email: '',
        phone: '',
        query: ''
      },
      dataSaved: false,
      debounce: null,
      loading: false,
    }
  },
  components: {
    VInput,
    VTextarea,
    ContactUs,
    vLoading
  },
  methods: {
    async submit() {
      if(this.debounce) {
        clearTimeout(this.debounce)
      }
      this.debounce = setTimeout(async () => {
        
        this.validate();
        if (this.validations.email || this.validations.phone || this.validations.name || this.validations.query) {
          return false
        } else {
          this.loading = true
          let response = await apiService.post('/contactUs', this.model)
          if (response) {
            this.model = {
              name: '',
              email: '',
              phone: '',
              query: ''
            }
            this.dataSaved = true;
          } else {
            alert("Some error occurred")
          }
          this.loading = false
        }
      }, 300);
      
      
    },
    validate(field) {
      if (!field || field === "name") {
        this.validations.name = this.fieldRequiredValidation(this.model.name)
      }
      if (!field || field === "phone") {
        this.validations.phone = this.fieldRequiredValidation(this.model.phone)
        if (!this.validations.phone) {
          this.validations.phone = this.phoneNumberValidation(this.model.phone)
        }
      }
      if (!field || field === "email") {
        this.validations.email = this.emailValidation(this.model.email)
      }
      if (!field || field === "query") {
        this.validations.query = this.fieldRequiredValidation(this.model.query)
      }
    },
    fieldRequiredValidation(val) {
      if (!val) {
        return "This field is required"
      }
      return ""
    },
    phoneNumberValidation(val) {
      if (val) {
        let exp = /^[6-9]\d{9}$/
        let res = exp.test(val)
        if (!res) {
          return "This number is invalid"
        }
      }
      return ""
    },
    emailValidation(val) {
      let exp = /\S+@\S+\.\S+/
      if (exp.test(val) || val === "") {
        return ""
      }
      return "Invalid email address"
    }
  }
}
</script>