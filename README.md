
# 前端主题切换方案(react+antd)
![3bbb9a50a68a39fcae1be405aeeb5c20.png](en-resource://database/516:0)

## 安装
下载项目，进入项目目录，执行
``` npm i  or  yarn ```
``` npm run start  or  yarn start ```
## 项目目录
```bash
src
├─App.css
├─App.js                          // 项目布局、路由
├─App.test.js
├─index.css
├─index.js
├─logo.svg
├─setupTests.js
├─pages
|   ├─link
|   |  ├─index.js                  // link方式切换主题
|   |  └themeSwitcher.js           // 切换方法原理
|   ├─cssVarsPonyfill
|   |        ├─index.js            // cssVarsPonyfill方式自定义切换主题
|   |        ├─style.css
|   |        ├─theme.js
|   |        └themeSwitcher.js     // 切换方法原理
|   ├─cssVarible
|   |     └index.js                // cssVarible方式切换主题
```
## 主要介绍三种方式切换主题
### link
### cssVarible
### cssVarsPonyfill

