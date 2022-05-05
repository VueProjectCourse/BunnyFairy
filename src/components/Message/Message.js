// 1. 导入 message.vue
import MessageCom from "./Message.vue";
// 2. 通过从vue中导出两个方法
// createVNode创建虚拟dom
// render 把虚拟dom转成真实dom
import { createVNode, render } from "vue";

// 3. 创建 装 Message组件的容器
const container = document.createElement("div");
document.body.appendChild(container);
// 4. 定义一个定时器
let timer = null;

// 5. 导出并渲染组件
export default ({ type, text }) => {
  // 5.1 通过 createVNode 获取虚拟dom
  const vNode = createVNode(MessageCom, { type, text });
  // 5.2 通过 render 把虚拟dom 变成真实dom 添加到容器中去
  render(vNode, container);
  // 5.3 清除定时器
  clearTimeout(timer);
  // 5.4 声明定时器
  timer = setTimeout(() => {
    // 5.4.1 让该组件的isShow属性变成false （打印vNode可以看到isShow属性）
    vNode.component.proxy.isShow = false;
    // 5.4.2 销毁虚拟dom
    container._vnode = null;
  }, 2000);
};
