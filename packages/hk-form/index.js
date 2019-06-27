export default {
  name: 'hk-form',
  props: {
    value: {
      type: Object
    },
    items: {
      type: Array,
      default: []
    },
    size: {
      type: String,
      default: 'small'
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    validate (...args) {
      return this.$refs.form.validate(...args)
    },
    validateField (...args) {
      return this.$refs.form.validateField(...args)
    },
    resetFields (...args) {
      return this.$refs.form.resetFields(...args)
    },
    clearValidate (...args) {
      return this.$refs.form.clearValidate(...args)
    },
    validateHandle (...args) {
      this.$emit('validate', ...args)
    },
    // render 子项
    renderItem (createElement) {
      return this.items.map((item, index) => {
        const input = val => {
          this.model = { ...this.model, [item.key]: val }
        }
        const value = this.model[item.key]
        // 渲染控件
        const render = item.render
          ? item.render(createElement, { model: this.model, item, value, input })
          : createElement(item.tag, {
            ref: item.ref,
            attrs: item.attrs,
            props: { ...item.props, value },
            on: { input }
          })
        if (!this.inline) {
          return (
            <el-col span={item.col}>
              { this.renderFormItem(item, index, render) }
            </el-col>
          )
        } else {
          return this.renderFormItem(item, index, render)
        }
      })
    },
    // render formItem
    renderFormItem (item, index, render) {
      return (
        <el-form-item
          key={index}
          prop={item.key}
          label={item.label}
          rules={item.rules}
        >
          {render}
        </el-form-item>
      )
    }
  },
  render (h) {
    const createElement = this.$parent && this.$parent.$createElement ? this.$parent.$createElement : h
    return (
      <el-form
        ref="form"
        /**
         * 必须写为props={{ model: this.model }}
         * props-model={this.formItems}不能正常工作
         * 否则不能正确解析
         * 参考https://github.com/vuejs/jsx/issues/49
         */
        props={{ model: this.model }}
        attrs={ this.$attrs }
        size={ this.size }
        inline={ this.inline }
        onValidate={ this.validateHandle }
      >
        { this.renderItem(createElement) }
      </el-form>
    )
  }
}
