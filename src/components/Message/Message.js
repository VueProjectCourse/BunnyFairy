import MessageCom from "./Message.vue";
import { createVNode, render } from "vue";

// 创建组件渲染的目标容器
const container = document.createElement("div");
document.body.appendChild(container);

// 声明定时器变量
let timer = null;

// 用于渲染组件的方法
export default ({ type, text }) => {
  // 1.将单文件组件转换为虚拟节点对象
  const vNode = createVNode(MessageCom, { type, text });
  // 2. 将虚拟节点对象渲染到真实DOM中
  render(vNode, container);

  // 3. 清除定时器
  clearTimeout(timer);

  // 4. 延时3秒 销毁组件
  timer = setTimeout(() => {
    vNode.component.proxy.show = false;
    // 重置DOM对象， 清除vnode属性
    container._vnode = null;
  }, 3000);
};
