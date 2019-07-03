<template lang="pug">
.hk-preview-demo
  .img-list
    .item(v-for="(item, i) in fileList" :key="i")
      el-image(:src="item.url" fit="cover" @click="handleShowPreview(i)")
  hk-preview(v-model="showPreview" :list="fileList" :index.sync="imgIndex" :isInfinite="isInfinite")
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

<style lang="scss">
.hk-preview-demo {
  margin: 20px 0;
  .img-list {
    display: flex;
    .item {
      width: 200px;
      height: 300px;
      margin: 10px;
      .el-image {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }
  }
}
</style>
