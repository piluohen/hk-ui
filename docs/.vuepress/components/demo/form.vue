<template lang="pug">
  .doc-form
    hk-form(
      :formList="formList"
    )
</template>

<script>
export default {
  name: 'demo-form',
  data () {
    return {
      formList: [
        {
          title: '设备名称',
          type: 'input',
          key: 'deviceName',
          rule: { ruquired: true, message: '请输入设备名称', trigger: 'blur' },
          props: {
            placeholder: '请输入设备名称',
            maxlength: 16
          }
        },
        {
          title: 'SIM串码',
          type: 'input',
          key: 'simCode'
        },
        {
          title: '安装位置',
          type: 'input',
          key: 'installationSite',
          props: {
            maxlength: 16
          }
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.doc-form {
  margin-top: 20px;
}
</style>
