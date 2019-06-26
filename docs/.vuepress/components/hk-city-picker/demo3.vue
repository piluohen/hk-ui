<template lang="pug">
.hk-city-picker-demo3
  hk-city-picker(v-model="code" filterable)
  p.code {{ code }}
</template>

<script>
export default {
  name: 'hk-city-picker-demo3',
  data () {
    return {
      code: []
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss">
</style>
