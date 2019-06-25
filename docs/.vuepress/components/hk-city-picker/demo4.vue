<template lang="pug">
.hk-city-picker-demo4
  hk-city-picker(
    v-model="city"
    :options="options"
    :props="props"
  )
</template>

<script>
export default {
  name: 'hk-city-picker-demo4',
  data () {
    return {
      city: [],
      options: [
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
      props: {
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
