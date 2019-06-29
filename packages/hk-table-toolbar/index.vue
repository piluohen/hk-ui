<template lang="pug">
el-row.hk-table-toolbar
  el-col.hk-table-toolbar-title(:span="8")
    .maintitle {{ title }}
    .subtitle
      div
        slot(name="subtitle")
      span {{ subtitle }}
  el-col.hk-table-toolbar-btns(:span="16")
    slot
</template>

<script>
export default {
  name: 'hk-table-toolbar',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.hk-table-toolbar {
  padding: 20px 0;
  display: flex;
  align-items: center;

  .maintitle {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    font-weight: 550;
    color: #172434;
  }
  .subtitle {
    color: #889093;
    font-size: 12px;
  }

  &-btns {
    text-align: right;
  }
}
</style>
