<template lang="pug">
  #app
    router-view
</template>

<script>
import router from '@/router'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters(['addRouters']),
    ...mapActions(['GenerateRoutes'])
  },
  mounted () {
    this.$store.dispatch('GenerateRoutes', []).then(() => {
      router.addRoutes(this.addRouters)
    })
  }
}
</script>

<style lang="scss">
@import "./assets/scss/index";
html, body, #app{
  width: 100%;
  height: 100%;
  background-color: $color-bg;
  min-width: 1366px;
}
</style>
