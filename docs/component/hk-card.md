# hk-card 卡片组件

## 用法

直接引入组件，自定义内容即可

```html

<template lang="pug">
  hk-card(title="title" :chart="true" desc="subTitle")

</template>


```

## Api

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| title | 卡片标题 | String |  | 否 |  |
| chart | 卡片左侧标识 | Boolean | true \| false  | 否 | false |
| desc | 卡片副标题 | String |  | 否 |  |