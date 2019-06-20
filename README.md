# hk-ui

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

## 项目地址

- 测试地址： https://hy.hekr.me/hk-ui-test/web/index.html
- 正式地址： https://hy.hekr.me/hk-ui/web/index.html

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
