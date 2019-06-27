<template lang="pug">
el-row.hk-city-picker-demo3(:gutter="20")
  el-col(:span="12")
    p 默认用法
    hk-city-picker(v-model="code" :lastCode="false")
    p.code code: {{ code }}
  el-col(:span="12")
    p 双向绑定
    hk-city-picker(v-model="code2" :lastCode="false")
    p.code code: {{ code2 }}
</template>

<script>
export default {
  name: 'hk-city-picker-demo3',
  data () {
    return {
      code: [],
      code2: [
        '130000',
        '130200',
        '130202'
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss">
</style>
