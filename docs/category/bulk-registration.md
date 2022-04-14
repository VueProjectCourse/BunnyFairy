# 批量注册组件

::: tip 目标
这一小节，我们的目标是实现组件自动批量注册功能 (自动批量注册 library 文件夹下的组件)
:::

::: warning 步骤

1. 获取public目录下所有的文件信息
2. 遍历拿到所有的文件名称
3. 全局批量注册components下所有组件
:::

::: info 体验

  ```js
  //获取public目录下所有的文件信息
  const modulesFiles = import.meta.globEager('./**/*.vue')
  console.log(modulesFiles);
  const pathList = []
  //遍历拿到所有的文件名称
  for (const path in modulesFiles) {
      pathList.push(path)
  }
  //全局批量注册components下所有组件
  export default {
      
      install(app) {
          pathList.forEach((path) => {
              const component = modulesFiles[path].default
              console.log(component.name)
              app.component(component.name, component)
          })
      }
  }
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
