<script>
// 在 vue 中导入 h 方法, 用于创建元素
import { defineComponent, h } from 'vue'
export default defineComponent({
  render() {
    // 获取组件默认插槽的内容，获取BreadItem组件
    const items = this.$slots.default();
    // 存储子组件内容，因为icon需要动态生成
    const children = [];
    // 遍历插槽内容
    items.forEach((item, index) => {
      // 将当前便利插槽内容存储起来
      children.push(item);
      // 如果当前不是最后一项，动态生成icon
      if (index < items.length - 1) {
        children.push(h("i", {className: "iconfont icon-angle-right"}))
      }
    })
    // 创建面包屑最外层元素
    return h('div', {className: "xtx-bread"}, children)
  }
})

</script>


<style scoped>
@import "@/assets/styles/variable.css";

.xtx-bread {
  display: flex;
  padding: 25px 10px;
}

.xtx-bread-item a {
  color: #666;
  transition: all 0.4s;
}

.xtx-bread-item a:hover {
  color: var(--primary-color);
}

.xtx-bread i {
  font-size: 12px;
  margin-left: 5px;
  margin-right: 5px;
  line-height: 22px;
}
</style>