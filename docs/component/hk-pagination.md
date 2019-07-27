# hk-pagination 分页组件

## 用法


<template>
  <hk-pagination-demo/>
</template>

```pug
<template lang="pug">
.doc-pagination
  .item
    .label 正常显示
    hk-pagination
  .item
    .label 自定义size
     hk-pagination(:size="250")
  .item
    .label 触发事件
     hk-pagination(@change="handleChange")
  .item
    p 回调参数：{{ params }}
</template>

<script>
export default {
  name: 'doc-pagination',
  data () {
    return {
      params: {}
    }
  },
  methods: {
    handleChange (val) {
      this.params = val
    }
  }
}
</script>
<style lang="scss">
.doc-pagination {
  display: flex;
  .item {
    padding-left: 20px;
  }
}
</style>

```

## 配置

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| total | 总数 | Number |  | false | 0 |
| page | 页码 | Number |  | false | 0 |
| small | 是否为小型分页 | Boolean |  | false | false |
| size | 每页数据量 | Number |  | false | 10 |
| prevText | 上一页文案 | String |  | false |  |
| nextText | 下一页文案 | String |  | false |  |

## 事件

| 事件 | 描述 | 参数 |
| -- |:----: | :--: |
| change | 改变分页时触发 | page,size |