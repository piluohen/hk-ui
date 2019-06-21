
# hk-table-toolbar 表格工具栏组件

## 用法

配合hk-table使用，右侧表格操作去支持slot,自定义内容即可

<template>
  <demo-table-toolbar/>
</template>

```pug
<template lang="pug">
  hk-table-toolbar(title="列表标题" subtitle="描述信息")
    el-button(size="small") 操作按钮1
    el-button(size="small") 操作按钮2

</template>

```

## 配置

| 参数 | 描述 | 类型 | 可选值 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | :--: | -- |
| title | 标题 | String |  | false |  |
| subtitle | 描述信息 | String |  | false |  |
