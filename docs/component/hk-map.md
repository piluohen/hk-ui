# hk-map 地图组件

## 普通用法

<template>
  <hk-ui-map/>
</template>

<!-- ## 可配置地图

<template>
  <hk-ui-map.1/>
</template> -->

```html
<template lang="pug">
.hk-ui
  .code 选中内容： {{data}}
  hk-button(@click="disabled=!disabled" v-if="!disabled"  type="danger") 禁用选择定位点
  hk-button(@click="disabled=!disabled" v-else  type="success") 解禁选择定位点
  hk-map(:latitude="latitude" :longitude="longitude" :disabled="disabled" height="300px" :showInput="showInput" @select="select")
</template>
<script>
  export default {
    name: 'hk-ui-map',
    data() {
      return {
        data: '',
        latitude: null,
        longitude: null,
        disabled: false,
        showInput: true
      }
    },
    methods: {
      select(data) {
        this.data = data
      }
    }
  }
</script>
```

## Attributes

| 参数      | 说明       | 类型    | 可选值     | 默认值   |
| --------- | ---------- | ------- | ---------- | -------- |
| latitude  | 纬度       | Number  | --         | —        |
| longitude | 经度       | Number  | --         | —        |
| disabled  | 禁选       | Boolean | true/false | false    |
| showInput | 输入框     | Boolean | true/false | true     |
| label     | 查询关键字 | String  | -          | 关键词： |

## Events

| 事件名称 | 说明     | 回调参数                                          |
| -------- | :------- | ------------------------------------------------- |
| select   | 回调函数 | {towncode，formattedAddress，longitude，latitude} |
