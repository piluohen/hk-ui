# hk-city-picker组件

## 用法

默认用法

<template>
  <demo-city-picker></demo-city-picker>
</template>


```html
  hk-city-picker(v-model="city")
```

## 配置

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| value/v-model | 选中项绑定值 | - |  | true | - |
| options | 数据 | Array | - | false | 本地省市区json |
| props | 配置选项 | Object |  | false | json文件的value和label值 |

其他配置项参考Element组件Casader级联选择器
