<template lang="pug">
.hk-map
  .map(ref="map", :style="{height}" title="地址所在位置")
  .input-address(v-if="showInput") 关键词：
    input(id="keyword" name="keyword" type="text" onfocus='this.value=""')
</template>

<script>
import load from './../hk-editor/dynamicLoadScript'
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
    latitude: {
      type: Number
    },
    height: {
      type: String,
      default: '300px'
    },
    longitude: {
      type: Number
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
        return [this.longitude, this.latitude]
      }
      return undefined
    }
  },
  data () {
    return {
      markerClickValue: null
    }
  },
  mounted () {
    load(mapCDN, (err) => {
      if (err) {
        this.$message.error(err.message)
        return
      }
      this.map = new AMap.Map(this.$refs.map, {
        resizeEnable: true,
        center: this.lnglat,
        zoom: 13
      })
      this.setCenterMap()
    })
  },
  watch: {
    lnglat () {
      if (this.lnglat) this.setCenter(this.lnglat)
    }
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
      this.setCenter(this.lnglat)
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
        this.map.setCenter(lnglat)
      })
    },
    handleSearch (detailedAddress) {
      if (this.disabled || !this.geocoder) return
      this.geocoder.getLocation(detailedAddress, (status, result) => {
        if (status === 'complete' && result.info === 'OK') {
          const geocodes = result.geocodes[0]
          if (geocodes) this.map.setCenter(geocodes.location)
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
    padding: 5px;
    position: absolute;
    z-index: 999;
    left: 10px;
    top: 50px;
  }
}
</style>
