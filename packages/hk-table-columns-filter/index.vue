<template lang="pug">
hk-dialog(
  :value="value"
  :title="title"
  :autoclose="false"
  width="540px"
  @cancel="cancel"
  @confirm="confirm"
)
  .hk-table-columns-filter
    el-transfer(v-model="transfer" :titles="titles" :data="getColumns")
</template>

<script>
export default {
  name: 'hk-table-columns-filter',
  props: {
    value: { // 是否显示弹窗
      type: Boolean,
      default: false
    },
    title: { // 标题
      type: String,
      default: '显示字段筛选'
    },
    columns: { // 待选数据源
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      transfer: [],
      titles: ['未选择', '已选择']
    }
  },
  computed: {
    getColumns () {
      return this.columns.map(({ title, key, disabled }) => ({
        label: title || key,
        key,
        disabled
      }))
    }
  },
  watch: {
    value () {
      this.transfer = this.getData()
    }
  },
  mounted () {
    let localData = this.getData()
    if (localData.length) { // 如果本地存在,取本地存有的
      this.transfer = localData
    } else { // 取默认选中的
      this.columns.map(({ defaultSelected, disabled, key }) => {
        if (defaultSelected) {
          this.transfer.push(key)
        }
      })
      this.setData() // 第一次进入时，把默认选中的值存入本地
    }
  },
  methods: {
    getData () { // 从本地获取已选中的字段
      let selectedTable = JSON.parse(localStorage.getItem('selectedTable')) || {}
      return selectedTable[this.$route.name] || []
    },
    setData () { // 存入本地
      let selectedTable = JSON.parse(localStorage.getItem('selectedTable')) || {}
      selectedTable[this.$route.name] = this.transfer
      localStorage.setItem('selectedTable', JSON.stringify(selectedTable))
    },
    cancel () {
      this.$emit('input', false)
    },
    confirm () { // 确认时，保存至本地
      if (this.transfer.length < 5) { // 至少保留5个字段
        this.$message({
          message: '请至少保留5个字段',
          type: 'warning'
        })
      } else {
        this.$emit('input', false)
        this.setData()
        this.$emit('confirm', this.transfer)
      }
    }
  }
}
</script>

<style lang="scss">
.hk-table-columns-filter {
  text-align: center;
  .el-transfer {
    text-align: left;
    display: inline-block;
  }
}
</style>
