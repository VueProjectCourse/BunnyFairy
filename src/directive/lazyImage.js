import defaultImg from "../assets/images/200.png";

export default {
  // 在绑定元素的父组件
  // 及他自己的所有子节点都 挂载 完成后调用
  mounted(el, binding) {
    var observer = new IntersectionObserver(([{ isIntersecting }]) => {
      // 监听 是否到了可视区 到了再去赋值
      // console.log(isIntersecting)
      if (isIntersecting) {
        // 停止监听
        observer.unobserve(el);
        // 动态加载图片 把指令中的值赋值给src
        el.src = binding.value;

        // el 是一个图片
        // 如果图片载入发生错误, 那么就用默认图片去代替
        el.onerror = () => {
          el.src = defaultImg;
        };
      }

      // el.src = binding.value
    });
    observer.observe(el);
  },
};
