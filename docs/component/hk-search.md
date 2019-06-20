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

支持[[daterange]]和[[datetimerange]]两个属性，不允许选择今天之后的配置，[[disabledDate]]为[[false]]可以选择所有日期
:::

<template>
  <hk-ui-search.2/>
</template>

```js
import axios from '@/axios'
import merge from 'lodash/merge'

export const upload = (file, config, object) => {
  const formdata = new FormData()
  formdata.append('file', file, file.name)
  formdata.append('prefix', 'xiaofang-web')
  // key && formdata.append('key', key)
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key]
      formdata.append(key, element)
    }
  }
  return axios.post(
    'fire:/api/v1/file',
    formdata,
    merge(
      {
        timeout: 50000,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      },
      config
    )
  )
}
```

## API

| 参数    |     描述      |      类型      | 必须 | 默认值                         |
| ------- | :-----------: | :------------: | :--: | ------------------------------ |
| value   |    绑定值     |     String     |  是  | -                              |
| upload  | 上传 CND 地址 |    Function    |  否  | -                              |
| accept  |   接受类型    |     String     |  否  | image/jpeg,image/jpg,image/png |
| maxSize |   图片大小    |     Number     |  否  | 5242880（5M）                  |
| height  |     高度      | Number, String |  否  | 500                            |
| width   |     宽度      | Number, String |  否  | auto                           |
