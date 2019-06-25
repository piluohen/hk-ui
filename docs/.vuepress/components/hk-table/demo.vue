<template lang="pug">
.table-demo
  hk-search(:searchList="searchList" @submit="handleSearch")
  hk-table-toolbar(title="单位信息列表")
    el-button(size="small") 新增单位
  hk-table(
    :columns="columns"
    :tableData="tableData"
  )
</template>
<script>
import columns from './columns'

export default {
  data () {
    return {
      tableData: [], // 出入表格数据
      // theApi: this.$springApi.getDeviceListApi, // api请求
      columns: columns(this), // 列表 字段
      searchList: [
        {
          title: '选择查岗:',
          type: 'hk-form',
          children: [
            {
              type: 'input',
              key: 'projectId',
              options: [],
              props: {
                placeholder: '请输入项目'
              }
            },
            {
              type: 'select',
              key: 'guardCheckStatus',
              options: [],
              props: {
                placeholder: '查岗状态'
              }
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleSearch (val) {
    }
  }
}
</script>
