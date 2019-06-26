# hk-date-picker 时间选择组件

时间选择组件type类型：
<font color="red">year/month/date/dates/week/datetime/datetimerange/daterange/monthrange</font>

## 用法

<hk-date-picker-demo></hk-date-picker-demo>

```scss

<template lang="pug">
.hk-date-picker-demo
  hk-date-picker(
    v-model="value1"
    type="daterange"
    value-format="timestamp"
    unlink-panels
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :picker-options="pickerOptions"
  )
</template>

<script>
export default {
  name: 'hk-date-picker-demo',
  data () {
    return {
      value1: [],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      }
    }
  }
}
</script>

```

## Api

该处只列出与el-date-pick差异的地方，其余参考element-ui：[DatePicker](https://element.eleme.cn/#/zh-CN/component/date-picker)
[DateTimePicker](https://element.eleme.cn/#/zh-CN/component/datetime-picker)

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| v-model/value | 值 | String \| Date \| Number \| Array |  | 是 |  |
| type | 类型 | String | year/month/date/dates/week/datetime/datetimerange/daterange/monthrange | 否 | date |
| size | 尺寸 | String | large, small, mini | 否 | small |
| default-time | 默认时间 | String \| Array | 00:00:00 | 否 | 00:00:00, [00:00:00, 00:00:00] |
| value-format | 格式化时间返回值 | String \| Date \| Number \| Array |  | 否 | timestamp |

## Events

| 事件 | 描述 | 参数 |
| -- |:----: | :--: |
| change | value改变时间 | 新值 |

## 注意事项：

1. 使用日期范围选择（daterange/datetimerange）的类型时，固定default-time为 [00:00:00, 23:59:59]
2. 使用week 的类型时，vue-format必须重置为空，否则无法显示