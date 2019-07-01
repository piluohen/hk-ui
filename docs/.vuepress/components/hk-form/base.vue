<template lang="pug">
  .hk-form-base
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
  name: 'hk-form-base',
  data () {
    return {
      model: {
        checkbox: []
      },
      formItems: formList
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
.hk-form-base {
  margin-top: 20px;
}
</style>
