<template lang="pug">
.hk-echarts-bar
  hk-echarts(:options="options" :width="width" :height="height")
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'hk-echarts-bar',
  props: {
    data: {
      type: Array,
      default: () => {
        return [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
      }
    }
  },
  data () {
    return {
      width: '100%',
      height: '200px'
    }
  },
  computed: {
    options () {
      return {
        grid: {
          left: 30,
          top: 10,
          right: 20,
          bottom: 20
        },
        xAxis: {
          data: new Array(20),
          show: false,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#999'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.2)',
              type: 'dashed'
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#005bea' },
                    // { offset: 0.5, color: '#188df0' },
                    { offset: 1, color: '#a21eff' }
                  ]
                )
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#a21eff' },
                    // { offset: 0.7, color: '#2378f7' },
                    { offset: 1, color: '#005bea' }
                  ]
                )
              }
            },
            data: this.data
          }
        ]
      }
    }
  },
  methods: {}
}
</script>

<style lang="stylus">
.hk-echarts-bar {
  width: 500px;
  margin: 30px 0;
}
</style>
