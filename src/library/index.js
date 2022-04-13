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