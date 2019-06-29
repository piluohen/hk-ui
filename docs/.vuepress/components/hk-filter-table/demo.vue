<template lang="pug">
.filter-table-demo
  hk-table-toolbar(title="表头筛选列表")
    hk-button(@click="change") 选择表头
  hk-filter-table(
    ref="table"
    v-model="isShow"
    :columns="columns"
    :tableData="tableData"
  )
</template>
<script>
import columns from './columns'

export default {
  data () {
    return {
      isShow: false,
      tableData: [{
        companyName: '格式化内容',
        selected: '默认选中'
      }], // 表格数据
      columns: columns(this), // 列表 字段
    }
  },
  methods: {
    change () {
      this.isShow = true
    },
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
