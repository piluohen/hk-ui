# hk-countup 动态数字组件

## 用法

默认用法，endVal 为必传

<template>
  <hk-countup-demo/>
</template>


```html
<template>
  <hk-countup
    :startVal="0"
    :endVal="700"
    :duration="2000"
  ></hk-countup>
</template>

```

## Api

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| startVal | 开始值 | Number |  | false | 0 |
| endVal | 结束值 | Number |  | true | 0 |
| duration | 动画持续时间 | Number |  | false | 2000(ms) |
