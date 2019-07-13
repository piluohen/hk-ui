<template lang="pug">
  el-cascader.hk-city-picker(
    ref="cascader"
    v-model="model"
    :props="defaultProps"
    :clearable="clearable"
    :filterable="filterable"
    :class="{'dark-placeholder': this.showDefaultValue}"
    :placeholder="this.showDefaultValue ? this.defaultValue : this.placeholder"
    v-bind="$attrs"
    v-on="$listeners"
  )
    template(slot-scope="{ node, data }")
      slot(:node="node" :data="data")
    template(slot="empty")
      slot(name="empty")
</template>

<script>
const levelList = ['province', 'city', 'district', 'street']
export default {
  name: 'hk-city-picker',
  props: {
    value: [String, Array],
    level: {
      type: String,
      validator: function (value) {
        return levelList
      },
      default: 'district'
    },
    emitPath: {
      type: Boolean,
      default: false
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
    },
    filterable: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: [String, Array],
      default: '请选择'
    }
  },
  data () {
    return {
      showCascader: false
    }
  },
  computed: {
    defaultProps () {
      return {
        value: 'id',
        label: 'name',
        children: 'area',
        // checkStrictly: true,
        emitPath: this.emitPath,
        expandTrigger: 'click',
        multiple: this.multiple,
        lazy: true,
        lazyLoad: (node, resolve) => {
          let areaCode = node.value || ''
          fetch(`https://uaa-openapi.hekr.me/lngAndLat/sub?areaCode=${areaCode}`)
            .then(response => response.json())
            .then(data => {
              const nodes = data.map(item => {
                return {
                  id: item.id,
                  name: item.name,
                  leaf: node.level >= levelList.indexOf(this.level)
                }
              })
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(nodes)
            })
            .catch(e => console.log('Oops, error', e))
        },
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
    },
    showDefaultValue () {
      return this.model && this.defaultValue
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss">
.el-cascader.hk-city-picker {
  // width: 100%;
  &.dark-placeholder {
    .el-input input {
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #606266;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #606266;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #606266;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #606266;
      }
    }
  }
}
</style>
