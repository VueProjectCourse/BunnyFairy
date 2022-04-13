# 实现面板骨架效果

::: tip 目标

这一小节，我们的目标是实现面板骨架效果，示例如下:
![panel](./images/103.png)
:::

::: warning 步骤

1. 创建面板骨架屏组件(`PanelSkeleton`)
2. 在新鲜好物组件中添加骨架屏效果
3. 为骨架屏组件添加离场动画
4. 在人气组件中添加骨架屏效果
:::

::: info 体验

* **Step.1：创建面板骨架屏组件(`PanelSkeleton`)**

```html
<template>
  <div class="home-skeleton">
    <div class="item" v-for="i in 4" :key="i" :style="{ backgroundColor: bg }">
      <MenuSkeleton bg="#e4e4e4" width="306px" height="306px" animated="scroll" />
      <MenuSkeleton bg="#e4e4e4" width="160px" height="24px" animated="scroll" />
      <MenuSkeleton bg="#e4e4e4" width="120px" height="24px" animated="scroll" />
    </div>
  </div>
</template>
```

```css
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
}

.home-skeleton .item {
  width: 306px;
}

.home-skeleton .xtx-skeleton~.xtx-skeleton {
  display: block;
  margin: 16px auto 0;
}
```

```js
defineProps({
  bg: {
    type: String,
    default: "#fff",
  },
})
```

* **Step.2：在新鲜好物组件中添加骨架屏效果**

```html
<HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱" ref="target">
    <template v-slot:right>
      <More />
    </template>
    <template v-slot:default>
      <ul class="goods-list" v-if="result">
        <li v-for="item in result" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>
        <PanelSkeleton v-if="!result"></PanelSkeleton>
    </template>
  </HomePanel>
```

* **Step.3：为骨架屏组件添加离场动画**

```html
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱" ref="target">
    <template v-slot:right>
      <More />
    </template>
    <template v-slot:default>
      <ul class="goods-list" v-if="result">
        <li v-for="item in result" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>
      <Transition name="fade">
        <PanelSkeleton v-if="!result"></PanelSkeleton>
      </Transition>
    </template>
  </HomePanel>
```

```css
/* assets/style/base.css*/
.fade-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transition: opacity 0.5s 0.2s;
  z-index: 1;
}
.fade-leave-to {
  opacity: 0;
}
```

* **Step.4：在人气组件中添加骨架屏效果**

```html
<template>
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱" ref="target">
    <template #right>
      <More />
    </template>
    <template #default>
      <ul class="goods-list" v-if="result">
        <li v-for="item in result" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>
      <Transition name="fade">
        <PanelSkeleton v-if="!result"></PanelSkeleton>
      </Transition>
    </template>
  </HomePanel>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
