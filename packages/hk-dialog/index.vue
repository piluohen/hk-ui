<template lang="pug">
  el-dialog(
    custom-class="hk-dialog"
    :visible="value"
    :before-close="handleClose"
    :width="width"
    :close-on-click-modal="preview"
    :append-to-body="true"
    :show-close="preview"
    v-bind="$attrs"
    v-on="$listeners"
  )
    .dialog-header(slot="title")
      span.el-dialog__title {{title}}
      slot(name="right")
    slot
    span(slot="footer" class="dialog-footer")
      hk-button.hekr-btn(v-if="showCancel" type="normal" @click="handleClose") 取 消
      hk-button.hekr-btn(v-if="!preview && showConfirm" @click="handleConfirm" :loading="loading") 确 定
</template>

<script>
export default {
  name: 'hk-dialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    autoclose: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    preview: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '500px'
    }
  },
  methods: {
    handleClose () {
      if (this.loading) return
      this.$emit('input', false)
      this.$emit('cancel')
    },
    handleConfirm () {
      if (this.autoclose) {
        if (this.loading) return
        this.$emit('input', false)
      }
      this.$emit('confirm')
    }
  }
}
</script>
<style lang="scss">
$color-title: #0d142b;
$color-border: #d3d6dd;
.el-dialog__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-dialog.hk-dialog {
  margin: 0 !important;
  background-color: transparent;
  max-height: 100%;
  padding-top: 20px;
  box-shadow: none;
  .el-dialog__header {
    height: 60px;
    padding: 0 20px;
    line-height: 60px;
    font-size: 14px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px 8px 0 0;
    .dialog-header {
      width: 100%;
      border-left: 4px solid #1868eb;
      padding-left: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .el-dialog__title {
      font-size: 14px;
      font-weight: bold;
    }
    .el-dialog__headerbtn {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      position: inherit;
      background-color: $color-border;
      color: $color-title;
    }
  }
  .el-dialog__body {
    padding: 20px;
    box-shadow: inset 0px 7px 16px 0px #f7f7f7;
    background-color: #ffffff;
  }
  .el-dialog__footer {
    background-color: #ffffff;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 0 0 8px 8px;
  }
}
</style>
