<template lang="pug">
.hk-ui
  h2 daterange示例
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
