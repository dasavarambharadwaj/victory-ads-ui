<template>
  <div class="bg-gray-900 h-full border border-gray-200 rounded-md p-4">
    <div class="text-gray-200 text-center text-2xl mb-4 font-bold">Select Location</div>
    <div v-if="loading">
      <v-loading></v-loading>
    </div>
    <div v-else>
    <button v-if="nearestCity && nearestCity.location_name" @click="confirmLocation"
      class="mt-2 w-full cursor-pointer disabled:cursor-not-allowed rounded-md bg-transparent px-8 py-4 font-medium flex flex-row justify-center self-center  transition-colors bg-green-800 disabled:bg-red-800 text-white disabled:opacity-50">
      <span class="material-symbols-outlined mr-4">my_location</span>
      <span >Confirm location as {{nearestCity.location_name}}</span>
    </button>
    <div v-if="!(nearestCity && nearestCity.location_name)" class="flex text-red-900 bg-red-200 p-2 justify-center rounded-md font-bold">
      <span class="material-symbols-outlined mr-4">location_disabled</span>
      <span>Failed to detect your location</span>

    </div>
    <div class="p-2 bg-gray-800 my-10 rounded-md">
    <div class="flex flex-row mb-10 justify-center font-bold">
      <div class="text-gray-200 text-xl">Select location manually</div>
    </div>
    <v-select class="" @textChanged="getLocationData" @change="locationChanged" placeholder="Select Location"
      prefixIcon="pin_drop" v-model="locationId" :list="locations" item-text="location_name" item-value="location_id"
      size="small"></v-select>
      </div>
      </div>
  </div>
</template>
<script>
import vSelect from './vSelect.vue'
import apiService from '@/services/apiService'
import VLoading from './vLoading.vue'
export default {
  components: {
    vSelect,
    VLoading
},
  name: "askLocation",
  data() {
    return {
      locationId: '',
      locations: [],
      nearestCity: {},
      locationEnabled: false,
      loading:true
    }
  },
  async created() {
    this.loading = true
    this.$store.commit('setLocation', '')
    this.$store.commit('setLocationId', null)
    try {
      await this.getLocationData('')
      let data = await this.getGeoLocation()
      if(data) {
        this.locationEnabled = true
        let cityDistances = this.findNearestLocation(data.coords.latitude, data.coords.longitude)
        cityDistances = cityDistances.filter(item => item.distance < 10)
        cityDistances = cityDistances.sort((a,b)=> a.distance - b.distance)
        if(cityDistances.length > 0) {
          this.nearestCity = cityDistances[0].city
        } else {
          this.nearestCity = {}
        }
      }
      this.loading = false
    } catch(e) {
      this.locationEnabled = false
      this.loading = false
    }
  },
  methods: {
    findNearestLocation(latitude,longitude) {
      return this.locations.map(item=>{
        let cityCoordinates = item.co_ordinates.split(",")
        let distance = this.calcCrow(parseFloat(cityCoordinates[0].trim()),parseFloat(cityCoordinates[1].trim()),latitude,longitude)
        return {"distance":distance,"city":item}
      })
    },
    locationChanged(text) {
      if (typeof text == "string") {
        this.$store.commit('setLocation', text)
        this.$store.commit('setLocationId', this.locationId)
        setTimeout(() => {
          this.$emit('change')
        }, 500);
      }
    },
    confirmLocation() {
      if(this.nearestCity && this.nearestCity.location_name) {
        this.$store.commit('setLocation', this.nearestCity.location_name)
        this.$store.commit('setLocationId', this.nearestCity.location_id)
        setTimeout(() => {
          this.$emit('change')
        }, 500);
      }
    },
    getGeoLocation() {
      if (navigator.geolocation) {
        return new Promise((resolve) => {
          try {
            navigator.geolocation.getCurrentPosition((position) => {
              resolve(position)
            }, () => {
              resolve(null)
            })
          } catch (e) {
            resolve(null)
          }
        })
      }
    },
    async getLocationData(search) {
      if (typeof search == "string") {
        let response = await apiService.get('/locations', { search: search })
        this.locations = response?.data[0]
      }
    },
    calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
      var dLat = this.toRad(lat2-lat1);
      var dLon = this.toRad(lon2-lon1);
      lat1 = this.toRad(lat1);
      lat2 = this.toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    },
    toRad(Value) 
    {
        return Value * Math.PI / 180;
    }
  }
}
</script>