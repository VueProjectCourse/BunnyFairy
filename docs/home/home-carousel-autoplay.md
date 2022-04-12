# 轮播图自动轮播

::: tip 目标
这一小节，我们的目标是实现轮播图的自动轮播效果
:::

::: warning 步骤

1. 接收轮播图外部传递的props并设置默认值
2. 创建开启自动轮播的方法
3. 创建关闭自动轮播的方法
4. 在调用轮播图组件的时候传递是否自动轮播
:::

::: info 体验

* **Step.1：接收轮播图外部传递的props并设置默认值**

```js
const props = defineProps({
  carousels: {
    type: Array
  },
  auto: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 3000,
  },
})
```

* **Step.2：创建开启自动轮播的方法**

```js
// 用于存储定时器
const timer = ref(null);
// 自动轮播
const autoPlay = () => {
  // 判断调用者是否开启了自动轮播
  // 判断是否有轮播图数据
  if (auto && carousels.length > 1) {
    // 开启
    timer.value = setInterval(toggle, duration);
  }
};
// 组件挂载完成后试图开启自动轮播
onMounted(autoPlay);
```

```html
<div class="xtx-carousel" @mouseleave="autoPlay"></div>
```

* **Step.3：创建关闭自动轮播的方法**

```js
// 停止自动轮播
const stopPlay = () => {
  console.log('停止定时器')
  clearInterval(timer.value);
};
// 组件卸载之后停止自动轮播
onUnmounted(stopPlay);
```

```html
<div class="xtx-carousel" @mouseenter="stopPlay" @mouseleave="autoPlay"></div>
```

* **Step.4：在调用轮播图组件的时候传递是否自动轮播**

```html
<Carousel v-if="carousels" :carousels="carousels" :autoPlay="true" />
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
