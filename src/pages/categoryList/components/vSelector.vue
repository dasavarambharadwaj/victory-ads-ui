<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="(item,index) in list" :data-value="item.value" :key="index"
      class=" m-1 shrink-0 rounded-md border-4 cursor-pointer bg-gray-900 text-gray-200 h-32 w-32 border-gray-900">
      <div class="flex h-full flex-col items-center justify-center" :data-value="item.value">
        <span class="material-symbols-outlined text-6xl" :data-value="item.value">{{item.icon}}</span>
        <span class=" text-center" :data-value="item.value">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"vSelector",
    props:{
        list:{
            default() {
                return []
            },
            type:Array
        }
    }
    
}
</script>