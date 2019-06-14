# hk-editor 富文本组件

## 富文本组件

<template>
  <hk-editor/>
</template>

```html
<template lang="pug">
.edit
  hk-editor(v-model="value")
</template>
<script>
  export default {
    name: 'hk-editor',
    data() {
      return {
        value: '<h1>H1标题</h1>'
      }
    }
  }
</script>
```

## 配置
