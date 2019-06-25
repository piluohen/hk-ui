<template lang="pug">
.hk-ui
  h2 超多示例
  hk-search(:searchList="searchList" @submit="submit" :more="more")
</template>
<script>
export default {
  name: 'hk-ui-search.3',
  data () {
    return {
      form: {},
      more: true,
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
            },
            {
              type: 'input',
              key: 'keyword1',
              props: {
                placeholder: '搜索设备名称/设备ID'
              }
            },
            {
              type: 'input',
              key: 'keyword1',
              props: {
                placeholder: '搜索设备名称/设备ID'
              }
            },
            {
              type: 'input',
              key: 'keyword1',
              props: {
                placeholder: '搜索设备名称/设备ID'
              }
            }
          ]
        },
        {
          type: 'daterange'
        },
        {
          title: ' ',
          type: 'daterange'
        },
        {
          type: 'daterange'
        },
        {
          type: 'daterange'
        },
        {
          title: ' ',
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
