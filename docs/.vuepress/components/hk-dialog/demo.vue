<template lang="pug">
.hk-dialog-demo
  el-button(size="small" @click="openDialog('edit')") 打开编辑弹框
  el-button(size="small" @click="openDialog('preview')") 打开预览弹框
  hk-dialog(
    v-model="dialogVisible"
    :preview="preview"
    :title="title"
    @confirm="confirm"
    @cancel="cancel"
    @opened="opened"
    @closed="closed"
  )
    div 内容内容
</template>

<script>
export default {
  name: 'hk-dialog-demo',
  data () {
    return {
      dialogVisible: false,
      preview: false
    }
  },
  computed: {
    title () {
      return this.preview ? '预览' : '编辑'
    }
  },
  methods: {
    openDialog (type) {
      if (type === 'preview') {
        this.preview = true
      } else {
        this.preview = false
      }
      this.dialogVisible = true
    },
    confirm () {
      console.log('点击确定')
    },
    cancel () {
      console.log('点击取消')
    },
    opened () {
      console.log('弹框打开了')
    },
    closed () {
      console.log('弹框关闭了')
    }
  }
}
</script>
<style lang="scss">
</style>
