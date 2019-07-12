<template lang="pug">
el-cascader.hk-city-picker(
  v-model="model"
  :options="options"
  :props="defaultProps"
  :clearable="clearable"
  :filterable="filterable"
  v-bind="$attrs"
  v-on="$listeners"
)
  template(slot-scope="{ node, data }")
    slot(:node="node" :data="data")
  template(slot="empty")
    slot(name="empty")
</template>

<script>
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
        // checkStrictly: true,
        emitPath: this.emitPath,
        expandTrigger: 'hover',
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
    },
    localKey () {
      return `map-${this.level}`
    }
  },
  mounted () {
    setTimeout(() => {
      this.getMap()
    }, 0)
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
    }
  }
}
</script>
