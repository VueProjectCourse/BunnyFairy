# 二级分类-加载更多数据

::: tip 目标
这一小节，我们的目标是 实现商品列表下拉滚动到底部加载更多数据逻辑
:::

::: warning 步骤

1. 在无限列表加载组件(InfiniteLoading)中，编写布局代码
2. 在无限列表加载组件中，编写样式代码
3. 在二级分类页面组件中调用无限列表加载组件, 查看静态效果
4. 接收 `loading` 控制正在加载UI状态的显示与隐藏、接收 `finished` 控制无更多数据UI状态的显示与隐藏
5. 监听元素是否进入可视区, 当元素进入可视区以后触发自定义事件通知父组件
6. 声明 `loading` 和 `finished` 用于控制无限加载组件内部的UI状态
7. 创建加载更多的方法
8. 实现加载更多数据逻辑
:::

::: info 体验

* **Step.1：在无限列表加载组件(InfiniteLoading)中，编写布局代码**

```html
<template>
  <div class="xtx-infinite-loading">
    <div class="loading">
      <span class="img"></span>
      <span class="text">正在加载...</span>
    </div>
    <div class="none">
      <span class="img"></span>
      <span class="text">亲，没有更多了</span>
    </div>
  </div>
</template>
```

* **Step.2：在无限列表加载组件中，编写样式代码**

```css
.xtx-infinite-loading .loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
.xtx-infinite-loading .loading .img {
  width: 50px;
  height: 50px;
  background: url(@/assets/images/load.gif) center no-repeat;
  background-size: contain;
}
.xtx-infinite-loading .loading .text {
  color: #999;
  font-size: 16px;
}
.xtx-infinite-loading .none {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
.xtx-infinite-loading .none .img {
  width: 200px;
  height: 134px;
  background: url(@/assets/images/none.png) center no-repeat;
  background-size: contain;
}
.xtx-infinite-loading .none .text {
  color: #999;
  font-size: 16px;
}
```

* **Step.3：在二级分类页面组件中调用无限列表加载组件, 查看静态效果**

```html
<div class="goods-list">
  <InfiniteLoading />
</div>
```

* **Step.4：接收 `loading` 控制正在加载UI状态的显示与隐藏、接收 `finished` 控制无更多数据UI状态的显示与隐藏**

```js
const props = defineProps({
  // 是否正在加载
  loading: {
    type: Boolean,
    default: false,
  },
  //是否已经加载全部数据
  finished: {
    type: Boolean,
    default: false,
  },
});
```

```html
<template>
  <div class="loading" v-if="loading"></div>
  <div class="none" v-if="finished"></div>
</template>
```

* **Step.5：监听元素是否进入可视区, 当元素进入可视区以后触发自定义事件通知父组件**

```js
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";

const emits = defineEmits(["infinite"]);

// 被监听元素
const target = ref(null);
//执行监听元素的操作
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  // 如果元素进入了可视区
  if (isIntersecting) {
    // 如果数据没有在载入中且数据没加载完
    if (!props.loading && !props.finished) {
      emits("infinite");
    }
  }
});
```

```html
<template>
  <div class="xtx-infinite-loading" ref="target">
  </div>
</template>
```

* **Step.6：声明 `loading` 和 `finished` 用于控制无限加载组件内部的UI状态**

```js
// 用于标识加载状态
export const loading = ref(false);

//用于标识是否全部数据都已加载完毕
export const finished = ref(false);
```

```html
<InfiniteLoading
  :loading="loading"
  :finished="finished"
/>
```

```js
onMounted(() => {
  loading.value = true;
  const route = useRoute();
  reqParams.value.categoryId = route.params.id;
  setFilterGoodsList();
});


// 调用获取商品数据的方法
export const setFilterGoodsList = () => {
  // 数据状态

  // 修改状态的方法
  readGoodsReq(reqParams.value).then(({ data: res, status: status }) => {
    if (status === 200) {
      loading.value = false;
      // 如果当前是第一页，直接赋值
    }
  });
};
```

* **Step.7：创建加载更多的方法**

```js
// 加载更多
export const loadMore = () => {
  // 当前页加一
  reqParams.value = {
    ...reqParams.value,
    page: reqParams.value.page + 1,
  };
};
```

```html
<InfiniteLoading
  :loading="loading"
  :finished="finished"
  @infinite="loadMore"
/>
```

* **Step.8：实现加载更多数据逻辑**

```js
// 调用获取商品数据的方法
export const setFilterGoodsList = () => {
  // 数据状态

  // 修改状态的方法
  readGoodsReq(reqParams.value).then(({ data: res, status: status }) => {
    if (status === 200) {
     
      // 如果当前是第一页，直接赋值
      if (reqParams.value.page == 1) {
        filterGoodsList.value = res.result;
        // 当页码重置为1时, 重置 finished
        finished.value = false;
      } else {
        // 如果当前不是第一页，做商品列表数据的累加
        filterGoodsList.value = {
          ...res.result,
          items: [...filterGoodsList.value.items, ...res.result.items],
        };
      }
      loading.value = false;
      // 如果当前页面已经是最后一页了
      if (reqParams.value.page === res.result.pages || res.result.pages === 0) {
        finished.value = true;
      }
    }
  });
};
```

:::
