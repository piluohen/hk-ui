<template lang="pug">
.demo-upload-picture
  hk-upload(
    v-model="fileList"
    type="picture"
    :action="action"
    :configs="configs"
    @complate="handleComplate"
  )
  //- el-button(type="primary" size="small" :loading="loading" :disabled="loading" @click="handleSubmit") 保存表单
</template>

<script>
export default {
  name: 'demo-upload-picture',
  data () {
    return {
      action: `https://jsonplaceholder.typicode.com/posts/`,
      configs: {
        limitNum: 10,
        limitSize: 2,
        limitType: 'image/png,image/jpeg,image/gif',
        fileTypeName: '图片'
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

<style lang="scss">
.demo-upload-picture {
  margin: 20px 0;
}
</style>
