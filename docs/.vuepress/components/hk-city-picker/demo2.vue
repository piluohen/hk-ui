<template lang="pug">
.hk-city-picker-demo2
  hk-city-picker(v-model="code" multiple collapse-tags)
  p.code {{ code }}
</template>

<script>
export default {
  name: 'hk-city-picker-demo2',
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
