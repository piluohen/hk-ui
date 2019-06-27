<template lang="pug">
  el-breadcrumb(
    class="hk-breadcrumb"
    separator="separator"
    :separator-class="separatorClass"
  )
    transition-group(name="breadcrumb")
      el-breadcrumb-item(
        v-for="(item, index) in routes"
        :key="`el-breadcrumb-item${index}`"
      )
        span(v-if="index === routes.length - 1" class="no-redirect") {{ item.meta.title }}
        router-link(v-else :to="item") {{ item.meta.title }}
</template>

<script>
import uniqWith from 'lodash/uniqWith'

export default {
  name: 'hk-breadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    routes () {
      const routes = this.$route.matched.reduce((routes, item) => {
        if (item.meta && item.meta.title) routes.push(item)
        return routes
      }, [])
      return uniqWith(routes, (a, b) => a.path === b.path)
        .map(item => ({
          ...item,
          path: item.redirect || item.path
        }))
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.hk-breadcrumb.el-breadcrumb {
  width: 100%;
  padding-bottom: 20px;
  font-size: 14px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
