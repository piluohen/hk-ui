<template lang="pug">
.hk-ui-search
  h1 daterange示例
  hk-search(:searchList="searchList" @submit="submit")
  p 输入内容：{{form}}
</template>
<script>
export default {
  name: 'hk-ui-search.2',
  data () {
    return {
      form: {},
      searchList: [
        {
          title: '选择设备:',
          type: 'hk-form',
          children: [
            {
              type: 'daterange',
              key: 'time',
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
    submit (data) {
      this.form = data
      console.log(data, 77)
    }
  }
}
</script>
