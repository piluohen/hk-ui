<template lang="pug">
  .app-main(
    :class="getClass"
  )
    //- hk-breadcrumb(rootTitle="行业模板")
    transition(
      name="fade"
      mode="out-in"
    )
      router-view
</template>

<script>
export default {
  name: 'AppMain',
  props: {
    mode: {
      type: String,
      default: ''
    }
  },
  computed: {
    getClass () {
      return this.mode
    }
  }
}
</script>
<style lang="scss">
// 主体区域
.app-main {
  flex: 1;
  width: 100%;
  & > div {
    min-height: 100%;
    margin: 0 20px;
  }
  &.topNav {
    padding-top: 110px;
    & > div {
      margin: 0 40px;
    }
  }
  &.asideNav {
    overflow-y: auto;
  }
  &.headAsideNav {
    padding-top: 50px;
    overflow-y: auto;
  }
}
</style>
