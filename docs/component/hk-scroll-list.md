# hk-scroll-list 滚动组件

## 用法

<template>
  <demo-scroll-list></demo-scroll-list>
</template>

```html

<template lang="pug">
.demo-scroll-list
  hk-scroll-list(
    ref="scroll"
    :data="list"
    :count="count"
    :itemHeight="60"
    :scrollCount="1"
    :speed="300"
    :delay="2000"
    @click="handleClick"
  )
    template(slot-scope="{ item }")
      .alert-item
        .title {{ item.title }}
        .desc {{ item.desc }}
</template>

<script>
export default {
  name: 'demo-scroll-list',
  data () {
    return {
      count: 4
    }
  },
  computed: {
    list () {
      let arr = []
      for (let i = 1; i < 10; i++) {
        arr.push({
          title: `第${i}个标题`,
          desc: `这是第${i}个描述呀呀呀呀呀`
        })
      }
      return arr
    }
  },
  mounted () {
    this.$refs.scroll.reset()
  },
  methods: {
    handleClick (data) {
      consle.log(data)
      this.$message('你点击了滚动条目')
    }
  }
}
</script>

```

## 配置

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| data | 滚动数据 | Array |  | true |  |
| itemHeight | 滚动子项高度 | Number |  | false | 60 |
| count | 展示子项数量 | Number |  | false | 6 |
| scrollCount | 滚动子项数量 | Number |  | false | 1 |
| speed | 子项滚动时间 | Number |  | false | 300(ms) |
| delay | 滚动间隔时间 | Number |  | false | 2000(ms) |

## Slot

```bash
# 支持slot，可以自定义slot子项的内容，如
# item为data的子项

template(slot-scope="{ item }")
  .alert-item
    .title {{ item.title }}
    .desc {{ item.desc }}

```
## 事件

| 事件 | 描述 | 参数 |
| -- |:----: | :--: |
| click | 子项点击事件 | 子项数据 |
