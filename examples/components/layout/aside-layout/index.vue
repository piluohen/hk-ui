<template lang="pug">
  .aside-layout
    Aside(mode="headAsideNav")
    .main-page
      //- hk-breadcrumb()
      router-view
</template>
<script>
import Aside from './aside'
export default {
  name: 'AsideLayout',
  components: { Aside },
  methods: {
  }
}
</script>
<style lang="scss">
.aside-layout {
  height: 100%;
  display: flex;
  margin: 0 !important;
  .main-page {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
  }
}
</style>
