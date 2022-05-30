# 封装Tabs组件

::: tip Object
这一小节，我们的目标是封装选项卡功能组件

:::

::: warning Path

1. 创建选项卡标题组件
2. 创建选项卡内容组件
3. 创建选项卡组件
4. 选项卡组件升级, 支持组件标题和组件内容的动态渲染
:::

::: info Experience

* **Step.1：创建选项卡标题组件**

```html
<!-- TabTitle 组件: 用于向 XtxTabs 组件传递选项卡标题 -->
<!-- TabTitle -->
<template>
  <slot />
</template>
```

* **Step.2：创建选项卡内容组件**

```html
<!-- TabContent -->
<!-- TabContent 组件: 用于向 XtxTabs 组件传递选项卡内容 -->
<template>
  <slot />
</template>
```

* **Step.3：创建选项卡组件**

Tabs 组件: 用于收集选项卡的标题和内容, 根据标题和内容渲染选项卡界面, 实现选项卡的切换逻辑

```html
<!-- 静态结构和样式 -->
<div className="xtx-tabs">
    <nav>
      <a href="javascript:">标题一</a>
    <a href="javascript:">标题二</a>
  </nav>
  <div>内容一</div>
  <div>内容二</div>
</div>

<style scoped>
/* tab组件 */
.xtx-tabs {
  background: #fff;
}
.xtx-tabs > nav {
  height: 60px;
  line-height: 60px;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
}
.xtx-tabs > nav > a {
  width: 110px;
  border-right: 1px solid #f5f5f5;
  text-align: center;
  font-size: 16px;
}
.xtx-tabs > nav > a.active {
  border-top: 2px solid #27BA9B;
  height: 60px;
  background: #fff;
  line-height: 56px;
}
.xtx-tabs > div {
  display: none;
}
.xtx-tabs > div.active {
  display: block;
}
</style>
```

* **Step.4：选项卡组件升级, 支持组件标题和组件内容的动态渲染**

```html
<!-- 测试调用代码 -->
<XtxTabs v-model:active="active">
  <XtxTabTitle v-for="item in tabsData" :key="item.title">{{item.title}}</XtxTabTitle>
  <XtxTabTitle>测试标题三</XtxTabTitle>
  <XtxTabContent v-for="item in tabsData" :key="item.content">{{item.content}}</XtxTabContent>
  <XtxTabContent>测试内容三</XtxTabContent>
</XtxTabs>
```

```js
const tabsData = ref([
  { title: "选项卡标题一", content: "选项卡内容一" },
  { title: "选项卡标题二", content: "选项卡内容二" },
]);
```

```js
import { defineComponent } from "vue";
import {useVModel} from "@vueuse/core"
export default defineComponent({
  props: ["active"],
  emits: ["update:active"],
  setup(props, {slots,emit}){
     // 获取插槽内容
     console.log(slots.default())
     const defaults = slots.default();
     // 用于存储选项卡标题
     const titles = [];
     // 用于存储选项卡内容
     const contents = [];


     // 收集选项卡标题和内容
    defaults.forEach((item) => {
      if (typeof item.type === "symbol") {
        item.children.forEach((child) => {
          if (child.props.title) {
            titles.push(child.props.title)
          }else {
            contents.push(child.props.content)
          }
        });
      }
    });


  // 选项卡索引
  const index = useVModel(props, "active", emit);

  const onTabTitleClickHandler = (i)=>{
    index.value = i;
  }

    return () => (<div className="xtx-tabs">
      <nav>
        {
          titles.map((item, i)=>(
            <a
            className={i === index.value ? "active" : ""}
            href="javascript:"
            onClick={() => onTabTitleClickHandler(i)}
            >
              {item}
            </a>
          ))
        }
      </nav>
      {contents.map((item, i) => (
            <div className={i === index.value ? "active" : ""}>{item}</div>
          ))}
    </div>);
  }
});

```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
