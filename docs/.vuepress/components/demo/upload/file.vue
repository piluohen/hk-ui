<template lang="pug">
.demo-upload-file
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
  name: 'demo-upload-file',
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

<style lang="scss">
.demo-upload-file {
  margin: 20px 0;
  .submit-btn {
    margin-top: 20px;
  }
}
</style>
