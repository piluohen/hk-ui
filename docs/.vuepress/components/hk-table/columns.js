// defaultSelected: true // 默认选中
// disabled: true // 不可选中，设置disabled的同时需将defaultSelected设置为true

const defaultColumns = (props) => [
  {
    key: 'devTid',
    title: '序号'
  },
  {
    key: 'shortCode',
    title: '单位名称'
  },
  {
    key: 'deviceName',
    title: '单位电话'
  },

  {
    key: 'createTime',
    title: '组织结构代码'
  },

  {
    key: 'phoneNumber',
    title: '行政区划'
  }
]
export default defaultColumns
