import XtxConfirm from "./Confirm.vue";
// 2. 从 vue中导出两个方法
import { createVNode, render } from "vue";

// 3. 创建 装 confirm组件的 容器
const container = document.createElement("div");
document.body.appendChild(container);

// 4. 导出并渲染组件
export default ({ title = "温馨提示", content }) => {
  return new Promise((resolve, reject) => {
    const onCancelButtonClickHandler = () => {
      // 执行离场动画
      vNode.el.classList.remove("fade");
      vNode.el.children[0].classList.remove("fade");
      reject();
      setTimeout(() => {
        render(null, container);
      }, 400);
    };
    const onSureButtonClickHandler = () => {
      resolve();
      render(null, container);
    };

    const vNode = createVNode(XtxConfirm, {
      title,
      content,
      onSureButtonClick: onSureButtonClickHandler,
      onCancelButtonClick: onCancelButtonClickHandler,
    });

    // 通过 render 把虚拟dom 变成真实dom 添加到容器中去
    render(vNode, container);

    // 执行入场动画
    setTimeout(() => {
      vNode.el.classList.add("fade");
      vNode.el.children[0].classList.add("fade");
    }, 400);
  });
};
