<template lang="pug">
.hk-city-picker-demo1
  hk-city-picker(v-model="code" @change="change")
  p.code {{ code }}
</template>

<script>
export default {
  name: 'hk-city-picker-demo1',
  data () {
    return {
      code: []
    }
  },
  mounted () {
  },
  methods: {
    change (val) {
      console.log('2222', val)
    }
  }
}
</script>
<style lang="scss">
</style>
