import lazy from "../directive/lazyImage";
//获取该文件index.js所在目录下的 下一层目录下的vue文件
const modulesFiles = import.meta.globEager("./**/*.vue");
// 用来存储所有组件的地址
const pathList = [];
//遍历拿到所有的文件名称
for (const path in modulesFiles) {
  pathList.push(path);
}
//全局批量注册components下所有组件
export default {
  install(app) {
    app.directive("lazy", lazy);
    pathList.forEach((path) => {
      const name = path.split("/")[2].split(".")[0];
      const component = modulesFiles[path].default;
      app.component(name, component);
    });
  },
};
