<template lang="pug">
  el-pagination.hk-pagination(
    :background="true"
    :total="total"
    :page-size="size"
    :small="small"
    :current-page="page"
    :page-sizes="sizes"
    :next-text="nextText"
    :prev-text="prevText"
    layout="sizes, prev, pager, next"
    @prev-click="handlePrevClick"
    @next-click="handleNextClick"
    @size-change="handleSizeChange"
    @current-change="handleCurrChange"
  )
</template>

<script>
export default {
  name: 'hk-pagination',
  props: {
    total: { // 总数
      type: Number,
      default: 0
    },
    page: { // 页码
      type: Number,
      defualt: 0
    },
    small: { // 是否为小型分页
      type: Boolean,
      defualt: false
    },
    size: { // 每页多少条
      type: Number,
      defualt: 10
    },
    prevText: { // 上一页
      type: String,
      defualt: ''
    },
    nextText: { // 下一页
      type: String,
      defualt: ''
    }
  },
  computed: {
    sizes () {
      let size = this.size ? this.size : 10
      const sizes = [10, 20, 30, 40, 50, 100, size].sort((a, b) => a - b)
      return [...new Set(sizes)]
    }
  },
  methods: {
    handleSizeChange (size) { // pageSize 改变时会触发
      this.$emit('change', { page: 0, size })
    },
    handlePrevClick (page) { // 上一页
      this.$emit('change', { page, size: this.size })
    },
    handleNextClick (page) { // 下一页
      this.$emit('change', { page, size: this.size })
    },
    handleCurrChange (page) { // currentPage 改变时会触发
      this.$emit('change', { page, size: this.size })
    }
  }
}
</script>

<style lang="scss">
.hk-pagination {
  margin: 20px 0 10px 0;
  padding: 0;
  text-align: right;
  &.is-background .el-pager li {
    color: #8a92a5;
    font-weight: normal;
  }
}
</style>
