<template lang="pug">
.table-demo
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
      tableData: [{ companyName: '格式化内容' }], // 出入表格数据
      columns: columns(this), // 列表 字段
    }
  },
  methods: {
    handleClickSelete () { }
  }
}
</script>
<style lang="scss">
.el-table {
  th {
    background-color: #eff0f6;
  }
}
</style>
