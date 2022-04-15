import lazy from "../directive/lazy"
//获取public目录下所有的文件信息
const modulesFiles = import.meta.globEager('./**/*.vue')

const pathList = []
//遍历拿到所有的文件名称
for (const path in modulesFiles) {
	pathList.push(path)
}
//全局批量注册components下所有组件
export default {

	install(app) {
		app.directive("lazy", lazy)
		pathList.forEach((path) => {
			const component = modulesFiles[path].default
			app.component(component.name, component)
		})
	}
}