### countup 组件

#### 默认用法

---
<template>
  <demo-countup/>
</template>

```html
<template>
  <hk-countup
    :startVal="0"
    :endVal="700"
    :duration="2000"
  ></hk-countup>
</template>

```

#### 配置

| 参数 | 描述 | 类型 | 必须 | 默认值 |
| -- |:----: | :--: | :--: | -- |
| startVal | 开始值 | Number | false | 0 |
| endVal | 结束值 | Number | true | 0 |
| duration | 动画持续时间 | Number | false | 2000(ms) |
