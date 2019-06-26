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
      type: [String, Date, Number, Array]
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  data () {
    return {
      // pickerOptions: defaultData.pickerOptions
    }
  },
  computed: {
    currValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
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
      this.$emit('input', value)
      this.$emit('change', value)
    }
  }
}
</script>
