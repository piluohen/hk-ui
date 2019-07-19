# hk-dialog 弹框组件

> hk-dialog组件基于el-dialog组件

## 用法

默认用法

<template>
  <hk-dialog-demo></hk-dialog-demo>
</template>

> 弹框分为两种模式，预览和编辑。预览模式下可点击蒙层取消弹框，编辑模式只能点击取消或确定按钮取消弹框。

```js
hk-dialog(
  v-model="dialogVisible"
  title="弹框"
  :preview="true"
  @confirm="confirm"
  @cancel="cancel"
)
```

## 配置

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| value/v-model | 弹框显示/隐藏 | Boolean | - | true | false |
| title | 标题 | String | - | - | - |
| autoclose | 点击确定后是否关闭弹框 | Boolean | - | - | true |
| loading | 加载中 | Boolean | - | - | false |
| showCancel | 是否显示取消按钮 | Boolean | - | - | true |
| showConfirm | 是否显示确定按钮，预览模式默认去掉确定按钮 | Boolean | - | - | true |
| preview | 是否为预览模式 | Boolean | - | - | false |
| width | 弹框宽度 | String | - | - | '500px' |

| 事件名称 | 说明 |	回调参数 |
| -- |:----: | --- |
| confirm |	点击确定按钮触发 | - |
| cancel |	点击取消按钮触发 | - |
| open |	打开的回调 | - |
| opened |	打开动画结束时的回调 | - |
| close |	关闭的回调 | - |
| closed |	关闭动画结束时的回调 | - |
