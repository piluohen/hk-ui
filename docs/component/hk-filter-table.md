# hk-filter-table 筛选表格组件

## 用法
本组件将当前页面的路由名称作为key,选中的字段数组作为value，存入localStroge中的 `selectedTable` 对象中
退出登录后如果清空了localStroge，下次登录表头记录会恢复默认值
<template>
  <hk-filter-table-demo/>
</template>

引用组件

```html
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

```

配置Columns.js
- `defaultSelected: true` 字段表示默认选中，不设置或设置为false,则默认不选中
- `disabled:true` 字段表示禁止选择（如操作栏，一般不可去除）
```js
const defaultColumns = (props) => [
  {
    key: 'index',
    type: 'index',
    width: '60px',
    title: '序号',
    defaultSelected: true
  },
  {
    key: 'selected',
    title: '默认选中',
    defaultSelected: true
  },
  {
    key: 'companyName',
    title: '格式化',
    defaultSelected: true,
    format: (row) => { // format
      return '(｡♥ᴗ♥｡)' + row.companyName + '(●—●)'
    }
  },
  {
    key: 'date',
    title: '无数据',
    defaultSelected: true
  },
  {
    key: 'state2',
    title: '默认不选中'
  },
  {
    key: 'state',
    title: '非默认选中',
    render: (h, { row }) => { // render函数，自定义内容
      return (
        <el-tag>成功</el-tag>
      )
    }
  },
  {
    key: 'operation',
    title: '操作',
    disabled: true,
    defaultSelected: true,
    align: 'center',
    render: (h, { row }) => { // render函数，自定义内容
      return (
        <div class="operation">
          <hk-button icon="el-icon-delete-solid" circle onClick={() => props.handleClickSelete()} />
          <hk-button icon="el-icon-edit" circle />
        </div>
      )
    }
  }
]
export default defaultColumns
```
## 配置

通过v-model来控制弹窗是否显示，
其余参数跟`hk-table`参数完全一致

| 参数    | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| --      |:----: | :--: | :--: | :--: | -- |
| v-model | 是否显示表头筛选框 | Boolean |  | false |  |
