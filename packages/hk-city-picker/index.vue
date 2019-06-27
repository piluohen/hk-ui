<template lang="pug">
el-cascader.hk-city-picker(
  v-model="model"
  :options="options"
  :props="defaultProps"
  :clearable="clearable"
  :filterable="filterable"
  v-bind="$attrs"
  @change="change"
)
  template(slot-scope="{ node, data }")
    slot(:node="node" :data="data")
  template(slot="empty")
    slot(name="empty")
//- v-on="$listeners"
</template>

<script>
import _ from 'lodash'
export default {
  name: 'hk-city-picker',
  props: {
    value: [String, Array],
    level: {
      validator: function (value) {
        return ['province', 'city', 'district', 'street']
      },
      default: 'district'
    },
    lastCode: {
      type: Boolean,
      default: true
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
    }
  },
  data () {
    return {
      options: []
    }
  },
  computed: {
    defaultProps () {
      return {
        value: 'id',
        label: 'name',
        children: 'area',
        checkStrictly: true,
        expandTrigger: 'hover',
        multiple: this.multiple,
        ...this.props
      }
    },
    model: {
      get () {
        let value = this.value
        if (value && this.lastCode) {
          if (this.multiple) {
            value = value.map(item => {
              return this.lastCodeToAll(item)
            })
          } else {
            value = this.lastCodeToAll(value)
          }
        }
        return value
      },
      set (val) {
        let value = val
        if (this.lastCode) {
          if (this.multiple) {
            value = value.map(item => {
              return _.last(item)
            })
          } else {
            value = _.last(value)
          }
        }
        this.$emit('input', value)
      }
    },
    localKey () {
      return `map-${this.level}`
    }
  },
  mounted () {
    this.getMap()
  },
  methods: {
    getMap () {
      let localMap = this.getLocal(this.localKey)
      // 先从本地读取数据，本地没有拉取云端并存储本地
      if (localMap) {
        this.options = localMap
      } else {
        this.getArea()
      }
    },
    getArea () {
      let level = this.level.toUpperCase()
      fetch(`https://uaa-openapi.hekr.me/lngAndLat/json?level=${level}`)
        .then(response => response.json())
        .then(data => {
          this.options = data
          this.setLocal(this.localKey, data)
        })
        .catch(e => console.log('Oops, error', e))
    },
    /**
     * 读取本地缓存
     */
    getLocal (key) {
      let info = localStorage.getItem(key)
      if (info) {
        try {
          info = JSON.parse(info)
        } catch (e) { }
      }
      if (info && typeof info === 'object') {
        return info
      }
      return false
    },
    /**
     * 设置本地缓存
     */
    setLocal (key, info) {
      return localStorage.setItem(key, JSON.stringify(info))
    },
    /**
     * 将6位或9位code转成包含父级code的数组
     */
    lastCodeToAll (value) {
      let arr = Array.from({ length: 4 }, (v, k) => {
        if (k === 3) {
          return value.substr(6, 3) || '000'
        } else {
          return value.substr(k * 2, 2)
        }
      })
      _.remove(arr, item => item === '00' || item === '000')
      return arr.map((v, k) => {
        if (k > 2) {
          return value
        } else {
          let item = value.substr(0, (k + 1) * 2)
          return _.padEnd(item, 6, '0')
        }
      })
    },
    change (val) {
      this.$emit('change', val)
    }
  }
}
</script>
