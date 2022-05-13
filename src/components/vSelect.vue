<template>
  <div class="w-full">
    <VInput :placeholder="placeholder" :label="label" :prefixIcon="prefixIcon" :suffixIcon="suffixIcon"></VInput>
  </div>
</template>
<script>
import VInput from '@/components/vInput'
export default {
  name:'vSelect',
  props:{
    list: {
      type:Array,
      default() {
        return []
      }
    },
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
      default:'arrow_drop_down'
    }
  },
  components:{
    VInput
  }
}
</script>