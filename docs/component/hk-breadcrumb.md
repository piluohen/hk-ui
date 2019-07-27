# hk-breadcrumb 面包屑组件

## 用法

直接引入组件即可，根据当前路由生成面包屑

<template>
  <hk-breadcrumb-demo/>
</template>

```pug
<template lang="pug">
  hk-breadcrumb
</template>

```

## 配置

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| separator | 分隔符 | String |  | false | '/' |
| separatorClass | 图标分隔符 class | String |  | false |  |
