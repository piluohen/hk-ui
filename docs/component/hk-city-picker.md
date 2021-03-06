# hk-city-picker 省市区选择组件

> hk-city-picker组件依赖于el-casader级联组件。

## 默认用法

> 默认省市区单选，可选择任意等级，获取到的是最后一级的行政code

<template>
  <hk-city-picker-demo1></hk-city-picker-demo1>
</template>

```js
  hk-city-picker(v-model="code")
```

## 其他级别选择

> 可根据配置level变成省选择、省-市选择、省-市-区选择、省-市-区-街道选择。

<template>
  <hk-city-picker-demo2></hk-city-picker-demo2>
</template>

```js
  hk-city-picker(v-model="provinceCode" level="province")
  hk-city-picker(v-model="cityCode" level="city")
  hk-city-picker(v-model="districtCode" level="district")
  hk-city-picker(v-model="streetCode" level="street")
```

## 获取完整code

<template>
  <hk-city-picker-demo3></hk-city-picker-demo3>
</template>

```js
  hk-city-picker(v-model="code" emitPath)
```

## 多选

<template>
  <hk-city-picker-demo4></hk-city-picker-demo4>
</template>

```js
  hk-city-picker(v-model="code" multiple)
  hk-city-picker(v-model="code2" emitPath multiple)
```

## 可搜索

<template>
  <hk-city-picker-demo5></hk-city-picker-demo5>
</template>

```js
  hk-city-picker(v-model="code" filterable)
  hk-city-picker(v-model="code2" multiple filterable)
```

## API

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| value/v-model | 选中项绑定值 | String/Array |  | true | - |
| level | 等级 | String | province/city/district/street | - | district |
| emitPath | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 | Boolean | - | - | false |
| props | 配置选项 | Object |  | false | json文件的value和label值 |
| clearable | 可清除 | Boolean |  | false | true |
| multiple | 多选 | Boolean |  | false | false |
| placeholder | 输入框占位文本 | String |  | false | 请选择 |
| size | 尺寸 | String | medium/small/mini | false |  |
| disabled | 是否禁用 | Boolean |  | false | false |
| show-all-levels | 是否显示完整路径 | Boolean |  | false | true |
| collapse-tags | 多选模式是否折叠Tag | Boolean |  | false | false |
| separator | 选项分隔符 | String |  |  | '/' |
| filterable | 是否可搜索选项 | Boolean |  |  | false |
| defaultValue | 默认值，用于回显文案 | String |  | false |  |

## Slots

| 名称 | 说明 |
| -- | --- |
| - |	自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据 |
| empty | 无匹配选项时的内容 |

## Events

| 事件名称 | 说明 |	回调参数 |
| -- |:----: | --- |
| change |	当选中节点变化时触发 |	选中节点的值 |
| expand-change	| 当展开节点发生变化时触发 |	各父级选项值组成的数组 |
| blur |	当失去焦点时触发 |	(event: Event) |
| focus |	当获得焦点时触发 |	(event: Event) |
| visible-change |	下拉框出现/隐藏时触发 |	出现则为 true，隐藏则为 false |
| remove-tag |	在多选模式下，移除Tag时触发 |	移除的Tag对应的节点的值 |

tips: 更多配置项参考[el-casader文档](https://element.eleme.cn/2.10/#/zh-CN/component/cascader)
