<template lang="pug">
  .demo-form
    hk-form(
      ref="form"
      v-model="model"
      :items="formList"
      :inline="false"
      label-width="100px"
      label-position="right"
    )
</template>

<script>
export default {
  name: 'demo-form',
  data () {
    return {
      model: {
        deviceName: '',
        simCode: '',
        address: {},
        installationSite: '',
        desc: ''
      },
      formList: [
        {
          label: '设备名称',
          tag: 'el-input',
          key: 'deviceName',
          required: true,
          col: 24,
          rules: [
            { required: true, message: '请输入设备名称', trigger: 'change' }
          ],
          attrs: {
            placeholder: "请输入内容",
            maxlength: 10
          }
        },
        {
          label: 'SIM串码',
          tag: 'el-input',
          key: 'simCode',
          col: 24
        },
        {
          label: '安装位置',
          tag: 'el-input',
          key: 'installationSite',
          col: 24,
          props: {
            type: 'textarea'
          },
          attrs: {
            maxlength: 10,
            rows: 4
          }
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.demo-form {
  margin-top: 20px;
}
</style>
