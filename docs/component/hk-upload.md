# hk-upload 上传组件

## 用法

新增三种固定模式的上传方式，picture/file/button

### 图片上传

适用于上传多个图片，图片可预览，可删除

<template>
  <hk-upload-picture></hk-upload-picture>
</template>

```html

<template lang="pug">
.hk-upload-picture
  hk-upload(
    v-model="fileList"
    type="picture"
    :action="action"
    :configs="configs"
    @complate="handleComplate"
  )
  el-button(type="primary" size="small" :loading="loading" :disabled="loading" @click="handleSubmit") 保存表单
</template>

<script>
export default {
  name: 'hk-upload-picture',
  data () {
    return {
      action: `https://jsonplaceholder.typicode.com/posts/`,
      configs: {
        limitNum: 10,
        limitSize: 2,
        limitType: 'image/png,image/jpeg,image/gif'
      },
      fileList: [
        {url: 'http://oss.htcxcloud.com/3219dc07-a031-4dab-a7ad-b8c5d0c6d1da/曹操.jpg'},
        {url: 'http://oss.htcxcloud.com/3d1c471e-c5ae-4fc8-a805-433830e8dd43/貂蝉.jpg'},
        {url: 'http://oss.htcxcloud.com/e0e57bb4-af01-45af-a481-be2263793491/关羽.jpg'},
        {url: 'http://oss.htcxcloud.com/110ac643-35d9-4c73-8562-8a73f637a48f/黄忠.jpg'},
        {url: 'http://oss.htcxcloud.com/3c325ce8-b5fc-42bf-af0e-092420c8c9f4/廖化.jpg'}
      ],
      loading: false
    }
  },
  methods: {
    handleComplate (val) {
      this.loading = !val
    },
    handleSubmit () {
      if (!this.loading) {
        this.$message.success('可以提交了')
      } else {
        this.$message.warning('正在上传中，禁止提交')
      }
    }
  }
}
</script>

```

### 文件上传

适用于上传多个文件，文件可删除

<template>
  <hk-upload-file></hk-upload-file>
</template>

```html

<template lang="pug">
.hk-upload-file
  hk-upload(
    v-model="fileList"
    type="file"
    :action="action"
    :configs="configs"
    @complate="handleComplate"
  )
  el-button.submit-btn(type="primary" size="small" :loading="loading" :disabled="loading" @click="handleSubmit") 保存表单
</template>

<script>
export default {
  name: 'hk-upload-file',
  data () {
    return {
      action: `https://jsonplaceholder.typicode.com/posts/`,
      configs: {
        limitNum: 10,
        limitSize: 5,
        limitType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword'
      },
      fileList: [
        {url: 'http://oss.htcxcloud.com/b6218936-f3ee-4385-9578-ce17ecee9429/新建 Microsoft Word 文档.docx', name: '新建 Microsoft Word 文档.docx'},
        {url: 'http://oss.htcxcloud.com/bd1d396b-a7bb-4258-9c4e-435f149dfed8/文档一.docx', name: '文档一.docx'}
      ],
      loading: false
    }
  },
  methods: {
    handleComplate (val) {
      this.loading = !val
    },
    handleSubmit () {
      if (!this.loading) {
        this.$message.success('可以提交了')
      } else {
        this.$message.warning('正在上传中，禁止提交')
      }
    }
  }
}
</script>

```

### button 上传

按钮上传通常为仅上传一次的的需求，如上传用户头像等

<template>
  <hk-upload-button></hk-upload-button>
</template>

```html

<template lang="pug">
.hk-upload-button
  img.user-photos(:src="file")
  hk-upload(
    v-model="file"
    type="button"
    :action="action"
    :configs="configs"
    @complate="handleComplate"
  )
</template>

<script>
export default {
  name: 'hk-upload-button',
  data () {
    return {
      action: `https://jsonplaceholder.typicode.com/posts/`,
      configs: {
        limitNum: 10,
        limitSize: 2,
        limitType: 'image/png,image/jpeg,image/gif'
      },
      file: 'http://oss.htcxcloud.com/3219dc07-a031-4dab-a7ad-b8c5d0c6d1da/曹操.jpg',
      loading: false
    }
  },
  methods: {
    handleComplate (val) {
      this.loading = !val
    }
  }
}
</script>

```


## Api

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| type | 上传类型 | String | picture/file/button | true | picture |
| action | 上传地址 | String |  | true |  |
| headers | 请求headers | Object |  | false |  |
| configs | 配置项 | Object | limitNum(限制数) \| limitSize(文件大小) \| limitType(限制类型) \| btnName(操作按钮文案) | false | 10 \| 10 \| image/png,image/jpeg,image/gif \| 点击上传 |
| btnConfig | 按钮配置项 | Object | type(类型) \| size(大小) \| icon(icon图标) \| round(圆角) | false | primary \| small \| 空值 \| false |
| disabled | 禁用与否 | Boolean | true \| false | 否 | true |

## Slot

支持slot，可以自定义上传触发按钮

<template>
  <hk-upload-slot></hk-upload-slot>
</template>

```html

<template lang="pug">
.hk-upload-slot
  img.user-photos(:src="file")
  hk-upload(
    v-model="file"
    :action="action"
    :configs="configs"
    :show-file-list="false"
    @complate="handleComplate"
  )
    el-button(:loading="loading" :disabled="loading" type="warning") 这是一个很长的自定义上传触发按钮
</template>

<script>
export default {
  name: 'hk-upload-slot',
  data () {
    return {
      action: `https://jsonplaceholder.typicode.com/posts/`,
      configs: {
        limitNum: 10,
        limitSize: 2,
        limitType: 'image/png,image/jpeg,image/gif'
      },
      file: 'http://oss.htcxcloud.com/3219dc07-a031-4dab-a7ad-b8c5d0c6d1da/曹操.jpg',
      loading: false
    }
  },
  methods: {
    handleComplate (val) {
      this.loading = !val
    }
  }
}
</script>

```

## Events

| 事件 | 描述 | 参数 |
| -- |:----: | :--: |
| complate | 监听上传是否已经结束 | true/false |
