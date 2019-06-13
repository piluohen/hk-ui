<template lang="pug">
.app-wrapper
  Header(v-if="this.layoutMode !== 'asideNav'" :mode="layoutMode")
  Main(:mode="layoutMode")
</template>

<script>
import Header from './header'
import Main from './main'
export default {
  name: 'layout',
  components: {
    Header,
    Main
  },
  data () {
    return {
      // 切换布局，顶部导航(topNav)，侧边导航(asideNav)，顶部用户信息侧边导航(headAsideNav)
      layoutMode: 'headAsideNav'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.app-wrapper {
  min-width: 1300px;
  height: 100%;
  display: flex;
}
</style>
