<template>
  <div class="w-full relative" v-click-outside="closeDropdown">
    <VInput :modelValue="showValue" :key="refreshInputField" @click="openDropdown" :placeholder="placeholder" :label="label" :prefixIcon="prefixIcon" :suffixIcon="showDropdown ? 'arrow_drop_up' : 'arrow_drop_down'"></VInput>
    <div v-if="showDropdown" @input="showDropdown" class="absolute z-10 text-gray-900 rounded-md shadow-2xl w-[calc(100%-1rem)] p-2 m-2 bg-gray-200">
      <ul class="text-left" @click="selectionChanged">
        <li v-for="(item,index) in list" :class="{'bg-blue-600 text-gray-200':modelValue === item[itemValue]}" :data-value="item[itemValue]" :data-text="item[itemText]" :key="index" class="p-2 hover:bg-blue-200 hover:text-gray-900 cursor-pointer">{{item[itemText]}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import VInput from '@/components/vInput'
export default {
  name:'vSelect',
  emits: ["update:modelValue"],
  props:{
    modelValue:{
      type:String,
      default:''
    },
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
    itemValue: {
      type:String,
      default:'value'
    },
    itemText: {
      type:String,
      default:'text'
    }
  },
  components:{
    VInput
  },
  data() {
    return {
      showDropdown: false,
      refreshInputField: 0
    }
  },
  computed: {
    showValue() {
      let selectedItem = this.list.filter(item=> item[this.itemValue] === this.modelValue)
      return selectedItem.length > 0 ? selectedItem[0][this.itemText] : this.modelValue
    }
  },
  methods: {
    openDropdown() {
      this.showDropdown = true;
    },
    closeDropdown() {
      this.showDropdown = false;
      this.refreshInputField++;
    },
    selectionChanged(e) {
      if(e.target.dataset.value) {
        this.$emit('update:modelValue',e.target.dataset.value)
        setTimeout(() => {
          this.closeDropdown()
        }, 100);
      }
    }
  }
}
</script>