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
        deviceType: '',
        simCode: '',
        address: {},
        installationSite: '',
        desc: '',
        radio: '',
        checkbox: []
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
          },
          on: {
            change: (val) => {
              console.log('change', val)
            }
          }
        },
        {
          label: 'SIM串码',
          tag: 'el-switch',
          key: 'simCode',
          col: 24,
          on: {
            change: (val) => {
              console.log(val)
            }
          }
        },
        {
          label: '选择类型',
          tag: 'el-select',
          key: 'deviceType',
          col: 24,
          children: {
            tag: 'el-option',
            options: [
              { label: '选项一', value: '1' },
              { label: '选项二', value: '2' },
              { label: '选项三', value: '3', disabled: true }
            ]
          },
          on: {
            change: (val) => {
              console.log(val)
            }
          }
        },
        {
          label: '单选组',
          tag: 'el-radio-group',
          key: 'radio',
          col: 24,
          children: {
            tag: 'el-radio',
            options: [
              { label: '选项一', value: '1' },
              { label: '选项二', value: '2' },
              { label: '选项三', value: '3', disabled: true }
            ]
          },
          on: {
            change: (val) => {
              console.log(val)
            }
          }
        },
        {
          label: '多选组',
          tag: 'el-checkbox-group',
          key: 'checkbox',
          col: 24,
          children: {
            tag: 'el-checkbox',
            props: {
              border: true,
              size: 'small'
            },
            options: [
              { label: '选项一', value: '1' },
              { label: '选项二', value: '2' },
              { label: '选项三', value: '3', disabled: true }
            ]
          },
          on: {
            change: (val) => {
              console.log(val)
            }
          }
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
