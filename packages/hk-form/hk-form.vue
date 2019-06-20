<template lang="pug">
iViewForm.iView-form(
  ref="form"
  lib="elememt"
  v-bind="$attrs"
  :notCtrl="notCtrl"
  :formList="formList"
  :enterSubmit="enterSubmit"
  :options="currOption"
  :disabled="disabled"
  @submit="handleSubmit"
)
</template>
<style lang="scss">
.iView-form {
  .el-form {
    .el-form-item__label {
      line-height: 16px;
    }
    .el-form-item {
      margin-bottom: 30px;
    }
  }
}
</style>

<script>
import iViewForm from 'iview-form'
export default {
  name: 'hk-form',
  components: {
    iViewForm
  },
  props: {
    enterSubmit: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    formList: {
      type: Array,
      default: () => {
        return []
      }
    },
    notCtrl: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currOption () {
      let options = {
        size: 'small'
      }
      return Object.assign(options, this.options)
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('submit', ...arguments)
    },
    getFormBykey () {
      return this.$refs.form.getFormBykey(...arguments)
    },
    reset () {
      return this.$refs.form.clear()
    },
    getForm () {
      const form = this.$refs.form.getForm()
      return this.formList.reduce((values, { key }) => {
        values[key] = form[key]
        return values
      }, {})
    },
    setForm () {
      return this.$refs.form.setForm(...arguments)
    },
    submit () {
      return this.$refs.form.submit()
    },
    validate () {
      return new Promise((resolve, reject) => {
        const err = new Error('valid fail')
        if (!this.$refs || !this.$refs.form || !this.$refs.form.$refs || !this.$refs.form.$refs.form) {
          return reject(err)
        }
        this.$refs.form.$refs.form.validate(valid => {
          if (valid) resolve(valid)
          else reject(err)
        })
      })
    }
  }
}
</script>
