# hk-dialog组件

> hk-dialog组件基于el-dialog组件

## 用法

默认用法

<template>
  <hk-dialog-demo></hk-dialog-demo>
</template>


```js
hk-dialog(
  v-model="dialogVisible"
  title="弹框"
)
```

## 配置

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| value/v-model | 弹框显示/隐藏 | Boolean | — | true | false |
| title | 标题 | String | — | — | — |
