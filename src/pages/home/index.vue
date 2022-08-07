<template>
  <div class="text-center flex flex-col items-center  mt-6">
    <!-- <h1 class="lg:text-5xl text-4xl font-bold text-yellow-400 my-3">Search Local Business</h1> -->
    <div class="w-full lg:w-1/2 text-center mb-6 inline-block">
      <!-- <VSelect class="my-3" @change="printLocation" v-model="location" :list="locations" item-text="text" item-value="value" placeholder="Select Location" prefixIcon="pin_drop"></VSelect> -->
      <VSelect @textChanged="search" class="my-3" @change="gotoBusinessPage" :list="businesses" v-model="selectedId"
        item-text="name" item-value="id" placeholder="Search Categories" prefixIcon="search"></VSelect>
    </div>
    <div class="w-full flex mb-6 flex-col items-center ">
      <VCarousel />
    </div>
  </div>
</template>

<script>
import VSelect from '@/components/vSelect'
import VCarousel from '@/components/vCarousel'
import { mapState } from 'vuex'
import apiService from '@/services/apiService'
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
    'location',
    'location_id'
  ]),
  data() {
    return {
      businesses: [
      ],
      selectedId: -1,
      timeout: null
    }
  },
  methods: {
    gotoBusinessPage() {
      if (this.selectedId) {
        let id = parseInt(this.selectedId)
        let object = this.businesses.filter(item => item.id === id)
        if (object.length > 0) {
          if (object[0].is_category) {
            this.$router.push({ name: 'Category', params: { id: id, name: object[0].name } })
          } else {
            this.$router.push({ name: 'BusinessDetails', params: { id: id } })
          }
        }
      }
    },
    async search(val) {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(async () => {
        if (val.length > 2 && this.location_id) {
          let response = await apiService.get('/search', {
            search: val,
            location_id: this.location_id
          })
          this.businesses = response?.data[0]
        } else {
          this.businesses = []
        }
      }, 300);
    }
  }
}
</script>