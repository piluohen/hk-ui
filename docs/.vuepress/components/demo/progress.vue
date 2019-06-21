<template lang="pug">
.demo-progress
  hk-progress(:percentage="percentage")
  el-button(size="small" @click="handleChange") 改变随机值
</template>

<script>
export default {
  name: 'demo-progress',
  data () {
    return {
      percentage: 0
    }
  },
  mounted () {
    this.handleChange()
  },
  methods: {
    handleChange () {
      this.percentage = Math.random() * 100
    }
  }
}
</script>
<style lang="scss">
.demo-progress
  .el-button {
    margin-left: 20px;
  }
</style>
