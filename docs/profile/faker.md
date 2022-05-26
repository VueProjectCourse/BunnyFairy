# Faker假数据

::: tip Object
这一小节，我们的目标是能够使用 faker.js 生成虚假数据
:::

::: warning Path

1. 下载 faker.js
2. 使用 faker.js 生成一条数据
3. 使用 faker.js 生成多条数据
:::

::: info Experience

* **Step.1：下载 faker.js**

```bash
npm install faker@5.5.3 @types/faker@5.5.9 
```

* **Step.2：使用 faker.js 生成一条数据**

```js
import faker from "faker";

faker.locale = "zh_CN";

ctx.json({
  name: faker.name.firstName(),
  avatar: faker.internet.avatar(),
  phone: faker.phone.phoneNumber(),
  cityName: faker.address.cityName(),
  email: faker.internet.email(),
})
```

* **Step.3：使用 faker.js 生成多条数据**

```js
Array.from(new Set([1, 2]))

console.log(
  Array.from({ length: 2 }, () => {
    return Math.random();
  })
);

function makeArray(length, generator) {
  return Array.from({ length }, generator);
}
```

```js
ctx.json(
  makeArray(faker.datatype.number(20), () => ({
    name: faker.name.firstName(),
    avatar: faker.internet.avatar(),
    phone: faker.phone.phoneNumber(),
    cityName: faker.address.cityName(),
    email: faker.internet.email(),
  }))
)
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
