# hk-player 直播播放器组件

## 默认直播播放器

<template>
  <hk-ui-player/>
</template>

```html
<template lang="pug">
.hk-ui
  hk-player(
    :source="source"
    :showClear="true"
  )
</template>

<script>
  export default {
    name: 'hk-play',
    data() {
      return {
        // RTMP地址 和 HLS地址
        source: [
          'rtmp://rtmp01open.ys7.com/openlive/d2737acdc4b7452face7513eee8a4f7b.hd',
          'https://open.ys7.com/view/h5/d2737acdc4b7452face7513eee8a4f7b'
        ]
      }
    }
  }
</script>
```

## API

| 参数      | 说明                 | 类型         | 可选值       | 默认值 |
| --------- | -------------------- | ------------ | ------------ | ------ |
| source    | 资源链接             | Array/String | rtmp / hls   | —      |
| active    | 是否激活             | Boolean      | true / false | false  |
| showClear | 是否显示显示清理按钮 | Boolean      | true / false | false  |
| heigth    | 高度                 | String       | -            | '400'  |
