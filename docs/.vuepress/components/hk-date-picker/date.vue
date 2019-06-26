<template lang="pug">
.hk-date-picker-date
  hk-date-picker(
    v-model="value1"
    type="date"
    placeholder="选择日期"
  )
</template>

<script>
export default {
  name: 'hk-date-picker-date',
  data () {
    return {
      value1: ''
    }
  }
}
</script>
<style lang="scss">
.hk-date-picker-date {
  margin: 20px 0;
}
</style>
