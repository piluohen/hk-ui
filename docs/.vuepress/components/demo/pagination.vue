<template lang="pug">
.doc-pagination
  .item
    .label 正常显示
    hk-pagination
  .item
    .label 自定义size
     hk-pagination(:size="250")
</template>

<script>
export default {
  name: 'doc-pagination',
}
</script>
<style lang="scss">
.doc-pagination {
  display: flex;
}
</style>
