# hk-progress 进度条组件

> hk-progress组件依赖于el-progress组件，在el-progress组件基础上拓展了轨道颜色配置。

## 用法

默认用法，percentage为必传

<template>
  <hk-progress-demo></hk-progress-demo>
</template>


```js
hk-progress(
  percentage="30"
  type="circle"
  color="red"
  strokeColor="yellow"
)
```

## 配置

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| percentage | 百分比 | Number | 0-100 | true | 0 |
| type | 进度条类型 | String | line/circle/dashboard | — | line |
| duration | 动画持续时间 | Number |  | — | 2000(ms) |
| stroke-width |	进度条的宽度，单位 px |	Number |  | — |	6 |
| text-inside |	进度条显示文字内置在进度条内（只在 type=line 时可用） | Boolean |  | — |	false |
| status |	进度条当前状态 |	String |	success/exception/warning |	— | — |
| color |	进度条背景色（会覆盖 status 状态颜色） |	string/function/array |	—	 | — | '' |
| width |	环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用） |	number | — | — |	126 |
| show-text |	是否显示进度条文字内容 |	boolean |	— | — |	true |
| strokeColor | 轨道背景色 | String | — | — | — |
