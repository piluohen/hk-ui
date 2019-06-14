<template lang="pug">
.edit 555555
  button(@click="handleClick") 设置默认值
  hk-editor(v-model="value")
</template>
<script>
export default {
  name: 'hk-editor',
  data () {
    return {
      value: '234'
    }
  },
  methods: {
    handleClick () {
      this.value = '2345678'
    }
  }
}
</script>
