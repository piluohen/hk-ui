<template lang="pug">
el-row.hk-city-picker-demo5(:gutter="20")
  el-col(:span="12")
    p 可搜索
    hk-city-picker(v-model="code" filterable)
    p.code code: {{ code }}
  el-col(:span="12")
    p 多选可搜索
    hk-city-picker(v-model="code2" multiple filterable)
    p.code code: {{ code2 }}
</template>

<script>
export default {
  name: 'hk-city-picker-demo5',
  data () {
    return {
      code: '',
      code2: ''
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
</style>
