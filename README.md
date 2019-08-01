<div align="center">
<h1>hk-ui</h1>
</div>

<div align="center">
  <a><img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a><img src="https://img.shields.io/badge/language-vue-42b983.svg" alt="Language"></a>
  <a ><img src="https://img.shields.io/badge/license-MIT-000000.svg" alt="Version"></a>
  <br>
    <a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu"></a>
  <a href="https://hy.hekr.me/hk-ui/web/index.html"><img src="https://img.shields.io/badge/hk_ui@V1.0-blue.svg" alt="hk-ui"></a>
</div>

## 构建命令

```bash
# 安装依赖
npm install

# 启动本地服务（默认test环境接口） localhost:8080
npm run dev

# 打包docs
npm run build

# 打包组件库
npm run lib
```

## 文档地址

- 地址： https://hy.hekr.me/hk-ui/web/index.html

## 项目目录

```bash
template
├─ docs
│    └─ .vuepress            # 配置、演示组件、静态资源
│    │    ├─ compnents        # 演示组件
│    │    |    └─ demo          # demo组件
│    │    ├─ public           # 静态资源
│    │    |    └─ images        # 图片文件
│    │    |    └─ scss          # 样式文件
│    │    ├─ config.js        # 配置文件
│    │    └─ enhanceApp       # 引入文件
|    ├─ compnent             # 组件md文件
|    └─ README              # 首页md
├─ packages
│    ├─ index.js             # 组件index.js
│    └─ hk-countup           # countup组件
├─ public
└─ package.json
```

## 源码地址

GitLab：[http://gitlab.hekr.me/front-end/hk-ui](http://gitlab.hekr.me/front-end/hk-ui)

## 版本说明

0.1.1
基础版本

0.1.2

0.1.3

0.1.4

0.1.5

1. 修复 hk-form 重置表单后可能会出现无法输入表单的 bug

0.1.6

1. 修复 hk-table 数据无法及时更新的情况

0.1.7

1. 优化 hk-city-picker

0.1.8

1. hk-city-picker 省市区获取修改为接口获取，优化性能问题

0.1.9

1. 修复 hk-city-picker 最高选择街道，无街道的区无法选择的bug

0.1.10

1. 修改 hk-city-picker 请求接口

0.1.11

1. 修复lodash高危漏洞
2. 优化hk-map地图搜索样式

0.1.12

1. 修复hk-table showOverflowTooltip 为false时不生效的bug
