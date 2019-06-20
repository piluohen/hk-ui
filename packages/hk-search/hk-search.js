export const getDefaultValue = (type = 'month') => {
  let d = new Date()
  let year = d.getFullYear()
  let month = d.getMonth()
  let day = d.getDate()
  let date = []
  switch (type) {
    case 'week':
      date = [+new Date(year, month, day - 7), +new Date(year, month, day)]
      break
    case 'month':
      date = [+new Date(year, month - 1, day), +new Date(year, month, day)]
      break
  }
  return date
}

export default {
  name: 'hk-search',
  props: {
    searchList: {
      type: Array,
      default: () => []
    },
    labelMinWidth: {
      type: String,
      default: '60px'
    },
    showSubmit: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      form: {
        date: null
      }
    }
  },
  created () {
    this.hasDate && this.getDateDafaultValue()
  },
  computed: {
    hasDate () {
      return this.searchList.some(item => item.type === 'daterange' || item.type === 'datetimerange')
    }
  },
  render (h) {
    return (
      <div class="hk-search">
        {this.searchList.map(row => {
          let content
          if (row.type === 'hk-form') {
            content = this.renderForm(row)
          } else if (row.type === 'daterange' || row.type === 'datetimerange') {
            content = this.renderDaterage(row)
          } else {
            content = this.renderList(row)
          }
          return (
            <div class="hk-search-row">
              <div
                class="hk-search-title"
                style={{
                  minWidth: this.labelMinWidth
                }}
              >
                {row.title}
              </div>
              <div class="hk-search-content">{content}</div>
              {this.showSubmit ? <hk-submit onClick={this.getParams}>查询</hk-submit> : null}
            </div>
          )
        })}
      </div>
    )
  },
  methods: {
    getDateDafaultValue () {
      let arr = ['daterange', 'datetimerange']
      let target = this.searchList.find(row => arr.includes(row.type))
      if (target) {
        this.form.date = Array.isArray(target.defaultValue) ? target.defaultValue : getDefaultValue(target.defaultValue)
      }
    },
    renderForm (row) {
      let options = {
        inline: true
      }
      let clearable = true
      if (row.clearable === 'false' || row.clearable === false) {
        clearable = false
      }
      return (
        <hk-form
          ref="form"
          enterSubmit={true}
          formList={row.children}
          options={options}
          contentWidth={'auto'}
          clearable={clearable}
          onSubmit={this.getParams}
        />
      )
    },
    renderList (row) {
      return (
        <div class="hk-search-item">
          {row.children.map(item => {
            return item.render()
          })}
        </div>
      )
    },
    renderDaterage (row) {
      return <el-daterange type={row.type} v-model={this.form.date} />
    },
    getForm () {
      let params = {
        ...this.form,
        ...this.$refs.form.getForm()
      }
      return params
    },
    getParams () {
      let form = this.form
      let params
      if (form.date) {
        let [startDate, endDate] = form.date
        startDate = new Date(startDate)
        endDate = new Date(endDate)
        params = {
          startDate,
          endDate,
          ...this.$refs.form.getForm()
        }
      } else {
        params = {
          ...this.$refs.form.getForm()
        }
      }
      Object.keys(params).forEach(key => {
        if (params[key] === '' || params[key] === null || params[key] === undefined) delete params[key]
      })
      this.$emit('submit', params)
      return params
    }
  }
}
