# hk-form组件

## 基础用法

<hk-form-base/>

```scss

<template lang="pug">
  .demo-form
    el-row(:gutter="20")
      el-col(:span="12")
        hk-form(
          ref="form"
          v-model="model"
          :items="formItems"
          :inline="false"
          label-width="100px"
          label-position="right"
        )
        hk-button(type="normal" @click="handleClear") 清除校验
        hk-button(type="normal" @click="handleReset") 重置表单
      el-col(:span="12")
        p.code {{ model }}
</template>

<script>
export default {
  name: 'demo-form',
  data () {
    return {
      model: {
        name: '',
        switch: true,
        type: '',
        radio: '',
        checkbox: [],
        number: '0',
        cascader: [],
        slider: 0,
        time: '',
        rate: 4,
        color: '',
        desc: ''
      },
      formItems: [
        {
          label: '名称',
          tag: 'el-input',
          key: 'name',
          required: true,
          rules: [
            { required: true, message: '请输入名称', trigger: 'change' }
          ],
          attrs: {
            placeholder: "请输入名称",
            maxlength: 10
          },
          on: {
            change: (val) => {
              console.log('change', val)
            }
          }
        },
        {
          label: '开关',
          tag: 'el-switch',
          key: 'switch',
          on: {
            change: (val) => {
              console.log(val)
            }
          }
        },
        {
          label: '选择类型',
          tag: 'el-select',
          key: 'type',
          props: {
            clearable: true,
            filterable: true
          },
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
            },
            'visible-change': (val) => {
              console.log(val)
            }
          }
        },
        {
          label: '单选组',
          tag: 'el-radio-group',
          key: 'radio',
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
          label: '数字输入',
          tag: 'el-input-number',
          key: 'number'
        },
        {
          label: '多层选择',
          tag: 'el-cascader',
          key: 'cascader',
          props: {
            options: [{
              value: 'zhinan',
              label: '指南',
              disabled: true,
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
              }]
            }]
          }
        },
        {
          label: '滑块',
          tag: 'el-slider',
          key: 'slider'
        },
        {
          label: '时间选择',
          tag: 'hk-date-picker',
          key: 'time'
        },
        {
          label: '评分',
          tag: 'el-rate',
          key: 'rate'
        },
        {
          label: '颜色选择',
          tag: 'el-color-picker',
          key: 'color'
        },
        {
          label: '描述',
          tag: 'el-input',
          key: 'desc',
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
  },
  methods: {
    handleClear () {
      this.$refs.form.clearValidate()
    },
    handleReset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>

```

## 多行用法

多行用法，只需要把inline传值改为true

<hk-form-inline/>

## 自定义宽列

自定义宽列只需要传入col，col的值为0-24的整数

<hk-form-col/>

```js

{
  label: '评分',
  tag: 'el-rate',
  key: 'rate',
  col: 12
}

```

## Api

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| v-model | 表单数据， | Object |  | 是 |  |
| items | 表单子项 | Array |  | 是 |  |

更多配置请参考：[el-form](https://element.eleme.cn/#/zh-CN/component/form)

<font color="red">注意：使用el-checkbox-group组件时，v-model必须传入el-checkbox-group默认值[]，否则报错</font>

## items Api

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| label | label文字 | String |  | 是 |  |
| tag | 标签元素名称 | String | el-input等/自定义组件 | 否 | el-input |
| key | 表单model的名称 | String |  | 是 |  |
| props | 组件props传参 | Object |  | 否 |  |
| attrs | 组件attrs传参，如input的原生maxLength | Object |  | 否 |  |
| on | 组件绑定的事件 | Object | click等 | 否 |  |
| col | 表单子项宽列 | Integer | 0-24 之间的整数 | 否 | 24 |
| children | 组件子项配置 | Object | el-option等 | 否 |  |

## children Api

使用[el-select](https://element.eleme.cn/#/zh-CN/component/select) / [el-radio-group](https://element.eleme.cn/#/zh-CN/component/radio) / [el-checkbox-group](https://element.eleme.cn/#/zh-CN/component/checkbox) 的时候需要配置

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| tag | 标签元素名称 | String | el-option/el-radio/el-radio-button/el-checkbox/el-checkbox-button | 否 |  |
| options | 子项配置 | Object |  | 否 |  |

## children options Api
此处只列出常用三项，其他参看 [el-select](https://element.eleme.cn/#/zh-CN/component/select) / [el-radio-group](https://element.eleme.cn/#/zh-CN/component/radio) / [el-checkbox-group](https://element.eleme.cn/#/zh-CN/component/checkbox)

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| label | 显示文字 | String |  | 否 |  |
| value | 值 | String |  | 否 |  |
| disabled | 是否禁用 | Boolean |  | 否 |  |
