# hk-search 搜索组件

## 输入框搜索

<template>
  <hk-ui-search.1/>
</template>

::: tip 说明

支持回车搜索,默认支持可清除配置，不想要清除配置[[clearable]]为[[false]],回调[[submit]]数据是所输入内容
:::

```html
<template lang="pug">
.hk-ui-search
  hk-search(:searchList="searchList" @submit="submit")
  p 输入内容：{{form}}
</template>
<script>
  export default {
    name: 'hk-ui-search.1',
    data() {
      return {
        form: {},
        searchList: [
          {
            title: '选择设备:',
            type: 'hk-form',
            children: [
              {
                type: 'input',
                key: 'keyword',
                props: {
                  placeholder: '搜索设备名称/设备ID'
                }
              }
            ]
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

## 下拉框搜索

<template>
  <hk-ui-search/>
</template>

::: tip 说明

当我们在使用选择器时，会有两种写法，各有优劣，封装的不提供[[change]]回调，自己写的话自定义较高
:::

```html
<template lang="pug">
.edit
  hk-search(:searchList="searchList" @submit="submit")
  p 输入内容：{{form}}
  p 选中内容：{{selsect}}
</template>
<script>
  export default {
    name: 'hk-ui-search',
    data() {
      return {
        selsect: '',
        form: {},
        list: [{ text: '选项1', value: 1 }, { text: '选项2', value: 2 }]
      }
    },
    computed: {
      searchList() {
        return [
          {
            title: '选择设备:',
            type: 'hk-form',
            children: [
              {
                type: 'input',
                key: 'keyword',
                props: {
                  placeholder: '搜索设备名称/设备ID'
                }
              },
              {
                type: 'select',
                key: 'select1',
                options: this.list.map(item => ({
                  text: item.text,
                  value: item.value
                })),
                props: {
                  placeholder: '请选择设备类型'
                }
              },
              {
                key: 'select2',
                render: (h, item, form) => {
                  return (
                    <el-select
                      v-model={form.select2}
                      onChange={data => this.change(data)}
                      size="small"
                      placeholder="请选择设备型号"
                      clearable
                      style="margin-left:20px"
                    >
                      {this.list.map(goos => {
                        return <el-option label={goos.text} value={goos.value} />
                      })}
                    </el-select>
                  )
                }
              }
            ]
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

## 时间和日期搜索

::: tip 说明

支持[[daterange]]和[[datetimerange]]两个属性，不允许选择今天之后的配置，[[disabledDate]]为[[false]]可以选择所有日期，目前可配置只能支持一个搜索类型和时间搜索
:::

<template>
  <hk-ui-search.2/>
</template>

```js
<template lang="pug">
.hk-ui
  h1 daterange示例
  hk-search(:searchList="searchList" @submit="submit")
  p.code 输入内容：{{form}}
</template>
<script>
export default {
  name: 'hk-ui-search.2',
  data () {
    return {
      form: {},
      searchList: [
        {
          type: 'daterange'
        }
      ]
    }
  },
  methods: {
    submit (data) {
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

```vue
<template lang="pug">
.hk-ui
  h2 超多示例
  hk-search(:searchList="searchList" @submit="submit" :more="more")
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
          title: '选择设备:',
          type: 'hk-form',
          children: [
            {
              type: 'input',
              key: 'keyword',
              props: {
                placeholder: '搜索设备名称/设备ID'
              }
            },
            {
              type: 'input',
              key: 'keyword1',
              props: {
                placeholder: '搜索设备名称/设备ID'
              }
            },
            {
              type: 'input',
              key: 'keyword1',
              props: {
                placeholder: '搜索设备名称/设备ID'
              }
            },
            {
              type: 'input',
              key: 'keyword1',
              props: {
                placeholder: '搜索设备名称/设备ID'
              }
            }
          ]
        },
        {
          type: 'daterange'
        },
        {
          title: ' ',
          type: 'daterange'
        },
        {
          type: 'daterange'
        },
        {
          type: 'daterange'
        },
        {
          title: ' ',
          type: 'daterange'
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

| 参数          |       描述       |  类型   | 必须 | 默认值 |
| ------------- | :--------------: | :-----: | :--: | ------ |
| searchList    |      配置项      |  Array  |  是  | -      |
| labelMinWidth |     标题宽度     | String  |  否  | '60px' |
| showSubmit    |     搜索按钮     | Boolean |  否  | true   |
| more          | 是否有很多搜索项 | Boolean |  否  | false  |

## Events

| 事件名称 | 说明     | 回调参数       |
| -------- | :------- | -------------- |
| submit   | 提交按钮 | data（搜索项） |

## searchList

| 参数          | 说明                                                                                                             | 类型             | 默认值              |
| ------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------- |
| title         | 显示的标签                                                                                                       | String           | ''                  |
| type          | 不同的类型默认值不同，具体看下面 type 的种类                                                                     | String           | ''                  |
| key           | 可以监听 submit 事件，返回的 form 里面的 key 就是你定义的 key                                                    | String           | ''                  |
| defaultValue  | item 的默认值                                                                                                    | -                | -                   |
| isShow        | isShow 为 false 会不显示这个元素                                                                                 | Boolean,Function | (form, item)        |
| props         | 组件库自带的参数,可以参考 iview 或者 element 组件库的文档                                                        | Object           | {}                  |
| attrs         | 组件库自带的参数,可以参考 iview 或者 element 组件库的文档                                                        | Object           | {}                  |
| text          | type 为 checkbox 或者 radio 时才有用，显示后面跟着的文字                                                         | String           | ''                  |
| options       | type 为 select、checkbox-group、radio-group、cascader 时才有用，由 {value: 0, text: '苹果'} 组成，数据项支持异步 | Array            | []                  |
| onInput       | 监听参数改变事件                                                                                                 | Function         | (value, item, form) |
| render        | 自定义整行                                                                                                       | Function         | (h, item, form)     |
| renderTitle   | 自定义标签                                                                                                       | Function         | (h, item, form)     |
| renderContent | 自定义内容主题                                                                                                   | Function         | (h, item, form)     |
| renderOption  | type 为 select 时才有用，可以自定义 select 的 option                                                             | Function         | (h, option, item)   |
| disabled      | 禁用表单元素，优先级比标签上的低                                                                                 | Boolean          | false               |
| settings      | formItem 的标签属性，比如 style，class                                                                           | Object           | {}                  |
| border        | 当组件库为 element 时，type：radio-group checkbox checkbox-group, 可以让选项有 border                            | Boolean          | false               |
| on            | 当前 content 的 on 配置项, 如果要监听 input 事件 请使用 onInput                                                  | Object           | {}                  |
| nativeOn      | 当前 content 的 nativeOn 配置项                                                                                  | Object           | {}                  |

## type 种类

| 类型           | 默认值               | 其它                              |
| -------------- | -------------------- | --------------------------------- |
| input          | ''                   | 默认 maxlength: 20, textarea: 256 |
| input-number   | 0                    | 默认 min: 0, max: 9999999         |
| select         | null                 |                                   |
| checkbox       | false                |                                   |
| checkbox-group | []                   |                                   |
| radio          | false                | 没有意义，不建议使用              |
| radio-group    | []                   |                                   |
| date           | 当前时间，new Date() |                                   |
| datetime       | 当前时间，new Date() |                                   |
| daterange      | ['', '']             |                                   |
| datetimerange  | ['', '']             |                                   |
| time           | ''                   |                                   |
| switch         | false                |                                   |
| slider         | 0                    |                                   |
| cascader       | []                   |                                   |
