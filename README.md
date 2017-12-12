# 初始化项目
```
npm init -y
```
# 安装依赖的模块
## 后端的模块
```
npm install body-parser connect-mongo ejs express express-session mongoose -S
```
## 生产依赖
```****************************************************************************************************************************************************************************************
npm install es6-promise history react react-dom react-redux react-router-dom react-router-redux react-swipe react-transition-group redux redux-thunk swipe-js-iso whatwg-fetch -S
```
## 开发依赖
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 css-loader file-loader html-webpack-plugin less less-loader style-loader webpack webpack-dev-server html-webpack-plugin -D
```
##资源文件

##目录规划
###container
容器组件 每个组件对应一个页面
###UI组件 components
放着可复用的组件
###store
放着redux仓库
