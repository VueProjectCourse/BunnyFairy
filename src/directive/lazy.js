// 导入默认产品图片
import defaultImage from "@/assets/images/default.png";

export default {
  // 在绑定元素的父组件及他自己的所有子节点都 挂载 完成后调用
  mounted(el, binding) {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      // 判断元素是否进入可视区
      if (isIntersecting) {
        // 停止监听元素
        observer.unobserve(el);
        // 动态加载图片
        el.src = binding.value;
        // 当图片加载出错时
        el.onerror = () => {
          // 显示默认产品图片
          el.src = defaultImage;
        };
      }
    });
    // 指定要监听的元素
    observer.observe(el);
  },
  // 绑定元素的父组件卸载之后调用
  unmounted() {},
};
