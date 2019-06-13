<template lang="pug">
  span
</template>

<script>
import { CountUp } from 'countup.js'
const typeOf = type => object => Object.prototype.toString.call(object) === `[object ${type}]`

const isFunction = typeOf('Function')
export default {
  name: 'hk-countup',
  props: {
    startVal: {
      type: Number,
      required: false,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      required: false,
      default: 2000
    }
  },
  data () {
    return {
      instance: null
    }
  },
  watch: {
    endVal: {
      handler (value) {
        if (this.instance && isFunction(this.instance.update)) {
          this.instance.update(value)
        }
      },
      deep: false
    }
  },
  methods: {
    create () {
      if (this.instance) {
        return
      }
      const dom = this.$el
      const instance = new CountUp(
        dom,
        this.startVal,
        this.endVal,
        this.duration
      )
      if (instance.error) {
        return
      }
      this.instance = instance
      if (this.duration < 0) {
        this.$emit('ready', instance, CountUp)
        return
      }
      setTimeout(() => instance.start(() => this.$emit('ready', instance, CountUp)), this.duration)
    },
    destroy () {
      this.instance = null
    },
    printValue (value) {
      if (this.instance && isFunction(this.instance.printValue)) {
        return this.instance.printValue(value)
      }
    },
    start (callback) {
      if (this.instance && isFunction(this.instance.start)) {
        return this.instance.start(callback)
      }
    },
    pauseResume () {
      if (this.instance && isFunction(this.instance.pauseResume)) {
        return this.instance.pauseResume()
      }
    },
    reset () {
      if (this.instance && isFunction(this.instance.reset)) {
        return this.instance.reset()
      }
    },
    update (newEndVal) {
      if (this.instance && isFunction(this.instance.update)) {
        return this.instance.update(newEndVal)
      }
    }
  },
  mounted () {
    this.create()
  },
  beforeDestroy () {
    this.destroy()
  }
}
</script>
