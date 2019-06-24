<template lang="pug">
.hk-ui
  .code 选中内容： {{data}}
  hk-map(:latitude="latitude" :longitude="longitude" height="300px" :showInput="showInput" @select="select")
</template>
<script>
export default {
  name: 'hk-ui-map',
  data () {
    return {
      data: '',
      latitude: null,
      longitude: null,
      disabled: false,
      showInput: true
    }
  },
  methods: {
    select (data) {
      this.data = data
    }
  }
}
</script>