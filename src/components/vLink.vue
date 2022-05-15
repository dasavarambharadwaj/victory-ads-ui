<template>
    <a class="p-2 rounded-md no-underline hover:no-underline" :href="href"><slot></slot></a>
</template>
<script>
export default {
  name: 'VLink',
  props: {
    href:String
  }
}
</script>
