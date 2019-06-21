# hk-progress组件

## 用法

默认用法，endVal 为必传

<template>
  <demo-progress></demo-progress>
</template>


```html
<template>
  <hk-progress
    :percentage="30"
  ></hk-progress>
</template>

```

## 配置

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| percentage | 开始值 | Number |  | false | 0 |
| endVal | 结束值 | Number |  | true | 0 |
| duration | 动画持续时间 | Number |  | false | 2000(ms) |
