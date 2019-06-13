<template lang="pug">
  .app-nav(:class="navMode")
    el-menu(ref="navMenu", :default-active="activeIndex", :mode="navMode", @open="handleOpen", @close="handleClose",
      @select="selectHandle", :unique-opened="true", :collapse-transition="false", :collapse="collapse")
      template(v-for="item in list", v-if="item.show")
        el-menu-item(v-if="!item.children", :index="item.path")
          i(v-if="!mode" :class="item.icon")
          span(slot="title") {{item.title}}
        el-submenu(v-else, :index="item.path", :popper-append-to-body="true", ref="submenu", popper-class="hekr-submenu",
          :hide-timeout="0", :show-timeout="0")
          template(slot="title")
            i(v-if="!mode" :class="item.icon")
            span(slot="title") {{item.title}}
          template(v-for="sub in item.subList")
            el-menu-item(:index="sub.path", v-show="sub.show")
              i(v-if="!mode" :class="sub.icon")
              span {{sub.title}}
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppNav',
  data () {
    return {
      activeIndex: '' // 高亮索引
    }
  },
  props: {
    /* mode 导航模式
    * true 默认，横向水平，适用于顶部导航
    * false 垂直展开，适用于侧边栏导航
    */
    mode: {
      type: Boolean,
      default: true
    },
    /* collapse 是否可收缩
    * false 默认，水平方向不可收缩
    * true 仅适用于垂直方向，可设置收缩
    */
    collapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['addRouters']),
    router () {
      let arr = []
      if (!this.mode) {
        let path = this.$route.matched[0].path
        this.addRouters.forEach(item => {
          if (item.path === path || item.redirect === path) {
            if (item.children && item.children.length > 0) {
              item.children.forEach(v => {
                if (this.$route.path.indexOf(v.path) > -1) {
                  arr = v.children
                }
              })
            }
          }
        })
      } else {
        arr = this.addRouters
      }
      return arr
    },
    navMode () {
      return this.mode ? 'horizontal' : 'vertical'
    },
    // 默认高亮索引
    defaultActiveIndex () {
      // keepAlivePath 为固定保持高亮索引，优先
      let path = ''
      if (this.mode) {
        path = this.$route.matched[0].redirect
      } else {
        path = this.$route.meta.keepAlivePath ? this.$route.meta.keepAlivePath : this.$route.path
      }
      return path
    },
    list () {
      // 动态路由
      let router = this.router
      return router.map(r => {
        let path = r.redirect || r.path
        let icon = r.meta.icon
        let title = r.meta.title || r.children[0].meta.title
        let children = r.meta.children
        let subList = []
        let show = !r.meta.hide
        if (children) {
          r.children.map(s => {
            subList.push({
              path: `${r.path}/${s.path}`,
              icon: s.meta.icon,
              title: s.meta.title,
              show: !s.meta.hide
            })
          })
        }
        return { path, icon, title, children, show, subList }
      })
    }
  },
  beforeMount () {
    // 初始化组件设置默认高亮
    this.activeIndex = this.defaultActiveIndex
  },
  watch: {
    // 监听路由改变，修改高亮索引
    '$route' (to, from) {
      this.activeIndex = this.defaultActiveIndex
    }
  },
  methods: {
    // 展开子菜单
    handleOpen (index, path) {
      this.$nextTick(() => {
        this.$router.push(index)
        this.$refs.navMenu.activeIndex = index
        if (this.mode) {
          this.closeSubmenu(index)
        }
      })
    },
    // 关闭子菜单
    handleClose (index, path) {
      if (this.mode) {
        this.closeSubmenu(index)
      }
    },
    // 选择子菜单项
    selectHandle (index, path) {
      if (index !== this.$route.path) {
        this.$nextTick(() => {
          this.$router.push(index)
          if (this.mode) {
            this.closeSubmenu(index)
          } else {
            // 点击子菜单外面的菜单项，关闭所有子菜单
            this.$refs.submenu && this.$refs.submenu.forEach(v => {
              let arr = Object.keys(v.items)
              if (!arr.includes(index)) {
                this.closeSubmenu(v.index)
              }
            })
          }
        })
      }
    },
    // 关闭子菜单方法
    closeSubmenu (index) {
      this.$refs.navMenu.close(index)
    },
    // 打开子菜单方法
    openSubmenu (index) {
      this.$refs.submenu && this.$refs.submenu.forEach(v => {
        let arr = Object.keys(v.items)
        if (arr.includes(index)) {
          this.$refs.navMenu.open(arr[0])
        }
      })
    }
  }
}
</script>
<style lang="scss">
  @import "../../assets/scss/var.scss";

  $-hc-br: 2px;
  .app-nav {
    flex: 1;
    display: flex;
    padding: 0 40px;
    overflow: hidden;
    background-color: $nav-bg-color;
    .el-menu {
      flex: 1;
      border: none;
      background-color: $nav-bg-color;
      .el-menu-item{
        min-width: auto;
        padding: 0 40px;
        height: 50px;
        line-height: 50px;
        text-align: left;
        border-radius: $-hc-br;
        font-size: 16px;
        color: $nav-font-color;
        background-color: transparent;
        border-bottom: 4px solid transparent;
        i {
          color: $nav-font-color;
          margin-right: 10px;
        }
        &:not(.is-disabled):hover {
          color: $nav-font-color-hover;
          background-color: transparent;
          i {
            color: $nav-font-color-hover;
          }
        }
        &:not(.is-disabled):active,
        &:not(.is-disabled):visited,
        &:not(.is-disabled):focus {
          color: $nav-font-color-hover;
          background-color: transparent;
          i {
            color: $nav-font-color-hover;
          }
        }
        &.is-active {
          background-image: $linear-gradient-nav;
          background-color: transparent;
          color: $nav-font-color-hover;
          border-color: $primary;
          i {
            color: $nav-font-color-hover;
          }
        }
      }
    }
    .el-submenu {
      // width: 144px;
      .el-submenu__title {
        overflow: hidden;
        padding: 0 40px;
        height: 50px;
        line-height: 50px;
        text-align: left;
        border-radius: $-hc-br;
        font-size: 16px;
        color: $nav-font-color;
        border-bottom: 4px solid transparent;
        i {
          color: $nav-font-color;
          margin-right: 10px;
        }
        i.el-submenu__icon-arrow {
          margin-right: 0;
        }
        &:hover {
          color: $nav-font-color-hover;
          background-color: transparent;
          i {
            color: $nav-font-color-hover;
          }
        }
      }
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        padding: 0 10px !important;
        font-size: 14px;
        background-color: $nav-bg-color;
        color: $nav-font-color;
        border-bottom: 2px solid transparent;
        &:hover {
          color: $nav-font-color-hover;
          background-color: transparent;
        }
        &.is-active {
          background-color: transparent;
          color: $nav-font-color-hover;
          border-color: $primary;
        }
      }
      &:focus {
        .el-submenu__title {
          color: $nav-font-color;
        }
      }
      &.is-opened {
        .el-submenu__title {
          color: $nav-font-color-hover;
          i {
            color: $nav-font-color-hover;
          }
        }
      }
      &.is-active {
        .el-submenu__title {
          background-image: $linear-gradient-nav;
          background-color: transparent;
          color: $nav-font-color-hover;
          border-color: $primary !important;
          i {
            color: $nav-font-color-hover;
          }
        }
      }
    }
    &.vertical {
      padding: 20px 0;
      background-color: $color-bg-dark;
      .el-menu {
        background-color: $color-bg-dark;
        .el-menu-item {
          border-bottom: none;
          border-left: 6px solid transparent;
          font-size: 14px;
          .iconfont {
            font-size: 14px;
          }
          &.is-active {
            background: rgba(24, 104, 235, 0.5);
            border-color: $primary;
          }
          .el-tooltip {
            left: -1px !important;
          }
        }
      }
      .el-submenu {
        width: 100%;
        .el-submenu__title {
          border-bottom: none;
          border-left: 6px solid transparent;
        }
        .el-menu {
          padding: 10px 0;
          .el-menu-item {
            background-color: $color-bg-dark;
          }
        }
      }
      &.isCollapse {
        padding: 20px 0;
      }
    }
    &.horizontal {
      .el-menu {
        border: none;
        display: flex;
        justify-content: center;
      }
    }
    &.isCollapse {
      .el-menu {
        .el-menu-item {
          padding: 0 25px;
          i {
            margin: 0;
          }
        }
        .el-tooltip {
          text-align: center;
        }
        .el-submenu {
          .el-submenu__title {
            padding: 0 25px;
            text-align: center;
            i {
              margin: 0;
            }
          }
        }
      }
    }
  }
  .hekr-submenu {
    background-color: transparent;
    border: none;
    .el-menu--popup {
      background-color: $nav-bg-color;
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        font-size: 14px;
        background-color: $nav-bg-color;
        color: $nav-font-color;
        &:hover {
          color: $nav-font-color-hover;
          background: $linear-gradient-nav;
        }
        &.is-active {
          background: $linear-gradient-nav;
          color: $nav-font-color-hover;
          border-bottom: 2px solid $primary;
        }
      }
    }
  }
</style>
