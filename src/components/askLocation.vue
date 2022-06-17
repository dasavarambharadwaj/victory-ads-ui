<template>
  <div class="bg-gray-900 h-full border border-gray-200 rounded-md p-4">
    <div class="text-gray-200 text-center text-2xl mb-4 font-bold">Select Location</div>
    <button disabled
      class="mt-2 w-full rounded-md bg-transparent px-8 py-4 font-medium flex flex-row justify-center self-center  transition-colors bg-blue-800 text-white disabled:opacity-50">
      <span class="material-symbols-outlined mr-4">my_location</span>
      <span>Use my current location</span></button>
    <div class="flex flex-row my-10">
      <div class="border my-4 mx-2 grow"></div>
      <div class="text-gray-200">or</div>
      <div class="border my-4 mx-2 grow"></div>
    </div>
    <v-select class="mb-20" @textChanged="getLocationData" @change="locationChanged" placeholder="Select Location"
      prefixIcon="pin_drop" v-model="locationId" :list="locations" item-text="location_name" item-value="location_id"
      size="medium"></v-select>
  </div>
</template>
<script>
import vSelect from './vSelect.vue'
import apiService from '@/services/apiService'
export default {
  components: {
    vSelect
  },
  name: "askLocation",
  data() {
    return {
      locationId: '',
      locations: [],
    }
  },
  created() {
    this.$store.commit('setLocation', '')
    this.$store.commit('setLocationId', null)
    this.getLocationData('')
  },
  methods: {
    locationChanged(text) {
      if (typeof text == "string") {
        this.$store.commit('setLocation', text)
        this.$store.commit('setLocationId', this.locationId)
        setTimeout(() => {
          this.$emit('change')
        }, 500);
      }
    },
    async getLocationData(search) {
      if (typeof search == "string") {
        let response = await apiService.get('/locations', { search: search })
        this.locations = response?.data[0]
      }
    }
  }
}
</script>