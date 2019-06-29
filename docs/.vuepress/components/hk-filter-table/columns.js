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
