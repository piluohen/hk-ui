<template lang="pug">
.doc-countup
  hk-countup(:endVal="endVal")
  el-button(size="small" @click="handleChange") 改变随机值
</template>

<script>
export default {
  name: 'doc-countup',
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
.doc-countup .el-button {
  margin-left: 20px;
}
</style>
