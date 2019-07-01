# hk-search 搜索组件

## 输入框搜索

<template>
  <hk-ui-search/>
</template>

::: tip 说明

支持回车搜索,默认支持可清除配置，不想要清除配置[[attrs]][[clearable]]为[[false]],回调[[submit]]数据是所输入内容
:::

```html
<template lang="pug">
.hk-ui
  hk-search(:searchList="searchList" @submit="submit")
  p.code 输入内容：{{form}}
</template>
<script>
  export default {
    name: 'hk-ui-search',
    data() {
      return {
        selsect: '',
        form: {},
        list: [{ text: '选项1', value: 1 }, { text: '选项2', value: 2 }],
        searchList: [
          {
            tag: 'el-input',
            key: 'keyword',
            attrs: {
              placeholder: '搜索设备名称/设备ID'
            }
          }
        ]
      }
    },
    methods: {
      submit(data) {
        this.form = data
      },
      change(data) {
        this.selsect = data
      }
    }
  }
</script>
```

## 下拉框搜索

<template>
  <hk-ui-search.1/>
</template>

::: tip 说明

当我们在使用选择器时，可以用 render 函数也可以用下面的写法
:::

```html
<template lang="pug">
.hk-ui
  hk-search(:searchList="searchList" title="选择设备：" @submit="submit")
  p.code 输入内容：{{form}}
</template>
<script>
  export default {
    name: 'hk-ui-search.1',
    data() {
      return {
        form: {
          type2: ''
        },
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          }
        ],
        searchList: [
          {
            label: '设备搜索：',
            tag: 'el-input',
            key: 'keyword',
            attrs: {
              placeholder: '请输入设备名称/地址'
            }
          },
          {
            tag: 'el-select',
            key: 'type',
            props: {
              clearable: true,
              filterable: true
            },
            children: {
              tag: 'el-option',
              options: [{ label: '选项一', value: '1' }, { label: '选项二', value: '2' }, { label: '选项三', value: '3', disabled: true }]
            },
            on: {
              change: val => {
                console.log(val)
              },
              'visible-change': val => {
                console.log(val)
              }
            }
          },
          {
            render: (h, from) => {
              return (
                <el-select v-model={this.form.type2} placeholder="请选择选项2">
                  {this.options.map(item => {
                    return <el-option key={item.value} label={item.label} value={item.value} />
                  })}
                </el-select>
              )
            }
          }
        ]
      }
    },
    methods: {
      submit(data) {
        this.form = { type2: this.form.type2, ...data }
        console.log(data, 77)
      }
    }
  }
</script>
```

## 时间和日期搜索

::: tip 说明

支持[[daterange]]和[[datetimerange]]两个属性，不允许选择今天之后的配置，[[disabledDate]]为[[false]]可以选择所有日期，目前可配置只能支持一个搜索类型和时间搜索
:::

<template>
  <hk-ui-search.2/>
</template>

```html
<template lang="pug">
.hk-ui
  h2 daterange示例
  hk-search(:searchList="searchList" @submit="submit")
  p.code 输入内容：{{form}}
</template>
<script>
  export default {
    name: 'hk-ui-search.2',
    data() {
      return {
        form: {},
        searchList: [
          {
            label: '时间选择:',
            tag: 'hk-date-picker',
            key: 'time',
            props: {
              type: 'datetimerange',
              placeholder: '请选择时间'
            }
          },
          {
            tag: 'hk-date-picker',
            key: 'time1',
            props: {
              type: 'daterange',
              placeholder: '请选择时间'
            }
          }
        ]
      }
    },
    methods: {
      submit(data) {
        this.form = data
        console.log(data, 77)
      }
    }
  }
</script>
```

## 超多内容搜索

<template>
  <hk-ui-search.3/>
</template>

```html
<template lang="pug">
.hk-ui
  h2 超多示例
  hk-search(:searchList="searchList" @submit="submit" :more="more")
  p.code 输入内容：{{form}}
</template>
<script>
  export default {
    name: 'hk-ui-search.3',
    data() {
      return {
        form: {},
        more: true,
        searchList: [
          {
            label: '设备搜索：',
            tag: 'el-input',
            key: 'keyword',
            col: 8,
            attrs: {
              placeholder: '请输入设备名称/地址'
            }
          },
          {
            tag: 'el-select',
            key: 'type',
            col: 8,
            props: {
              clearable: true,
              filterable: true
            },
            children: {
              tag: 'el-option',
              options: [{ label: '选项一', value: '1' }, { label: '选项二', value: '2' }, { label: '选项三', value: '3', disabled: true }]
            },
            on: {
              change: val => {
                console.log(val)
              },
              'visible-change': val => {
                console.log(val)
              }
            }
          },
          {
            label: '设备搜索2：',
            tag: 'el-input',
            key: 'keyword2',
            col: 8,
            attrs: {
              placeholder: '请输入设备名称/地址'
            }
          },
          {
            label: '时间选择:',
            tag: 'hk-date-picker',
            col: 12,
            key: 'time',
            props: {
              type: 'datetimerange',
              placeholder: '请选择时间'
            }
          }
        ]
      }
    },
    methods: {
      submit(data) {
        this.form = data
        console.log(data, 77)
      }
    }
  }
</script>
```

## Attributes

| 参数       |       描述       |  类型   | 必须 | 默认值 |
| ---------- | :--------------: | :-----: | :--: | ------ |
| searchList |      配置项      |  Array  |  是  | -      |
| showSubmit |     搜索按钮     | Boolean |  否  | true   |
| more       | 是否有很多搜索项 | Boolean |  否  | false  |

## Events

| 事件名称 | 说明     | 回调参数       |
| -------- | :------- | -------------- |
| submit   | 提交按钮 | data（搜索项） |

## searchList API

| 参数     |                    描述                    |  类型   |         可选值         | 必须 | 默认值   |
| -------- | :----------------------------------------: | :-----: | :--------------------: | :--: | -------- |
| label    |                 label 文字                 | String  |                        |  是  |          |
| tag      |                标签元素名称                | String  | el-input 等/自定义组件 |  否  | el-input |
| key      |             表单 model 的名称              | String  |                        |  是  |          |
| props    |              组件 props 传参               | Object  |                        |  否  |          |
| attrs    | 组件 attrs 传参，如 input 的原生 maxLength | Object  |                        |  否  |          |
| on       |               组件绑定的事件               | Object  |        click 等        |  否  |          |
| col      |                表单子项宽列                | Integer |    0-24 之间的整数     |  否  | 24       |
| children |                组件子项配置                | Object  |      el-option 等      |  否  |          |
