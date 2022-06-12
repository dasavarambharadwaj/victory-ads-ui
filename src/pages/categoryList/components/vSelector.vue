<template>
  <div class="flex flex-wrap justify-center">
      <div tabindex="0" aria-label="card 1" v-for="(item,index) in list" :key="index" @click="CategorySelected(item.category_id,item.category_name)"
        class="focus:outline-none cursor-pointer lg:w-5/12 2xl:w-3/12 w-full border-4 border-gray-200 text-gray-200 m-2 bg-blue-900  p-2 shadow rounded-md">
        <div class="flex items-center pb-2">
          <span class="material-symbols-outlined text-6xl">{{item.UI_config.icon || 'store'}}</span>
          <div class="flex items-start justify-between w-full">
            <div class="pl-3 w-full">
              <p tabindex="0" class="focus:outline-none text-xl font-bold text-white leading-5 ">
                {{item.category_name}}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
</template>
<script>
export default {
  name:"vSelector",
  props:{
    loading:{
      default:false,
      type:Boolean
    },
    list:{
      default() {
        return []
      },
      type:Array
    }
  },
  methods:{
    CategorySelected(value,name) {
      this.$emit("selected",value,name)
    }
  }
}
</script>