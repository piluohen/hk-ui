# hk-preview 预览图片

## 用法

<hk-preview-demo></hk-preview-demo>

## Api

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| v-model | 是否显示预览 | Boolean | true \| false  | 是 | false |
| list | 图片列表 | Array |  | 是 | [{url: ''}] |
| imgIndex | 当前展示图片索引 | Number |  | 是 | 0 |
| isInfinite | 是否开启无限循环模式 | Boolean | true \| false  | 否 | true |