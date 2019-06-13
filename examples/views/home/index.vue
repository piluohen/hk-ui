<template lang="pug">
  .home
    router-link(:to="'/component'") 欢迎查看hk-ui文档
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss">
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center
}
</style>
