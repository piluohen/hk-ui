<template lang="pug">
.doc-pagination
  .item
    .label 正常显示
    hk-pagination
  .item
    .label 自定义size
    hk-pagination(:size="250")
  .item
    .label 触发事件
    hk-pagination(@change="handleChange")
    p 回调参数：{{ params }}
</template>

<script>
export default {
  name: 'doc-pagination',
  data () {
    return {
      params: {}
    }
  },
  methods: {
    handleChange (val) {
      this.params = val
    }
  }
}
</script>
<style lang="scss">
.doc-pagination {
  padding-top: 20px;
  display: flex;
  .item {
    padding-left: 20px;
  }
}
</style>
