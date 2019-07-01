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
    title: {
      type: String,
      default: ''
    },
    showSubmit: {
      type: Boolean,
      default: true
    },
    more: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      fold: true,
      date: null,
      form: {}
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
      <div class="hk-search-all">
        <div class={this.more ? 'search-all-more' : 'search-all'}>
          <div
            class="hk-search"
            style={{ height: this.fold ? '40px' : 'auto', overflowY: this.fold ? 'hidden' : 'auto' }}
          >
            {this.title ? (
              <div
                class="hk-search-title"
                style={{
                  minWidth: this.labelMinWidth
                }}
              >
                {this.title}
              </div>
            ) : null}
            <div class="hk-search-row">
              <hk-form
                ref="form"
                v-model={this.form}
                inline={true}
                items={this.searchList}
                onEnter={this.getParams}
              />
            </div>
          </div>
          {this.showSubmit ? (
            <div class="hk-search-button">
              <hk-button onClick={this.getParams}>查询</hk-button>
            </div>
          ) : null}
        </div>
        {this.more ? (
          <div class="more" onClick={() => this.expend()}>
            <i class={this.fold ? 'el-icon-arrow-down' : 'el-icon-arrow-up'} />
          </div>
        ) : null}
      </div>
    )
  },
  methods: {
    expend () {
      this.fold = !this.fold
    },
    getDateDafaultValue () {
      let arr = ['daterange', 'datetimerange']
      let target = this.searchList.find(row => arr.includes(row.type))
      if (target) {
        this.date = Array.isArray(target.defaultValue) ? target.defaultValue : getDefaultValue(target.defaultValue)
      }
      this.getParams()
    },
    renderList (row) {
      return (
        <div class="hk-search-item">
          {row.map(item => {
            return item.render()
          })}
        </div>
      )
    },
    renderDaterage (row) {
      return (
        <el-date-picker
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="small"
          value-format="timestamp"
          type={row.type}
          onChange={this.getParams}
          v-model={this.date}
        />
      )
    },
    getParams () {
      let params = this.form
      Object.keys(params).forEach(key => {
        if (params[key] === '' || params[key] === null || params[key] === undefined) delete params[key]
      })
      console.log(params)
      this.$emit('submit', params)
    }
  }
}
