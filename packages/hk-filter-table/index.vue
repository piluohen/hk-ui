<template lang="pug">
.hk-filter-table
  hk-table(
    ref="table"
    :api="api"
    :tableData="tableData"
    :params="params"
    :columns="getColumns"
    :pollInterval="pollInterval"
    :paginationable="paginationable"
    :rowKey="rowKey"
    :rowClassName="rowClassName"
    :headerRowClassName="headerRowClassName"
    :highlightCurrentRow="highlightCurrentRow"
    :size="size"
    v-bind="$attrs"
  )
  hk-table-columns-filter(
    ref="columnsFilter"
    v-model="isShowFilterDialog"
    :columns="columns"
    @confirm="setFilterSelected"
  )
</template>
<script>

export default {
  name: 'hk-filter-table',
  props: {
    api: {
      type: Function
    },
    tableData: {
      type: Array,
      default: () => []
    },
    params: {
      type: Object,
      default: () => ({})
    },
    columns: {
      type: Array,
      default: () => []
    },
    pollInterval: {
      type: Number,
      default: 0
    },
    paginationable: {
      type: Boolean,
      default: true
    },
    rowKey: {
      type: [String, Function]
    },
    rowClassName: {
      type: [String, Function]
    },
    headerRowClassName: {
      type: [String, Function]
    },
    highlightCurrentRow: {
      type: Boolean
    },
    size: {
      type: String
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selected: [] // 必要的，保存已选中的列表字段
    }
  },
  computed: {
    isShowFilterDialog: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    getColumns () {
      return this.columns.filter(item => this.selected.indexOf(item.key) !== -1)
    }
  },
  mounted () {
    this.selected = this.$refs.columnsFilter.getData()
  },
  methods: {
    refresh () {
      this.$refs.table.refresh()
    },
    setFilterSelected (selected) {
      this.selected = selected
    }
  }
}
</script>
