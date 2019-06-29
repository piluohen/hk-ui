# hk-table 表格组件

## 用法
支持 `el-table` 所有属性，新增属性请查看配置说明

<template>
  <hk-table-demo/>
</template>

引用组件

```html
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
      tableData: [{ companyName: '测试单位' }], // 出入表格数据
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

```
*设置Columns.js*
- 设置Columnsh中的每一个对象中，可以单独对该列设置具体参数，比如对齐方式`aligan`,宽度`width`等，具体参照`el-table`配置
- 支持`render`函数和`format`,对该列进行格式化，
- 注意，如果采用Columns.js设置列表字段，则format函数中不能使用jsx语法，可以使用render函数代替
```js
const defaultColumns = (props) => [
  {
    key: 'index',
    type: 'index',
    width: '60px',
    title: '序号'
  },
  {
    key: 'companyName',
    title: '格式化',
    format: (row) => { // format
      return '(｡♥ᴗ♥｡)' + row.companyName + '(●—●)'
    }
  },
  {
    key: 'date',
    title: '无数据'
  },

  {
    key: 'state',
    title: '状态',
    render: (h, { row }) => { // render函数，自定义内容
      return (
        <el-tag>成功</el-tag>
      )
    }
  },
  {
    key: 'operation',
    title: '操作',
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

| 参数    | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| --      |:----: | :--: | :--: | :--: | -- |
| api     | 接口地址(api和tableData是并列关系，2选1) | Function |  | true |  |
| tableData | 表格数据 | Arrary |  | false |  |
| params  | 请求参数（如查询条件，最终和defaultParams合并未一个对象，用于请求数据） | Obje |  | false |  |
| defaultParams | 预设的参数，父组件需要通过计算后者接口请求的参数 | Arrary |  | false |  |
| columns | 列表字段对象(传入数据项具体配置，支持render函数) | Arrary |  | false |  |
| pollInterval | 自动刷新间隔（设置后会定时请求数据） | Number |  | false | 0 |
| paginationable | 是否开启分页 | Boolean |  | false | true |
| size    | 每页的size数量 | Number |  | false |  |

## Events

| 事件名称 | 说明     | 回调参数       |
| -------- | :------- | -------------- |
| search   | 重新请求接口，page=0 |  |
| refresh   | 刷新 |  |
| dbClick   | 双击当前行 | 当前行数据(row) |
| selection-change   | 选中状态切换 | 当前行数据(row) |
| current-change   | 当表格的当前行发生变化的时候会触发该事件 | currentRow, oldCurrentRow |
