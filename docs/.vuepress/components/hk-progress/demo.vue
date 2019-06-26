<template lang="pug">
.hk-progress-demo
  hk-progress(:percentage="percentage" :type="type" :color="color" :strokeColor="strokeColor")
  .buttons
    el-radio-group(
      v-model="type"
      size="small"
    )
      el-radio-button(label="line") 线形
      el-radio-button(label="circle") 环形
      el-radio-button(label="dashboard") 仪表盘
    el-button(size="small" @click="changePercentage") 改变随机值
    el-button(size="small" @click="changeColor") 改变颜色
    el-button(size="small" @click="changestrokeColor") 改变轨道颜色
</template>

<script>
export default {
  name: 'hk-progress-demo',
  data () {
    return {
      type: 'circle',
      percentage: 30,
      color: '',
      strokeColor: '',
      colors: ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive']
    }
  },
  methods: {
    changePercentage () {
      this.percentage = this.getRandom(0, 100)
    },
    changeColor () {
      this.color = this.colors[this.getRandom(0, 10)]
    },
    changestrokeColor () {
      this.strokeColor = this.colors[this.getRandom(0, 10)]
    },
    getRandom (min, max) {
      let range = max - min
      let rand = Math.random()
      return Math.floor(min + Math.round(rand * range))
    }
  }
}
</script>
<style lang="scss">
.hk-progress-demo
  .buttons {
    margin-top: 20px;
  }
  .el-button {
    margin-left: 20px;
  }
</style>
