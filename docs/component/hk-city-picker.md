# hk-city-picker组件

> hk-city-picker组件依赖于el-casader级联组件，默认写入省市区行政code数据。

## 默认用法

<template>
  <hk-city-picker-demo1></hk-city-picker-demo1>
</template>

```js
  hk-city-picker(v-model="city")
```

## 多选

<template>
  <hk-city-picker-demo2></hk-city-picker-demo2>
</template>

> el-casader组件的多选配置是放在props里的，hk-city-picker支持外层配置

```js
  hk-city-picker(v-model="code" multiple collapse-tags)
```

## 可搜索

<template>
  <hk-city-picker-demo3></hk-city-picker-demo3>
</template>

```js
  hk-city-picker(v-model="code" filterable)
```

## 自定义数据

<template>
  <hk-city-picker-demo4></hk-city-picker-demo4>
</template>

```js
  hk-city-picker(
    v-model="city"
    :options="options"
    :props="props"
  )
```

## 配置

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| value/v-model | 选中项绑定值 | - |  | true | - |
| options | 数据 | Array | - | false | 本地省市区json |
| props | 配置选项 | Object |  | false | json文件的value和label值 |
| clearable | 可清除 | Boolean |  | false | true |
| multiple | 多选 | Boolean |  | false | false |
| placeholder | 输入框占位文本 | String |  | false | 请选择 |
| size | 尺寸 | String | medium/small/mini | false |  |
| disabled | 是否禁用 | Boolean |  | false | false |
| show-all-levels | 是否显示完整路径 | Boolean |  | false | true |
| collapse-tags | 多选模式是否折叠Tag | Boolean |  | false | false |
| separator | 选项分隔符 | String |  |  | '/' |
| filterable | 是否可搜索选项 | Boolean |  |  |  |

| 事件名称 | 说明 |	回调参数 |
| -- |:----: | --- |
| change |	当选中节点变化时触发 |	选中节点的值 |
| expand-change |	当展开节点发生变化时触发 |	各父级选项值组成的数组 |
| blur |	当失去焦点时触发 |	(event: Event) |
| focus |	当获得焦点时触发 |	(event: Event) |
| visible-change |	下拉框出现/隐藏时触发 |	出现则为 true，隐藏则为 false |
| remove-tag |	在多选模式下，移除Tag时触发 |	移除的Tag对应的节点的值 |

其他配置项参考Element组件Casader级联选择器
