# 实现数据懒加载

::: tip 目标
这一小节，我们的目标是实现新鲜好物和人气推荐两个区块的数据懒加载功能,示例如下:
![lazy](./images/109.gif)

**数据懒加载**指的是用户初始访问页面时可视区以外的数据暂时不加载，当用户将该区域内容滚动到可视区以内再进行加载，此技术可提高页面加载速度，提高用户体验, 优先加载可视区中的数据, 让用户尽可能早的看到界面。
:::

::: warning 步骤

1. 监控目标元素是否进入可视区
2. 将数据懒加载逻辑封装起来, 方便复用
3. 在新鲜好物组件中应用数据懒加载
4. 在人气推荐组件中应用数据懒加载
:::

::: info 体验

* **Step.1：监控目标元素是否进入可视区**

  ```html
  <div ref="target"> Hello world</div>
  ```

  ```js
  import { ref } from 'vue'
  import { useIntersectionObserver } from '@vueuse/core'

  export default {
    setup() {
      // target 目标监听元素
      const target = ref(null)
      // 调用方法监听元素是否进入可视区
      // 调用 stop 方法可停止元素的监听
      const { stop } = useIntersectionObserver(
        // 目标监听元素
        target,
        // isIntersecting 布尔类型 true 元素进入可视区 false 元素离开可视区
        // observerElement 被监听元素
        ([{ isIntersecting }], observerElement) => {}
      )
      return { target }
    }
  }
  ```

* **Step.2：将数据懒加载逻辑封装起来, 方便复用**

  ```js
  /**
   * 监听元素进入可视区，进行数据加载
   * @param {*} apiFunction 用于获取数据的 接口方法
   */
  export const useLazyData = (apiFunction) => {
    const target = ref(null)
    const isVisible = ref(false)
    const result = ref(null);
    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        isVisible.value = isIntersecting
        // 元素进入可视区
        if (isVisible.value) {
          // 停止监听
          stop();
          // 获取数据
          apiFunction().then(({ data: res, status: status }) => {
            if (status === 200) {
              result.value = res.result;
            }
          });
        }
      }
    )
    return { target, result };
  }
  ```

* **Step.3：在新鲜好物组件中应用数据懒加载**

  ```html
  <script setup>
  import HomePanel from '../HomePanel/HomePanel.vue';
  // import { useNewGoods } from "./useHomeNew"
  // const { goods } = useNewGoods();
  import { useLazyData } from "./useHomeNew"
  import { readNewGoods } from "../../api/homeAPI"
  const {target, result  } = useLazyData(readNewGoods)
  </script>
  <template>
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
      </template>
    </HomePanel>
  </template>
  ```

* **Step.4：在人气推荐组件中应用数据懒加载**

  ```html
  <script setup>
  import HomePanel from '../HomePanel/HomePanel.vue';
  // import { useNewGoods } from "./useHomeNew"
  // const { goods } = useNewGoods();
  import { useLazyData } from "./useHomeNew"
  import { readNewGoods } from "../../api/homeAPI"
  const {target, result  } = useLazyData(readNewGoods)
  </script>
  <template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过" ref="target"></HomePanel>
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
