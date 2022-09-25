<template>
  <div class="flex flex-wrap justify-center">
    <div v-if="loading">
      <v-loading></v-loading>
    </div>
    <div v-else-if="list.length === 0" class=" flex items-center flex-col max-w-xs w-full m-auto">
      <h1 class=" text-xl font-bold text-gray-200 mb-4">No Data</h1>
      <no-data></no-data>
    </div>
    <div tabindex="0" v-else aria-label="card 1" v-for="(item, index) in list" :key="index"
      @click="BusinessSelected(item.business_id)"
      class="focus:outline-none cursor-pointer lg:w-5/12 2xl:w-3/12 w-full border-2 border-gray-200 text-gray-200 m-2  p-2 shadow rounded-md">
      <div class="flex items-center border-b border-gray-200  pb-2">
        <!-- <span class="material-symbols-outlined text-4xl">{{ item?.UI_config?.icon || 'store' }}</span> -->
        <div class="flex items-start justify-between w-full">
          <div class="pl-3 w-full">
            <p tabindex="0" class="focus:outline-none text-base font-bold text-white">
              {{ item.business_name }}</p>
          </div>
        </div>
      </div>
      <div class="px-2">
        <p tabindex="0" class="text-xs leading-5 text-gray-200 py-4 ">
          {{ item.address }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import vLoading from '@/components/vLoading.vue'
import noData from '@/assets/illustrations/noData.vue'
export default {
  name: "categoryList",
  components:{
    vLoading,
    noData
  },
  props: {
    loading: {
      default: false,
      type: Boolean
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    BusinessSelected(id) {
      this.$emit("selected", id)
    }
  }
}
</script>