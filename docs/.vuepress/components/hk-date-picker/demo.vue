<template lang="pug">
.hk-date-picker-demo
  el-row(:gutter="20")
    el-col(:span="12")
      p 默认
      hk-date-picker(
        v-model="value1"
        type="datetimerange"
        value-format="yyyy-MM-DD HH:mm:ss"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
      )
      p 值：{{ value1 }}
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
<style lang="scss">
.hk-date-picker-demo {
  margin: 20px 0;
}
</style>
