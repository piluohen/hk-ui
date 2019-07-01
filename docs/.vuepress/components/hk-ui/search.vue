<template lang="pug">
.hk-ui
  hk-search(:searchList="searchList" @submit="submit")
  p.code 输入内容：{{form}}
  p.code 选中内容：{{selsect}}
</template>
<script>
export default {
  name: 'hk-ui-search',
  data () {
    return {
      selsect: '',
      form: {
        select2: ''
      },
      list: [{ text: '选项1', value: 1 }, { text: '选项2', value: 2 }],
      searchList: [
        {
          tag: 'el-input',
          key: 'keyword',
          attrs: {
            placeholder: '搜索设备名称/设备ID'
          },
          on: {
            click () {
              console.log('点击')
            },
            keyup (event) {
              if (event.keyCode === 13) {
                console.log('按下了enter')
                // this.$emit('input', value)
              }
            }
          }
        }
        // {
        //   tag: 'el-select',
        //   key: 'select1',
        //   options: this.list.map(item => ({
        //     text: item.text,
        //     value: item.value
        //   })),
        //   attrs: {
        //     placeholder: '请选择设备类型'
        //   }
        // },
        // {
        //   tag: 'el-select',
        //   key: 'select2',
        //   render: (h, item, form) => {
        //     return (<el-select v-model={this.form.select2} onChange={(data) => this.change(data)} size="small" placeholder="请选择设备型号" clearable style="margin-left:20px">
        //       {this.list.map(goos => {
        //         return <el-option label={goos.text} value={goos.value}>
        //         </el-option>
        //       })}
        //     </el-select >)
        //   }
        // }
      ]
    }
  },
  methods: {
    submit (data) {
      this.form = data
    },
    change (data) {
      this.selsect = data
    }
  }
}
</script>
