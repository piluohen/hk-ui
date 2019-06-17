<template lang="pug">
  .hk-progress(ref="progress" :style="getStyle")
    el-progress(:type="type" :percentage="percentage" :color="color" :stroke-width="strokeWidth" :show-text="false")
    slot
      .value(v-if="type === 'circle'" :style="getColor") {{percentage}}%
</template>
<script>
export default {
  name: 'hk-progress',
  props: {
    type: {
      type: String,
      default: 'circle'
    },
    percentage: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 85
    },
    strokeWidth: {
      type: Number,
      default: 10
    },
    strokeColor: {
      type: String,
      default: '#104083'
    }
  },
  computed: {
    getStyle () {
      return {
        width: this.width + 'px',
        height: this.type === 'circle' ? this.width + 'px' : 'auto'
      }
    },
    getColor () {
      return {
        color: this.color
      }
    }
  },
  mounted () {
    this.setBgColor()
  },
  methods: {
    setBgColor () {
      if (this.type === 'circle') {
        let el = this.$refs['progress'].querySelectorAll('.el-progress-circle__track')[0]
        el.style.stroke = this.strokeColor
      } else {
        let el = this.$refs['progress'].querySelectorAll('.el-progress-bar__outer')[0]
        el.style.backgroundColor = this.strokeColor
      }
    }
  }
}
</script>
<style lang="scss">
.hk-progress {
  position: relative;
  .value {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .el-progress--circle {
    display: block;
  }
  .el-progress-circle {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
