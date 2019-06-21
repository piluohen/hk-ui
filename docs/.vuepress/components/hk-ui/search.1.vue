<template lang="pug">
.hk-ui
  hk-search(:searchList="searchList" @submit="submit")
  p.code 输入内容：{{form}}
</template>
<script>
export default {
  name: 'hk-ui-search.1',
  data () {
    return {
      form: {},
      searchList: [
        {
          title: '选择设备:',
          type: 'hk-form',
          children: [
            {
              type: 'input',
              key: 'keyword',
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
