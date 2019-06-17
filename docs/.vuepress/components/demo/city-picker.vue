<template lang="pug">
.demo-city-picker
  hk-city-picker(v-model="city")
  hk-city-picker(
    v-model="city1"
    :options="options1"
    :props="props1"
    clearable
  )
</template>

<script>
export default {
  name: 'demo-city-picker',
  data () {
    return {
      city: [],
      city1: [],
      options1: [
        {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }
      ],
      props1: {
        value: 'value',
        label: 'label'
      }
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
