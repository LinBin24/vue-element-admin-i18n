<template>
  <div style="width: 100%; display:inline-flex; justify-content: space-between; align-items: center">
    <label class="radio-label" style="font-size: 22px">{{ title }}</label><slot name="test1" :opt="options">{{ options[0] }}</slot><slot name="test2" :user="options">{{ options[1] }}</slot>
    <el-select v-model="dateType" style="width:120px;">
      <el-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '年度选择'
    },
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: function() {
        return ['年度选择', '月选择', '日选择']
      }
    }
  },
  data() {
    return {

    }
  },
  computed: {
    dateType: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
