<template>
  <div class="w-full">
    <label v-if="label">{{ label }}</label>
    <div :class="[{ 'p-2': size === 'medium' }, { 'p-1': size === 'small' }, { 'p-3': size === 'large' }]"
      class="mb-2 bg-gray-200 rounded-md text-gray-900 flex flex-row justify-center items-center">
      <textarea rows="3" :class="[{ 'p-2': size === 'medium' }, { 'p-1': size === 'small' }, { 'p-3': size === 'large' }]"
        class="bg-gray-200 w-full border-none outline-none" :placeholder="placeholder" :value="modelValue"
        @input="valueChanged" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'vTextarea',
  props: {
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
      this.$emit('input', e.target.value)
      this.$emit('change', e.target.value)
    }
  }
}
</script>