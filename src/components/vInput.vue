<template>
  <div class="w-full">
    <label  :class="{'required':required}" v-if="label">{{ label }}</label>
    <div :class="[{ 'p-2': size === 'medium' }, { 'p-1': size === 'small' }, { 'p-3': size === 'large' }]"
      class="mb-2 bg-gray-200 rounded-md text-gray-900 flex flex-row justify-center items-center">
      <span class="mx-3 cursor-default material-symbols-outlined">{{ prefixIcon }}</span>
      <input :class="[{ 'p-2': size === 'medium' }, { 'p-1': size === 'small' }, { 'p-3': size === 'large' }]"
        class="bg-gray-200 w-full border-none outline-none" :placeholder="placeholder" :value="modelValue"
        @input="valueChanged" @blur="emitBlur" />
      <span class="mx-3 cursor-default material-symbols-outlined">{{ suffixIcon }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vInput',
  props: {
    required:{
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  methods: {
    valueChanged(e) {
      this.$emit('update:modelValue', e.target.value)
      this.$emit('change', e.target.value)
    },
    emitBlur(e) {
      this.$emit('blur',e.target.value)
    }
  }
}
</script>