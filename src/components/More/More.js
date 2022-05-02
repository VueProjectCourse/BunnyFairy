import More from "@/components/More/More.vue"
export default {
  install(app) {
    // 配置此应用

    // 注册组件 app.component(组件名称, 组件的实现)
    app.component("More", More)
  }
}