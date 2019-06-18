<template lang="pug">
.edit
  hk-search(:searchList="searchList")
</template>
<script>
export default {
  name: 'hk-ui-search',
  data () {
    return {
      form: {},
      list: [{ text: '选项1', value: 1 }, { text: '选项2', value: 2 }]
    }
  },
  computed: {
    searchList () {
      return [
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
              type: 'select',
              key: 'extDeviceType',
              options: this.list.map(item => ({
                text: item.text,
                value: item.value
              })),
              props: {
                placeholder: '请选择设备类型'
              }
            },
            {
              key: 'mid',
              render: (h, item, form) => {
                return (<el-select v-model={form.mid} size="small" placeholder="请选择设备型号" clearable style="margin-left:20px">
                  {this.list.map(goos => {
                    return <el-option label={goos.text} value={goos.value}>
                    </el-option>
                  })}
                </el-select >)
              }
            }
          ]
        }
      ]
    }
  }
}
</script>
