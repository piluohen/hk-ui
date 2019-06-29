<template lang="pug">
.table-toolbar-demo
  hk-table-toolbar(title="列表标题1" subtitle="描述信息")
    el-button(size="small" type="primary") 操作按钮1
    el-button(size="small" type="primary") 操作按钮2

  hk-table-toolbar(title="列表标题2")
    el-tag(slot="subtitle") slot参数
    el-button(size="small" type="primary") 操作按钮1
    el-button(size="small" type="primary") 操作按钮2
</template>
