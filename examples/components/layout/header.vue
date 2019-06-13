<template lang="pug">
  .app-header(:class="getClass")
    //- .app-top(v-if="mode !== 'asideNav'" v-show="showTop")
    //-   .item.logo
    //-   .item.user-info
    //-     .message(@click="jumpMessage")
    //-       i.iconfont.icon-xiaoxi
    //-       //- el-badge(:value="messageNum")
    AppNav(:mode="true")
</template>
<script>
import AppNav from './nav'
export default {
  name: 'Header',
  components: {
    AppNav
  },
  data () {
    return {
      showTop: true,
      messageNum: 6
    }
  },
  props: {
    mode: {
      type: String,
      default: ''
    }
  },
  computed: {
    getClass () {
      return this.mode === 'headAsideNav' ? 'isHeadAsideNav' : ''
    }
  },
  mounted () {
    if (this.mode === 'topNav') {
      window.addEventListener('scroll', this.scrollHandle)
    }
  },
  methods: {
    scrollHandle () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.showTop = scrollTop < 50
    },
    jumpMessage () {
      this.$router.push('/message')
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/var.scss";
  .app-header {
    position: fixed;
    width: 100%;
    min-width: 1300px;
    top: 0;
    background-color: $color-bg;
    z-index: 123;
    .app-top {
      display: flex;
      justify-content: space-between;
      height: 50px;
      padding: 5px 40px;
      background-color: $white;
      .item {
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
      .logo {
        width: 120px;
      }
      .message {
        display: inline-block;
        margin-right: 30px;
        height: 36px;
        line-height: 36px;
        vertical-align: middle;
        text-align: center;
        // border-left: 1px solid $color-border;
        // border-right: 1px solid $color-border;
        cursor: pointer;
        .iconfont {
          color: $info;
          font-size: 25px;
        }
        .el-badge__content.is-fixed {
          top: 10px;
          right: 10px;
        }
      }
    }
    &.isHeadAsideNav {
      height: 50px;
    }
  }
</style>
