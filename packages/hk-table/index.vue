<script>
import lodash from 'lodash'
export default {
  name: 'hk-table',
  props: {
    api: { // api请求
      type: Function
    },
    tableData: { // 组件外传入表格数据
      type: Array,
      default: () => []
    },
    params: { // 请求参数
      type: Object,
      default: () => ({})
    },
    defaultParams: { // 预设请求参数，需要通过计算属性获得
      type: Object,
      default: () => ({})
    },
    columns: { // 列表字段
      type: Array,
      default: () => []
    },
    pollInterval: { // 自动刷新间隔
      type: Number,
      default: 0
    },
    paginationable: { // 是否分页
      type: Boolean,
      default: true
    },
    size: { // 每一页的数据量
      type: String
    }
  },
  data () {
    return {
      // 用来判断是否使用最后一次操作，防止自动刷新列表覆盖了用户操作后请求回来的数据
      uid: 0,
      loading: false,
      page: 0,
      pageSize: 10,
      total: 10,
      data: []
    }
  },
  computed: {
    pageSizes () {
      const pageSizes = [10, 20, 30, 40, 50, 100, this.size].sort((a, b) => a - b)
      return lodash.uniq(lodash.compact(pageSizes))
    }
  },
  mounted () {
    this.search()
  },
  destroyed () {
    clearTimeout(this.timer)
  },
  methods: {
    formatter (row, column, cellValue, index) {
      return cellValue === undefined || cellValue === null || cellValue === '' ? '-' : cellValue
    },
    fetch () {
      let params = {
        page: this.page,
        size: this.pageSize,
        ...this.defaultParams,
        ...this.params
      }
      const pollInterval = () => { // 递归定时刷新
        clearTimeout(this.timer)
        if (this.pollInterval) {
          this.timer = setTimeout(() => this.fetch(), this.pollInterval)
        }
      }
      const uid = this.uid
      const fetch = this.api(params)
      fetch
        .then(data => {
          // 只显示最后一次操作的数据
          if (uid === this.uid) {
            this.total = data.totalElements
            this.data = data.content || []
          }
          this.loading = false
          pollInterval()
        })
        .catch(() => {
          this.loading = false
          pollInterval()
        })
      return fetch
    },
    search () {
      this.uid++
      this.page = 0
      return this.getData()
    },
    refresh () { // 刷新
      this.uid++
      return this.getData()
    },
    clearSelection () {
      this.$refs.table.clearSelection()
    },
    toggleRowSelection (...args) {
      this.$refs.table.toggleRowSelection(...args)
    },
    setCurrentRow (...args) {
      this.$refs.table.setCurrentRow(...args)
    },
    getData () {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          if (typeof this.api === 'function') {
            this.loading = true
            this.fetch()
              .then(resolve)
              .catch(reject)
          } else {
            this.data = this.tableData
            resolve()
          }
        })
      })
    },
    handlePageChange (page) {
      this.uid++
      this.page = page
      this.clearSelection()
      this.getData()
    },
    handlePageSizeChange (pageSize) {
      this.uid++
      if (this.page !== 0) this.clearSelection()
      this.page = 1
      this.pageSize = pageSize
      this.getData()
    },
    handledbClick (row) {
      this.$emit('dbClick', row)
    },
    handleSelectionChange (...args) {
      this.$emit('selection-change', ...args)
    },
    currentChange (...args) {
      this.$emit('current-change', ...args)
    }
  },
  render (h) {
    let pagination = null
    if (this.paginationable) {
      pagination = (
        <el-pagination
          class="hk-pagination"
          background={true}
          total={this.total}
          page-size={this.pageSize}
          current-page={this.page}
          page-sizes={this.pageSizes}
          layout="sizes, prev, pager, next"
          on-current-change={this.handlePageChange}
          on-size-change={this.handlePageSizeChange}
        />
      )
    }
    return (
      <div class="hk-table">
        <el-table
          v-loading={this.loading}
          ref="table"
          attrs={this.$attrs}
          size={this.size}
          data={this.data}
          on-current-change={this.currentChange}
          on-row-dblclick={this.handledbClick}
          on-selection-change={this.handleSelectionChange}
        >
          {this.columns.map((item, index) => {
            const render = item.render
              ? props => item.render(this.$parent ? this.$parent.$createElement : h, props)
              : null
            return (
              <el-table-column
                key={item.key}
                prop={item.key}
                width={item.width}
                min-width={item.minWidth}
                type={item.type}
                label={item.title}
                render-header={item.renderHeader}
                formatter={item.format || this.formatter}
                fixed={item.fixed}
                align={item.align}
                selectable={item.selectable}
                reserve-selection={item.reserveSelection}
                show-overflow-tooltip={item.showOverflowTooltip || true}
              >
                {render}
              </el-table-column>
            )
          })}
        </el-table>
        {pagination}
      </div>
    )
  }
}
</script>
<style lang="scss">
.hk-table {
  width: 100%;
  .el-table__header,
  .el-table__footer,
  .el-table__body {
    margin: 0;
  }
}
</style>
