<template>
    <div class="flex flex-wrap justify-center">
      <div tabindex="0" aria-label="card 1" v-for="(item,index) in list" :key="index" @click="BusinessSelected(item.id)"
        class="focus:outline-none cursor-pointer lg:w-5/12 2xl:w-3/12 w-full border border-gray-900 text-gray-200 m-2 bg-gray-900  p-6 shadow rounded">
        <div class="flex items-center border-b border-gray-900  pb-6">
          <span class="material-symbols-outlined text-6xl">{{item.icon}}</span>
          <div class="flex items-start justify-between w-full">
            <div class="pl-3 w-full">
              <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 ">
                {{item.name}}</p>
            </div>
          </div>
        </div>
        <div class="px-2">
          <p tabindex="0" class="text-sm leading-5 py-4 ">
            {{item.address}}
          </p>
        </div>
      </div>
      </div>
</template>
<script>
export default {
    name:"categoryList",
    props:{
        list:{
            type:Array,
            default() {
                return [];
            }
        }
    },
    methods:{
        BusinessSelected(id) {
            this.$emit("selected",id)
        }
    }
}
</script>