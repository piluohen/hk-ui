<template lang="pug">
  .app-aside(:class="{isCollapse, isHeadAsideNav}")
    .app-aside-top(v-if="mode === 'asideNav'" @click="toggleCollapse")
      .item.logo
    .collapse-btn(
      v-if="mode === 'headAsideNav'"
      @click="toggleCollapse"
    )
      span(v-if="!isCollapse") {{pageTitle}}
      i(:class="iconClass")
    AsideNav(:mode="false", :collapse="isCollapse" :class="{isCollapse}")
</template>
<script>
import AsideNav from '~/layout/nav'
export default {
  name: 'Aside',
  components: {
    AsideNav
  },
  data () {
    return {
      isCollapse: false
    }
  },
  props: {
    mode: {
      type: String,
      default: ''
    }
  },
  computed: {
    pageTitle () {
      return this.$route.matched[1].meta.title
    },
    isHeadAsideNav () {
      return this.mode === 'headAsideNav'
    },
    iconClass () {
      return this.isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
    }
  },
  methods: {
    // 切换大小视图
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/scss/var.scss";
  .app-aside {
    flex: 0 0 250px;
    height: 100%;
    background-color: $color-bg;
    display: flex;
    flex-direction: column;
    border-right: 1px solid $color-border;
    background-color: $color-bg-dark;
    .app-aside-top {
      flex: 0 0 70px;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      background-color: $white;
      .item {
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
      .logo {
        width: 100%;
        cursor: pointer;
      }
    }
    .app-aside-bottom {
      padding: 15px;
      display: flex;
      justify-content: center;
      .item {
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
    }
    &.isCollapse {
      flex: 0 0 64px;
      .app-aside-top {
        width: 64px;
      }
      .aside-nav.vertical {
        padding: 20px 0;
      }
    }
    &.isHeadAsideNav {
      border-color: transparent;
      .collapse-btn {
        height: 44px;
        padding: 30px 30px 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
        color: $nav-font-color;
        i {
          font-size: 14px;
        }
      }
      &.isCollapse {
        .collapse-btn {
          padding: 30px 0 0;
          justify-content: center;
        }
      }
    }
  }
</style>
