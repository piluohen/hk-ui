<template lang="pug">
.edit
 hk-editor(v-model="value")
</template>
<script>
export default {
  name: 'hk-edit',
  data () {
    return {
      value: '234'
    }
  }
}
</script>
