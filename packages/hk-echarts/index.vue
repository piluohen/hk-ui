<template lang="pug">
.hk-echarts(:style="getStyle")
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'hk-echarts',
  props: {
    options: {
      type: Object
    },
    clearable: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    getStyle () {
      return {
        width: this.width,
        height: this.height
      }
    }
  },
  mounted () {
    this.chart = echarts.init(this.$el)
    this.setOption()
    window.addEventListener('resize', this.resize)
  },
  destroyed () {
    window.removeEventListener('resize', this.resize)
  },
  watch: {
    options: {
      deep: true,
      handler: 'setOption'
    }
  },
  methods: {
    resize () {
      this.chart.resize()
    },
    setOption () {
      if (this.clearable) this.chart.clear()
      if (this.options) this.chart.setOption(this.options)
    }
  }
}
</script>
