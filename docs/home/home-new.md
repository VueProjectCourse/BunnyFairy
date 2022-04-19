# 实现新鲜好物

::: tip 目标
这一小节，我们的目标是实现新鲜好物组件数据渲染
:::

::: warning 步骤

1. 创建用于获取新鲜好物的 API 函数
2. 创建新鲜好物组件并在首页组件中进行调用
3. 在新鲜好物组件中获取数据
4. 渲染新鲜好物数据到模板中
:::

::: info 体验

* **Step.1：创建用于获取新鲜好物的 API 函数**

  ```js
  // homeAPI
  /**
   * 获取新鲜好物
   * @param {number} limit 限制获取的数据条数
   * @return {Promise<{result: Array<newGoods>}>}
   */
  export function readNewGoods(limit = 4) {
    return request.get("/home/new", {
      params: {
        limit
      },
    });
  }
  ```

* **Step.2：创建新鲜好物组件并在首页组件中进行调用**

  ```html
  <template>
    <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <template v-slot:right>
        <More />
      </template>
      <template v-slot:default>
        <ul class="goods-list">
          <li>
            <RouterLink to="/">
              <img
                src="https://yanxuan-item.nosdn.127.net/7ef0f743fe590efc6c5eda075c632aa0.jpg"
                alt=""
              />
              <p class="name ellipsis">户外休闲防滑徒步鞋轻量速干G-GRIP大底</p>
              <p class="price">¥339.00</p>
            </RouterLink>
          </li>
        </ul>
      </template>
    </HomePanel>
  </template>
  ```

  ```css
  @import "@/assets/styles/variable.css";

  .goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;
  }

  .goods-list li {
    width: 306px;
    height: 406px;
    background-color: #f0f9f4;
    transition: all .5s;
  }

  .goods-list li:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }

  .goods-list li img {
    width: 306px;
    height: 306px;
  }

  .goods-list li p {
    font-size: 22px;
    padding: 12px 30px 0 30px;
    text-align: center;
  }

  .goods-list li .price {
    color: var(--price-color);
  }
  ```

* **Step.3：在新鲜好物组件中获取数据**

  ```js
  // useHomeNew.js
  import { ref } from 'vue'
  import { readNewGoods } from "../../api/homeAPI"

  export const useNewGoods = () => {
    const goods = ref(null);
    readNewGoods().then(({ data: res, status: status }) => {
      if (status === 200) {
        goods.value = res.result;
      }
    });

    return { goods }
  }

  ```

  ```js
  <script setup>
  import HomePanel from '../HomePanel/HomePanel.vue';
  import { useNewGoods } from "./useHomeNew"
  const { goods } = useNewGoods();
  </script>
  ```

* **Step.4：渲染新鲜好物数据到模板中**

  ```html
  <template>
    <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱" >
      <template v-slot:right>
        <More />
      </template>
      <template v-slot:default>
        <ul class="goods-list" v-if="goods">
          <li v-for="item in goods" :key="item.id">
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
