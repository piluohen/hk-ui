<template lang="pug">
el-button.hk-submit(
  type="primary"
  size="small"
  :icon="icon"
  :loading="loading"
  @click="handleClick"
) {{title}}
</template>

<style  lang="scss">
.hk-submit {
  width: 108px;
  margin-left: 50px;
  height: 32px;
  .iconfont {
    margin-right: 4px;
  }
}
</style>

<script>
export default {
  name: 'hk-submit',
  props: {
    title: {
      default: '查询'
    },
    icon: {
      default: ''
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>
