<template lang="pug">
.hk-echarts-pie
  hk-echarts(:options="options" :width="width" :height="height")
</template>

<script>
export default {
  name: 'hk-echarts-pie',
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          { value: 12, name: '烟感', color: '#fff426' },
          { value: 40, name: '智慧用电', color: '#a8f3ff' },
          { value: 36, name: '消防水', color: '#2fc6ff' },
          { value: 13, name: '消防栓', color: '#8359ff' },
          { value: 14, name: '用户传输', color: '#ff5d5d' },
          { value: 25, name: '视频', color: '#16e4ba' },
          { value: 2, name: '其他', color: '#f2aa4e' }
        ]
      }
    }
  },
  data () {
    return {
      width: '100%',
      height: '240px',
      unit: ''
    }
  },
  computed: {
    colors () {
      let arr = this.data.map(item => {
        return item.color
      })
      return arr
    },
    labels () {
      let arr = this.data.map(item => {
        return item.name
      })
      return arr
    },
    options () {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}' + this.unit + ' ({d}%)'
        },
        color: this.colors,
        legend: {
          orient: 'vertical',
          icon: 'circle',
          type: 'scroll',
          top: 'center',
          right: 0,
          itemGap: 20,
          textStyle: {
            color: '#666666'
          },
          data: this.labels
        },
        series: [
          {
            name: '-',
            type: 'pie',
            radius: ['64%', '68%'],
            center: ['40%', '50%'],
            avoidLabelOverlap: false,
            labelLine: {
              normal: {
                show: true
              }
            },
            data: this.data
          }
        ]
      }
    }
  },
  methods: {
    getValue (name) {
      let arr = this.data.filter(item => {
        return item.name === name
      })
      if (arr.length > 0) {
        return arr[0].value
      } else {
        return '--'
      }
    }
  }
}
</script>

<style lang="stylus">
.hk-echarts-pie {
  width: 500px;
  margin: 30px 0;
}
</style>
