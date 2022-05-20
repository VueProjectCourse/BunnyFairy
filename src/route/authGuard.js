import { useUserStore } from "../stores/userStore";
import { storeToRefs } from "pinia";
// 路由前置守卫的回调函数
export default (to, from, next) => {
  // 声明一个 数组 来判断 将要去的页面是否是必须登陆的页面
  // 指明需要登陆的路由地址
  const requiredLogin = ["checkout", "member"];
  const { profile } = storeToRefs(useUserStore());
  // 判断是否是必须登陆的页面 如果是
  // console.log(to.path.split("/"));
  // console.log(requiredLogin.includes(to.path.split("/")));
  // 判断是否是需要登陆的页面

  if (requiredLogin.includes(to.path.split("/")[1])) {
    // console.log("是需要登陆的页面");
    // 判断是否登陆 如果登录了 就放行
    if (profile.value.token) {
      next();
    } else {
      // 如果没有登录 跳转到登陆页面
      next({ path: "/login", query: { redirectURL: to.fullPath } });
    }
  } else {
    // 否则放行
    next();
  }
};
