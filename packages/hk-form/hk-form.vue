<script>
export default {
  name: 'hk-form',
  props: {
    // 是否启用 grid 布局
    grid: {
      type: [Array, Number]
    },
    // grid 间距
    gutter: {
      type: Number
    },
    // formItem 项
    formList: {
      type: Array,
      default: () => []
    },
    // 默认标签宽度
    labelWidth: {
      type: Number,
      default: 100
    },
    // 默认内容宽度
    contentWidth: {
      type: [Number, String],
      default: 240
    },
    // 行内表单模式
    inline: {
      type: Boolean,
      default: false
    },
    // 原生 form 标签上的 props
    options: {
      type: Object
    },
    // 开启全局 clearable
    clearable: {
      type: Boolean,
      default: true
    },
    // 文本框默认字符个数
    maxlength: {
      type: [Number, String],
      default: 20
    },
    // 多行文本框默认字符个数
    textareaMaxlength: {
      type: Number,
      default: 256
    },
    // 是否全局 disabled
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: this.initForm() || {}
    }
  },
  render (h) {
    return (
      <el-form
        ref="form"
        model={ this.form }
        rules={ this.rules }
        label-width={ this.labelWidth }
        {...this.options}
      >
        {
          this.formList.map(item => {
            return (
              <el-form-item>
                { this.getContent(h, item) }
              </el-form-item>
            )
          })
        }
      </el-form>
    )
  },
  computed: {
    rules () {
      let rules = {}
      this.formList.forEach(item => {
        if (item.rule !== undefined) {
          rules[item.key] = item.rule
        }
      })
      return rules
    },
    gridNum () {
      return this.grid
    }
  },
  methods: {
    initForm () {},
    getContent (h, item) {
      let content
      switch (item.type) {
        case 'input':
          content = this.renderInput(h, item)
          break
        case 'select':
          content = this.renderSelect(h, item)
          break
        case 'checkbox':
          content = this.renderCheckbox(h, item)
          break
        case 'checkbox-group':
          content = this.renderCheckboxGroup(h, item)
          break
        case 'date':
          content = this.renderDatePicker(h, item)
          break
        case 'datetime':
          content = this.renderDatePicker(h, item)
          break
        case 'daterange':
          content = this.renderDateRange(h, item)
          break
        case 'datetimerange':
          content = this.renderDateRange(h, item)
          break
        case 'time':
          content = this.renderTimePicker(h, item)
          break
        case 'radio':
          content = this.renderRadio(h, item)
          break
        case 'radio-group':
          content = this.renderRadioGroup(h, item)
          break
        case 'switch':
          content = this.renderSwitch(h, item)
          break
        case 'slider':
          content = this.renderSlider(h, item)
          break
        case 'input-number':
          content = this.renderInputNumber(h, item)
          break
        case 'cascader':
          content = this.renderCascader(h, item)
          break
        default:
          if (typeof item.renderContent === 'function') {
            content = item.renderContent(this.getHypeScript(), item, this.form)
          }
          break
      }
      return content
    },
    // 渲染 input
    renderInput (h, item) {
      let props = item.props || {}
      // 让 element-ui 在 props 里也可以设置 placeholder
      if (props.placeholder) {
        // props.placeholder = props.placeholder
      }

      // 让 element-ui 在 props 里也可以设置 maxlength
      if (props.type !== 'textarea') {
        props.maxlength = +props.maxlength || +this.maxlength
      } else {
        // textarea 长度
        props.maxlength = +props.maxlength || +this.textareaMaxlength
      }

      // return (
      // <el-input
      //   props={ ...props }
      //   {item}
      //   onkeydown={ (e) => {
      //     if (e.keyCode === 13 && this.enterSubmit && props.type !== 'textarea') {
      //       this.submit()
      //     }
      //   } }
      // >
      // </el-input>
      // )
    },
    renderItem (h, type) {
      return (
        <el-input v-model="sizeForm.name"></el-input>
      )
    }
  }
}
</script>
<style lang="scss">

</style>
