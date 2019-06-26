# hk-preview 预览图片

## 用法

<hk-preview-demo></hk-preview-demo>

```scss

<template lang="pug">
.hk-preview-demo
  .img-list
    .item(v-for="(item, i) in fileList" :key="i")
      el-image(:src="item.url" fit="cover" @click="handleShowPreview(i)")
  hk-preview(v-model="showPreview" :list="fileList" :index="imgIndex" :isInfinite="isInfinite")
  hk-button(type="primary" @click="handleToggle") {{ `${isInfinite?'关闭':'开启'}循环滚动` }}
</template>

<script>
export default {
  name: 'hk-preview-demo',
  data () {
    return {
      showPreview: false,
      isInfinite: true,
      imgIndex: 0,
      fileList: [
        {url: 'http://oss.htcxcloud.com/3219dc07-a031-4dab-a7ad-b8c5d0c6d1da/曹操.jpg'},
        {url: 'http://oss.htcxcloud.com/3d1c471e-c5ae-4fc8-a805-433830e8dd43/貂蝉.jpg'},
        {url: 'http://oss.htcxcloud.com/e0e57bb4-af01-45af-a481-be2263793491/关羽.jpg'},
        {url: 'http://oss.htcxcloud.com/110ac643-35d9-4c73-8562-8a73f637a48f/黄忠.jpg'},
        {url: 'http://oss.htcxcloud.com/3c325ce8-b5fc-42bf-af0e-092420c8c9f4/廖化.jpg'}
      ]
    }
  },
  methods: {
    handleShowPreview (index) {
      this.showPreview = true
      this.imgIndex = index
    },
    handleToggle () {
      this.isInfinite = !this.isInfinite
    }
  }
}
</script>

````

## Api

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| v-model | 是否显示预览 | Boolean | true \| false  | 是 | false |
| list | 图片列表 | Array |  | 是 | [{url: ''}] |
| imgIndex | 当前展示图片索引 | Number |  | 是 | 0 |
| isInfinite | 是否开启无限循环模式 | Boolean | true \| false  | 否 | true |