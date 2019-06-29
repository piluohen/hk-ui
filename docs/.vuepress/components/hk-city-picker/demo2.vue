<template lang="pug">
el-row.hk-city-picker-demo2(:gutter="20")
  el-col(:span="6")
    p 省选择
    hk-city-picker(v-model="provinceCode" level="province")
    p.code code: {{ provinceCode }}
  el-col(:span="6")
    p 省-市选择
    hk-city-picker(v-model="cityCode" level="city")
    p.code code: {{ cityCode }}
  el-col(:span="6")
    p 省-市-区选择
    hk-city-picker(v-model="districtCode" level="district")
    p.code code: {{ districtCode }}
  el-col(:span="6")
    p 省-市-区-街道选择
    hk-city-picker(v-model="streetCode" level="street")
    p.code code: {{ streetCode }}
</template>

<script>
export default {
  name: 'hk-city-picker-demo2',
  data () {
    return {
      provinceCode: '',
      cityCode: '',
      districtCode: '',
      streetCode: ''
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
