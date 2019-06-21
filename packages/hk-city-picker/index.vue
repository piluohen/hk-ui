<template lang="pug">
el-cascader.hk-city-picker(
  v-model="model"
  :options="options"
  :props="defaultProps"
  :clearable="clearable"
  v-bind="$attrs"
  v-on="$listeners"
)
</template>

<script>
// 行政code来源：https://github.com/modood/Administrative-divisions-of-China
import cityCode from './pca-code.json'
export default {
  name: 'hk-city-picker',
  props: {
    value: {},
    options: {
      type: Array,
      default: () => cityCode
    },
    props: {
      type: Object,
      default: () => {
        return {}
      }
    },
    clearable: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    defaultProps () {
      return {
        value: 'code',
        label: 'name',
        multiple: this.multiple,
        ...this.props
      }
    },
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
  }
}
</script>
