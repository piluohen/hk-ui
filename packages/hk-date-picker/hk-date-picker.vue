<template lang="pug">
  el-date-picker(
    v-model="currValue"
    :size="size"
    v-bind="$attrs"
    @change="handleChange"
  )
</template>

<script>
// import { getTimeRange } from '@/assets/utils/date'
// import { defaultData } from '@/config/defaultData'
export default {
  name: 'hk-date-picker',
  props: {
    value: {
      type: [String, Array]
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  data () {
    return {
      currValue: this.value
      // pickerOptions: defaultData.pickerOptions
    }
  },
  methods: {
    handleChange (value) {
      // let val = []
      // if (value && value.length > 0) {
      //   val = [...value]
      //   if (getTimeRange(value[1]) === getTimeRange(Date.now())) {
      //     val[1] = Date.now()
      //   } else {
      //     val[1] = getTimeRange(value[1] + 24 * 3600 * 1000)
      //   }
      // }
      this.$emit('change', value)
    }
  }
}
</script>
