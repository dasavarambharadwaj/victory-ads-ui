<template>
  <div class="text-center">
    <h1 class="text-3xl text-white ">Search in Sangareddy</h1>
    <div class="w-full lg:w-1/2 text-center inline-block">
      <VSelect placeholder="Select Location" prefixIcon="pin_drop"></VSelect>
      <VSelect placeholder="Search Local Business" prefixIcon="search"></VSelect>
    </div>
    </div>
</template>

<script>
import VSelect from '@/components/vSelect'
  export default {
    name: 'HomePage',
    props: {
      msg: String
    },
    components:{
      VSelect
    }
  }
</script>