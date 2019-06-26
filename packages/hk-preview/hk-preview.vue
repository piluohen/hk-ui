<template lang="pug">
  el-dialog.show-img-dialog(
    :visible.sync="showDialog"
    top="0%"
    fullscreen
    append-to-body
  )
    el-carousel(
      ref="carousel"
      height="100%"
      :initial-index="index"
      :autoplay="false"
      :arrow="'always'"
      :indicator-position="'none'"
      :class="{'hide-left': hideLeft, 'hide-right': hideRight}"
      @change="changeHandle"
    )
      el-carousel-item(
        v-for="item in list"
        :key="item.url"
      )
        img(:src="item.url")
</template>
<script>
export default {
  name: 'hk-preview',
  data () {
    return {
      hideLeft: false,
      hideRight: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    // 图片数据
    list: {
      type: Array,
      default: () => []
    },
    // 图片索引
    index: {
      type: Number,
      default: 0
    },
    // 是否无限循环，默认为true
    isInfinite: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    showDialog: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  watch: {
    index (val) {
      // 监听index的值，如果已初始化了carousel且carousel的activeIndex与index不相等才执行重新对carousel赋值活动索引
      if (this.$refs['carousel'] && this.$refs['carousel'].activeIndex !== val) {
        this.$refs.carousel.setActiveItem(val)
        this.showArrowMethod(val)
      }
    },
    list () {
      this.showArrowMethod(0)
    },
    isInfinite () {
      this.showArrowMethod(this.index)
    }
  },
  methods: {
    changeHandle (val) {
      this.showArrowMethod(val)
    },
    // 显示左右箭头方法
    showArrowMethod (index) {
      if (!this.isInfinite) {
        this.hideLeft = index === 0
        this.hideRight = index === this.list.length - 1
      } else {
        this.hideLeft = false
        this.hideRight = false
      }
    }
  }
}
</script>
<style lang="scss">
  .show-img-dialog {
    .el-dialog {
      background: transparent;
      .el-dialog__header {
        padding: 0;
        height: 0;
        .el-dialog__headerbtn {
          background-color: rgba(31, 45, 61, .11);
          border-radius: 50%;
          z-index: 100;
          .el-dialog__close {
            font-size: 50px;
            color: #fff;
          }
        }
      }
      .el-dialog__body {
        height: 100%;
        padding: 0;
        .el-carousel {
          height: 100%;
          .el-carousel__item {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .el-carousel__arrow {
            width: 80px;
            height: 80px;
            font-size: 50px;
          }
          img {
            max-width: 80%;
            max-height: calc(100% - 40px);
          }
          &.hide-left {
            .el-carousel__arrow--left {
              display: none;
            }
          }
          &.hide-right {
            .el-carousel__arrow--right {
              display: none;
            }
          }
        }
      }
    }
  }
</style>
