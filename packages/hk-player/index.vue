<template lang="pug">
.hk-player(:class="getClass")
  .hk-player-video(ref="video")
  .hk-player-clear(
    v-show="showClear && sources.length"
    @click="clear"
  ) 清除
  .hk-player-mask(
    v-show="!sources.length"
    @click="select"
  )
    .hk-player-mask-text 选择视频
</template>

<script>
// import isEqual from 'lodash/isEqual'
import load from './../util/dynamicLoadScript'
const playerCDN = 'https://open.ys7.com/sdk/js/1.4/ezuikit.js'
export default {
  name: 'hk-player',
  props: {
    source: {
      type: [Array, String],
      default: () => []
    },
    active: {
      type: Boolean,
      default: false
    },
    showClear: {
      type: Boolean,
      default: false
    }
  },
  data () {
    function makeId () {
      let id = Math.random().toString(26).slice(2).split('')
      const chars = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
      ]
      return id.map(val => chars[parseInt(val, 26)]).join('')
    }
    return {
      id: makeId()
    }
  },
  computed: {
    sources () {
      return Array.isArray(this.source) ? this.source : [this.source]
    },
    getClass () {
      return {
        'hk-player-active': this.active
      }
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    sources (nVal, oVal) {
      if (nVal !== oVal) this.init()
    }
  },
  methods: {
    init () {
      if (this.player) {
        try {
          this.player.pause()
        } catch (e) { }
      }
      load(playerCDN, (err) => {
        if (err) {
          this.$message.error(err.message)
          return
        }
        this.initPlayer()
      })
    },
    initPlayer () {
      this.$nextTick(() => {
        this.$refs.video.innerHTML = ''
        if (this.sources.length) {
          const $video = document.createElement('video')
          $video.setAttribute('id', this.id)
          $video.setAttribute('controls', true)
          $video.setAttribute('autoplay', true)
          $video.setAttribute('muted', true)
          $video.setAttribute('playsInline', true)
          $video.setAttribute('poster', '')
          $video.setAttribute('webkit-playsinline', true)
          this.sources.forEach(source => {
            if (!source) return
            const $source = document.createElement('source')
            $source.setAttribute('src', source)
            $video.appendChild($source)
          })
          this.$refs.video.appendChild($video)
          this.player = new EZUIPlayer(this.id)
        }
      })
    },
    select (e) {
      this.$emit('select', e)
    },
    clear (e) {
      this.$emit('clear', e)
    }
  }
}
</script>

<style lang="scss">
.hk-player {
  height: 100%;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background-color: #000;
  &:hover {
    .hk-player-clear {
      transform: translate(-100%, -52%);
      opacity: 1;
    }
  }
  &-active {
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
  &-video {
    height: 100%;
    min-width: 400px;
    min-height: 400px;
    overflow: hidden;
  }
  &-clear {
    width: 30px;
    position: absolute;
    top: 50%;
    left: 100%;
    padding: 5px 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    transform: translate(0, -52%);
    opacity: 0.3;
    transition: all 0.3s ease-in-out;
    border-radius: 7px 0 0 7px;
    color: #fff;
    cursor: pointer;
    box-shadow: -1px 0 1px 1px rgba(0, 0, 0, 0.3);
  }
  &-mask,
  video,
  object,
  embed {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &-mask {
    z-index: 999;
    text-align: center;
    color: #bbb;
    cursor: pointer;
    &-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
