<template>
  <div>
    <el-alert :closable="false" title="menu 1-3" type="success" />
    <div @click="test">3333333333333</div>
  </div>
</template>

<script>
export default {
  name: 'Test31',
  props: {
    testProps3: {
      validator: function(value) {
        if (['success', 'warning', 'danger'].indexOf(value) !== -1) {
          console.log('成功!' + 'value:' + value)
        } else {
          console.log('失败!' + 'value:' + value)
        }
        return value
      },
      default: 'success'
    }
  },
  methods: {
    test() {
      console.log(2222)
      console.log(this.testProps3)
      this.$emit('test')
    }
  }
}
</script>

<style scoped>

</style>
