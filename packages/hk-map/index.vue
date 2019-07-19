<template lang="pug">
.hk-map
  .map(:ref="id", :style="{height}" title="地址所在位置")
  .input-address(v-if="showInput")
    span {{label}}
    input.search(id="keyword" name="keyword" type="text" onfocus='this.value=""')
    span.line.bottom
    span.line.right
</template>

<script>
import load from './../util/dynamicLoadScript'
let mapCDN = 'https://webapi.amap.com/maps?v=1.4.14&key=4d42d9473b20a8d7646605d98779fdf4'
const getGeocodeApi = location => {
  return fetch(
    `https://restapi.amap.com/v3/geocode/regeo?location=${location}&key=4d42d9473b20a8d7646605d98779fdf4&s=rsv3`,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }
  ).then(result => {
    return result.json()
  })
}
export default {
  name: 'hk-map',
  props: {
    id: {
      type: String,
      default: function () {
        return 'map-' + +new Date() + ((Math.random() * 1000).toFixed(0))
      }
    },
    label: {
      type: String,
      default: '关键词：'
    },
    latitude: {
      type: [Number, String]
    },
    height: {
      type: String,
      default: '300px'
    },
    longitude: {
      type: [Number, String]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showInput: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    lnglat () {
      if (this.longitude && this.longitude !== undefined && this.latitude && this.latitude !== undefined) {
        return [Number(this.longitude), Number(this.latitude)]
      }
      return undefined
    }
  },
  data () {
    return {
      map: null,
      markerClickValue: null
    }
  },
  mounted () {
    load(mapCDN, (err) => {
      if (err) {
        this.$message.error(err.message)
        return
      }
      this.map = new AMap.Map(this.$refs[this.id], {
        resizeEnable: true,
        center: this.lnglat,
        zoom: 13
      })
      this.$nextTick(() => {
        this.setCenterMap()
      })
    })
  },
  methods: {
    setCenterMap () {
      if (!this.disabled) {
        this.map.on('click', this.click)
        AMap.plugin(['AMap.Geocoder', 'AMap.Autocomplete', 'AMap.PlaceSearch'], () => {
          this.geocoder = new AMap.Geocoder()
          this.autoOptions = {
            city: '北京',
            input: 'keyword'
          }
          this.autocomplete = new AMap.Autocomplete(this.autoOptions)
          let placeSearch = new AMap.PlaceSearch({
            city: '北京',
            map: this.map
          })
          AMap.event.addListener(this.autocomplete, 'select', function (e) {
            placeSearch.setCity(e.poi.adcode)
            placeSearch.search(e.poi.name)
          })
          placeSearch.on('markerClick', this.selectMarker)
        })
      }
      this.lnglat && this.setCenter(this.lnglat)
    },
    setMarker (lnglat) {
      if (!this.marker) {
        this.marker = new AMap.Marker({
          map: this.map,
          position: lnglat
        })
      } else {
        this.marker.setPosition(lnglat)
      }
    },
    selectMarker (e) {
      this.click({ lnglat: e.data.location })
    },
    click ({ lnglat }) {
      if (this.disabled) return
      if (!this.geocoder) return
      lnglat && this.setMarker(lnglat)
      getGeocodeApi(lnglat).then(result => {
        if (result.info === 'OK') {
          // result为对应的地理位置详细信息
          this.$emit('select', {
            // ...result.regeocode,
            towncode: result.regeocode.addressComponent.towncode,
            formattedAddress: result.regeocode.formatted_address,
            longitude: lnglat.lng,
            latitude: lnglat.lat
          })
        } else {
          this.$emit('select')
        }
      })
    },
    setCenter (lnglat) {
      this.$nextTick(() => {
        this.setMarker(lnglat)
      })
      this.map.setCenter(lnglat)
    },
    handleSearch (detailedAddress) {
      if (this.disabled || !this.geocoder) return
      this.geocoder.getLocation(detailedAddress, (status, result) => {
        if (status === 'complete' && result.info === 'OK') {
          const geocodes = result.geocodes[0]
          if (geocodes) this.map.setZoomAndCenter(13, geocodes.location)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.hk-map {
  position: relative;
  .edit-map {
    height: 200px;
  }
  .input-address {
    background-color: #fff;
    font-size: 12px;
    position: absolute;
    padding: 5px;
    z-index: 999;
    left: 0px;
    top: 0px;
  }
  .search {
    width: 15em;
    padding: 0.35em 0.45em;
    transition: background-color 0.3s ease-in-out;
    -webkit-appearance: none;
    background-color: rgb(255, 255, 255);
    background-image: none;
    border-radius: 4px;
    border: 1px solid rgb(220, 223, 230);
    box-sizing: border-box;
    color: rgb(96, 98, 102);
    display: inline-block;
    font-size: inherit;
    height: 30px;
    line-height: 30px;
    outline: none;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .search:focus {
    outline: none;
  }
  .search::placeholder {
    color: hsla(0, 0%, 100%, 0.6);
  }
  .line {
    position: absolute;
    background-color: #008bdf;
    transition: transform 0.5s ease;
  }

  .bottom,
  .top {
    height: 1px;
    left: 0;
    right: 0;
    transform: scaleX(0);
  }

  .left,
  .right {
    width: 1px;
    top: 0;
    bottom: 0;
    transform: scaleY(0);
  }

  .bottom {
    bottom: 0;
    transform-origin: bottom right;
  }

  .search:focus ~ .bottom {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  .right {
    right: 0;
    transform-origin: top right;
  }

  .search:focus ~ .right {
    transform-origin: bottom right;
    transform: scaleY(1);
  }
}
</style>
