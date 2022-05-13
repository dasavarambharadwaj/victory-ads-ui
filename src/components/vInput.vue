<template>
  <div class="w-full">
    <label v-if="label">{{label}}</label>
    <div class="p-2 m-2 bg-white rounded-full text-black flex flex-row justify-center items-center">
        <span class="mx-3 cursor-default material-symbols-outlined">{{prefixIcon}}</span>
      <input class="p-2 w-full border-none outline-none" :placeholder="placeholder" />
      <span class="mx-3 cursor-default material-symbols-outlined">{{suffixIcon}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'vInput',
  props:{
    placeholder: {
      type:String,
      default:''
    },
    label: {
      type:String,
      default:''
    },
    prefixIcon: {
      type:String,
      default:''
    },
    suffixIcon: {
      type:String,
      default:''
    }
  }
}
</script>