<template lang="pug">
  el-card.hekr-card(:style="style" top="0")
    .hekr-card-header(slot="header" v-if="title")
      div(:class="chart?'hekr-card-title':''") {{ title }}
        span.desc(v-if="desc") {{desc}}
      div
        slot(name="right")
    .hk-card-body(:style="bodyStyle")
      slot
</template>

<script>
export default {
  name: 'hk-card',
  props: {
    title: {
      type: String,
      default: ''
    },
    chart: {
      type: Boolean,
      default: false
    },
    desc: {
      type: String,
      default: ''
    },
    padding: {
      type: [Number, String],
      default: 20
    },
    top: {
      type: [String, Number],
      default: 0
    },
    bottom: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    style () {
      let style = {
        marginTop: this.top + 'px',
        marginBottom: this.bottom + 'px'
      }
      return style
    },
    bodyStyle () {
      let padding = this.padding
      if (typeof padding === 'number') {
        padding += 'px'
      }
      return {
        padding: padding
      }
    }
  }
}
</script>

<style lang="scss">
.hekr-card {
  .hekr-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .hekr-card-title {
      font-size: 14px;
      font-weight: 500;
      border-left: 4px solid #1868eb;
      padding-left: 20px;
    }
    .desc {
      font-size: 12px;
      margin-left: 5px;
      color: #131528;
      opacity: 0.6;
    }
  }
  .el-card__body {
    height: 100%;
    padding: 0 !important;
    position: relative;
  }
}
</style>
