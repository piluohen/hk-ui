<template lang="pug">
.hk-dialog-demo
  el-button(size="small" @click="openDialog") 打开弹框
  hk-dialog(
    v-model="dialogVisible"
    title="弹框"
  )
    div 内容内容
</template>

<script>
export default {
  name: 'hk-dialog-demo',
  data () {
    return {
      dialogVisible: false
    }
  },
  mounted () {
  },
  methods: {
    openDialog () {
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss">
</style>
