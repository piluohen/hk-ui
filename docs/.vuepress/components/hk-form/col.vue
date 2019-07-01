<template lang="pug">
  .hk-form-col
    el-row(:gutter="20")
      el-col(:span="18")
        hk-form(
          ref="form"
          v-model="model"
          :items="formItems"
          :inline="false"
          label-width="100px"
          label-position="right"
        )
        hk-button(type="normal" @click="handleClear") 清除校验
        hk-button(type="normal" @click="handleReset") 重置表单
      el-col(:span="6")
        p.code {{ model }}
</template>

<script>
import formList from './formList'
export default {
  name: 'hk-form-col',
  data () {
    return {
      model: {
        name: '',
        switch: true,
        type: '',
        radio: '',
        checkbox: [],
        number: '0',
        cascader: [],
        slider: 0,
        time: '',
        rate: 4,
        color: '',
        desc: ''
      },
      formItems: JSON.parse(JSON.stringify(formList)).map(item => {
        item.col = 12
        return item
      })
    }
  },
  methods: {
    handleClear () {
      this.$refs.form.clearValidate()
    },
    handleReset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>
<style lang="scss">
.hk-form-col {
  margin-top: 20px;
}
</style>
