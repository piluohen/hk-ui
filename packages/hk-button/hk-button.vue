<template lang="pug">
el-button.hk-button(:size="size" :type="type" v-bind="$attrs" @click="handleClick")
  slot
</template>

<script>
import { Debounce } from './../util/debounce'
export default {
  name: 'hk-button',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'medium'
    },
    tip: {
      type: String,
      default: null
    }
  },
  methods: {
    handleClick: Debounce(function (e) {
      this.$emit('click', e)
    }, 200)
  }
}
</script>

<style lang="scss">
.hk-button {
  i + span {
    padding-left: 10px;
  }
}
</style>
