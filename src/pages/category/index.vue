<template>
  <div
    class="max-w-screen-2xl mb-8 mt-2 px-8 grid gap-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto backdrop-blur bg-blue-600/30 text-gray-200 rounded-lg shadow-lg">
    <div class="flex flex-col justify-between">
      <div class="flex lg:justify-between flex-col lg:flex-row items-center">
        <h2 class="text-2xl text-yellow-400 font-bold leading-tight mb-4">{{ categoryName }}</h2>
        <v-input placeholder="Search" prefixIcon="search" size="small" class=" lg:w-1/4 w-full mx-2"
          v-model="categorySearchString" @change="getBusinessListByCategory"></v-input>
      </div>
      <div class="mt-8 text-center hidden lg:block">
        <contact-us></contact-us>
      </div>
    </div>
    <div class="rounded-md p-2  text-gray-200">
        <v-category-list @selected="BusinessSelected" :loading="loading" :list="list"></v-category-list>
    </div>
  </div>
</template>

<script>
import VInput from '@/components/vInput.vue'
import VCategoryList from './components/vCategoryList.vue'
import apiService from '@/services/apiService'
import { mapState } from 'vuex'
export default {
  name: 'subCategoryPage',
  data() {
    return {
      categoryId: null,
      categoryName: "",
      categorySearchString: "",
      list: [],
      timeout: null,
      loading: false
    }
  },
  components: {
    VInput,
    VCategoryList
  },
  created() {
    this.categoryId = this.$route.params.id
    this.categoryName = this.$route.params.name
    this.getBusinessListByCategory()
  },
  computed: mapState([
    'location_id'
  ]),
  methods: {
    BusinessSelected(val) {
      this.$router.push({ name: 'BusinessDetails', params: { id: val } })
    },
    async getBusinessListByCategory() {
      if (this.categoryId && this.location_id) {
        this.loading = true
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        try {
          this.timeout = setTimeout(async () => {
            let response = await apiService.get('/businessByCategory', { search: this.categorySearchString, category_id: this.categoryId, location_id: this.location_id })
            this.list = response?.data[0]
            this.loading = false
          }, 300)
        } catch (e) {
          this.loading = false
          this.list = []
        }
      }
    }
  }
}
</script>