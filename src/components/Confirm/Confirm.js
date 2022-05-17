// 1. 导入 Confirm.vue
import ConfirmCom from "./Confirm.vue";

// 2. 从vue中导出两个方法 createVNode, render
import { createVNode, render } from "vue";

// 3. 创建 装 Confirm组件的容器
const container = document.createElement("div");
document.body.appendChild(container);

// 4. 导出组件
export default ({ title, content }) => {
  // resolve 可以让promise变成成功状态
  // reject 可以让promise变成失败状态
  return new Promise(function (resolve, reject) {
    // ... some code
    const onSureButtonClickHandler = function () {
      // 调用传来的方法
      // onSureButtonClick();
      resolve();
      // 点击确定
      render(null, container);
    };

    const onCancelButtonClickHandler = function () {
      // 调用传来的方法
      // onCancelButtonClick();
      reject();
      // 点击确定

      // xtx-confirm 这个div添加类名
      vNode.el.classList.remove("fade");
      // 给wrapper添加类名
      vNode.el.children[0].classList.remove("fade");
      // 执行入场动画
      setTimeout(() => {
        render(null, container);
      }, 400);
    };

    // 4.1 通过 createVNode 把真实的html页面转换成 虚拟DOM
    const vNode = createVNode(ConfirmCom, {
      title,
      content,
      onSureButtonClick: onSureButtonClickHandler,
      onCancelButtonClick: onCancelButtonClickHandler,
    });

    // console.log(vNode); // 虚拟dam就是使用js来描述UI的一种形式
    render(vNode, container);

    // 执行入场动画
    setTimeout(() => {
      // xtx-confirm 这个div添加类名
      vNode.el.classList.add("fade");
      // 给wrapper添加类名
      vNode.el.children[0].classList.add("fade");
    }, 400);
  });
};
