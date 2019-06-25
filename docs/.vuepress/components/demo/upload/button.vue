<template lang="pug">
.demo-upload-button
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
  name: 'demo-upload-button',
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
.demo-upload-button {
  margin: 20px 0;
  .user-photos {
    width: 100px;
    height: 100px;
  }
}
</style>
