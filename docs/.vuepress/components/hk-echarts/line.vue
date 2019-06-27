<template lang="pug">
.hk-echarts-line
  hk-echarts(:options="options" :width="width" :height="height")
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'hk-echarts-line',
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          {
            name: '消防栓',
            color: '#ff8f8f',
            value: [40, 30, 37, 32, 30, 26, 20]
          }, {
            name: '摄像机',
            color: '#1a9cff',
            value: [30, 28, 26, 38, 30, 28, 10]
          }, {
            name: '烟感',
            color: '#a560ff',
            value: [36, 24, 12, 26, 30, 22, 6]
          }, {
            name: '智慧用电',
            color: '#2deaef',
            value: [20, 25, 24, 23, 22, 16, 36]
          }
        ]
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
    xData () {
      let date = []
      let endTime = this.getTimeRange(new Date())
      let totalNum = 7
      for (let i = totalNum - 1; i > -1; i--) {
        let time = endTime - (i * 24 * 3600 * 1000)
        let formatTime = dayjs(time).format('MM-DD')
        date.push(formatTime.replace('-', '.'))
      }
      return date
    },
    series () {
      return this.data.reduce((items, item) => {
        const temp = {
          name: item.name,
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 2,
          data: item.value
        }
        items.push(temp)
        return items
      }, [])
    },
    options () {
      return {
        color: this.colors,
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: 30,
          top: 30,
          right: 20,
          bottom: 20
        },
        legend: {
          data: this.labels,
          icon: 'circle',
          textStyle: {
            color: '#666666'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#d9d9d9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#707497',
            // rotate: 40,
            fontSize: 12
          },
          data: this.xData
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            // showMinLabel: false,
            // showMaxLabel: false,
            color: '#c8c8c8'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.2)',
              type: 'dashed'
            }
          }
        },
        series: this.series
      }
    }
  },
  methods: {
    getTimeRange (time = Date.now()) {
      return dayjs(dayjs(time).format('YYYY-MM-DD')).unix() * 1000
    }
  }
}
</script>

<style lang="stylus">
.hk-echarts-line {
  width: 500px;
  margin: 30px 0;
}
</style>
