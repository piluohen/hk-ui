# hk-echarts组件

> hk-echarts组件依赖于echarts。由于配置复杂多变，无法抽取公用组件，建议项目中根据需求定制业务组件。

## 折线图

<template>
  <hk-echarts-line></hk-echarts-line>
</template>

## 柱状图

<template>
  <hk-echarts-bar></hk-echarts-bar>
</template>

## 饼图

<template>
  <hk-echarts-pie></hk-echarts-pie>
</template>

```js
  hk-echats(:options="options" :width="width" :height="height")
```

## 配置

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| options | 配置项 | Object | - | true | - |
| width | 宽度 | String |  | false | 100% |
| height | 高度 | String |  | false | 100% |
| clearable | 清空画布 | Boolean |  | false | true |

其他配置项参考echats官网
