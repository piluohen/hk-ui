<template lang="pug">
  el-progress.hk-progress(
    :type="type"
    v-bind="$attrs"
  )
</template>
<script>
export default {
  name: 'hk-progress',
  props: {
    type: {
      type: String,
      default: 'line'
    },
    strokeColor: {
      type: String,
      default: ''
    }
  },
  watch: {
    strokeColor: 'setBgColor'
  },
  mounted () {
    this.setBgColor(this.strokeColor)
  },
  methods: {
    setBgColor (color) {
      if (this.type === 'line') {
        let el = this.$el.querySelector('.el-progress-bar__outer')
        el.style.backgroundColor = color || '#e5e9f2'
      } else {
        let el = this.$el.querySelector('.el-progress-circle__track')
        el.style.stroke = color || '#e5e9f2'
      }
    }
  }
}
</script>
<style lang="scss">
</style>
