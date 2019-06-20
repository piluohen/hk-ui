# hk-button 按钮组件

## button 样式

<template>
  <hk-ui-button/>
</template>

```html
<template lang="pug">
.edit
  el-button(@click="handleClick()") 设置默认值
  hk-editor(v-model="value")
</template>
<script>
  export default {
    name: 'hk-ui-editor',
    data() {
      return {
        value: '这是个默认值'
      }
    },
    methods: {
      handleClick(html = '<h1>hk-ui是最好用的UI之一</h1>') {
        this.value = html
      }
    }
  }
</script>
```

::: tip 说明

当我们在使用编辑器时，需要自己配置上传[[upload]]的[[function]]，不传的话会生成 base64 图片文件
:::

- [[upload]]示例

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

| 参数    |       描述        |      类型      | 必须 | 默认值                         |
| ------- | :---------------: | :------------: | :--: | ------------------------------ |
| value   |      绑定值       |     String     |  是  | -                              |
| upload  | 上传 CND 地址方法 |    Function    |  否  | -                              |
| accept  |     接受类型      |     String     |  否  | image/jpeg,image/jpg,image/png |
| maxSize |     图片大小      |     Number     |  否  | 5242880（5M）                  |
| height  |       高度        | Number, String |  否  | 500                            |
| width   |       宽度        | Number, String |  否  | auto                           |
