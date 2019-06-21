<template lang="pug">
  el-progress.hk-progress(
    v-bind="$attrs"
  )
</template>
<script>
export default {
  name: 'hk-progress',
  props: {
    strokeColor: {
      type: String,
      default: '#104083'
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss">
</style>
