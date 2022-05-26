# 个人中心-我的收藏

::: tip Object
这一小节，我们的目标是使用模拟数据完成我的收藏数据渲染
:::

::: warning Path

1. 创建用于获取收藏数据的API函数
2. 在个人中心首页页面组件发送请求获取收藏数据
3. 拦截Ajax请求, 返回模拟数据
4. 使用模拟数据进行组件渲染

:::

::: info Experience

* **Step.1：创建用于获取收藏数据的API函数**

```js
// api/memberAPI.js
/**
 * 获取我的收藏
 * @param collectType 收藏类型，1为商品，2为专题，3为品牌
 * @param page 页码
 * @param pageSize 每页显示数据条数
 * @return {Promise}
 */
export function getCollection({ collectType = 1, page = 1, pageSize = 10 }) {
  return request("/member/collect", "get", { collectType, page, pageSize });
}
```

* **Step.2：在个人中心首页页面组件发送请求获取收藏数据**

```js
// views/member/home/MemberHomePage.vu
import { ref } from "vue";
import { getCollection } from "@/api/member";

export default {
  setup() {
    // 获取收藏数据
    const collection = useCollection();
    return { collection };
  },
};
function useCollection() {
  // 用于存储收藏数据
  const collection = ref(null);
  // 获取并存储收藏数据
  getCollection({pageSize: 4}).then((data) => (collection.value = data.result));
  // 返回收藏数据
  return collection;
}
```

* **Step.3：拦截Ajax请求, 返回模拟数据**

```js
// mocks/worker.js
import { rest } from "msw";
import faker from "faker";
import { baseURL } from "@/utils/request";

faker.locale = "zh_CN";

export default [
  rest.get(`${baseURL}member/collect`, (req, res, ctx) => {
    return res(
      ctx.json({
        msg: "成功",
        result: {
          counts: 50,
          page: req.url.searchParams.get("page"),
          pageSize: req.url.searchParams.get("pageSize"),
          pages: 0,
          items: makeArray(req.url.searchParams.get("pageSize"), () => ({
            id: faker.datatype.uuid(),
            name: faker.internet.userName(),
            desc: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${faker.datatype.number(
              { min: 1, max: 8 }
            )}.jpg`,
          })),
        },
      })
    );
  }),
];
function makeArray(length, generator) {
  return Array.from({ length }, generator);
}
```

* **Step.4：使用模拟数据进行组件渲染**

```js
<MemberHomePanel title="我的收藏" v-if="collection">
  <GoodsItem v-for="goods in collection.items" :key="goods.id" :goods="goods" />
</MemberHomePanel>
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
