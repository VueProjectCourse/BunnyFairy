<script>
import { defineComponent, h } from "vue"

export default defineComponent({
  props: ["path"],
  render() {
    // 获取组件的属性this.$props.属性名
    // 获取插槽内容 this.$slots.default()
    // console.log(this.$slots.default())
    const items = this.$slots.default(); // BreadItem数组
    const children = []; // 用来存储 渲染到h函数的第三个参数的
    items.forEach((ele, index) => {
      children.push(ele)
      // 如果是首页 > 电器 > 空调 不加
      if (index  < items.length -1) {
        children.push(h('i', {className: "iconfont icon-angle-right"}))
      }
    });
    // console.log(children)
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