# 项目样式配置

::: tip 目标

这一小节，我们的目标是实现项目中的重置样式及应用级公共样式
:::

::: warning 步骤

1. 下载第三方样式重置库
2. 创建公共样式文件
3. 在`main.js` 文件中引入重置样式及公共样式
:::

::: info 体验

* **Step.1：下载第三方样式重置库**

```bash
npm install normalize.css
```

* **Step.2：创建公共样式文件**

```css
* {
  box-sizing: border-box;
 }

html {
   height: 100%;
   font-size: 14px;
 }
body {
  height: 100%;
  color: #333;
  min-width: 1240px;
  font: 1em/1.4 'Microsoft Yahei', 'PingFang SC', 'Avenir', 'Segoe UI', 'Hiragino Sans GB', 'STHeiti', 'Microsoft Sans Serif', 'WenQuanYi Micro Hei', sans-serif
}

ul,
h1,
h3,
h4,
p,
dl,
dd {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #333;
  outline: none;
}

i {
  font-style: normal;
}

input[type="text"],
input[type="search"],
input[type="password"], 
input[type="checkbox"]{
  padding: 0;
  outline: none;
  border: none;
  -webkit-appearance: none;
}

input[type="text"]::placeholder,
input[type="search"]::placeholder,
input[type="password"]::placeholder, 
input[type="checkbox"]::placeholder{
  color: #ccc;
}

img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}

ul {
  list-style: none;
}

#app {
  background: #f5f5f5;
  user-select: none;
}

.container {
  width: 1240px;
  margin: 0 auto;
  position: relative;
}

.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.ellipsis-2 {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.fl {
  float: left;
}
.fr {
 float: right;
}

.clearfix:after {
  content: ".";
  display: block;
  visibility: hidden;
  height: 0;
  line-height: 0;
  clear: both;
}
```

* **Step.3：在`main.js` 文件中引入重置样式及公共样式**

```js
import "normalize.css"
import "./assets/styles/base.css"
```

:::

::: danger 总结

* 【重点】
  1. 下载第三方样式重置库
  2. 创建公共样式文件
  3. 在`main.js` 文件中引入重置样式及公共样式
* 【难点】
* 【注意点】
:::
