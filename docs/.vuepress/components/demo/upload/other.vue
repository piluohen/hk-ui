<template lang="pug">
.demo-upload-other
  el-image.user-photos(:src="file" fit="cover")
  hk-upload(
    v-model="file"
    :action="action"
    :configs="configs"
    :show-file-list="false"
    list-type="text"
    @complate="handleComplate"
  )
    .el-upload--picture-card
      i(class="el-icon-plus")
</template>

<script>
export default {
  name: 'demo-upload-other',
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

<style lang="scss">
.demo-upload-other {
  margin: 20px 0;
  .user-photos {
    width: 100px;
    height: 100px;
  }
}
</style>
