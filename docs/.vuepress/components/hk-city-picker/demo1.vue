<template lang="pug">
el-row.hk-city-picker-demo1(:gutter="20")
  el-col(:span="12")
    p 默认用法
    hk-city-picker(v-model="code" placeholder="请选择省市区" @change="change")
    p.code code: {{ code }}
  el-col(:span="12")
    p 双向绑定
    hk-city-picker(v-model="code2" defaultValue="北京市北京城区昌平区" @change="change")
    p.code code: {{ code2 }}
</template>

<script>
export default {
  name: 'hk-city-picker-demo1',
  data () {
    return {
      code: '',
      code2: '110114'
    }
  },
  mounted () {
  },
  methods: {
    change (val) {
      console.log('2222', val)
    }
  }
}
</script>
<style lang="scss">
</style>
