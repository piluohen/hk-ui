<template lang="pug">
.demo-countup
  hk-countup(:endVal="endVal")
  el-button(
    size="small"
    @click="handleChange"
  ) 改变随机值
</template>

<script>
export default {
  name: 'demo-countup',
  data () {
    return {
      endVal: 0
    }
  },
  mounted () {
    this.handleChange()
  },
  methods: {
    handleChange () {
      this.endVal = Math.random() * 1000 + 1000
    }
  }
}
</script>
<style lang="scss">
.demo-countup .el-button {
  margin-left: 20px;
}
</style>
