<template lang="pug">
el-cascader.hk-city-picker(
  v-model="model"
  :options="options"
  :props="defaultProps"
  v-bind="$attrs"
)
</template>

<script>
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
    }
  },
  data () {
    return {
      // options: cityCode,
      // props: {
      //   value: 'code',
      //   label: 'name'
      // }
    }
  },
  computed: {
    defaultProps () {
      return {
        value: 'code',
        label: 'name',
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
