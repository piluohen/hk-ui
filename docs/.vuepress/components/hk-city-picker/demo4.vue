<template lang="pug">
el-row.hk-city-picker-demo4(:gutter="20")
  el-col(:span="12")
    p 多选
    hk-city-picker(v-model="code" multiple)
    p.code code: {{ code }}
  el-col(:span="12")
    p 完整code多选
    hk-city-picker(v-model="code2" emitPath multiple)
    p.code code: {{ code2 }}
</template>

<script>
export default {
  name: 'hk-city-picker-demo4',
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
