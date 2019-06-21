<template lang="pug">
  iViewForm(
    ref="form"
    lib="elememt"
    v-bind="$attrs"
    :notCtrl="notCtrl"
    :formList="formList"
    :options="currOption"
    :maxlength="50"
    :disabled="disabled"
    @submit="handleSubmit"
  )
</template>
<script>
import iViewForm from 'iview-form'
export default {
  name: 'hk-form',
  components: {
    iViewForm
  },
  props: {
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
      return this.$refs.form.reset()
    },
    clear () {
      return this.$refs.form.clear()
    },
    getForm () {
      return this.$refs.form.getForm()
    },
    setForm () {
      return this.$refs.form.setForm(...arguments)
    },
    submit () {
      return this.$refs.form.submit()
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">

</style>
