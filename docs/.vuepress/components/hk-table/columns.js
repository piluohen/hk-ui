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
