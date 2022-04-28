# QQ登录-检索已绑定账号

::: tip 目标
这一小节，我们的目标是使用 openid 在小兔仙应用的数据库中检索站点账号
:::

::: warning 步骤

1. 创建用于检测绑定了QQ的小兔仙账号的API方法
2. 在获取到用户openid以后检测是否存在绑定了该QQ的小兔仙账号
3. 为检测账号的过程添加 loading 状态
:::

::: info 体验

* **Step.1：创建用于检测绑定了QQ的小兔仙账号的API方法**

```js
/**
 * 在小兔仙应用中检索绑定该QQ号的账号
 * @param unionId QQ用户唯一标识
 * @param source 注册来源
 * @return {AxiosPromise}
 */
export const findAccountByQQOpenid = ({ unionId, source = 1 }) => {
  return request.post("/login/social", { unionId, source });
};

```

* **Step.2：在获取到用户openid以后检测是否存在绑定了该QQ的小兔仙账号**

```js
const { loginSuccessful } = useLoginAfter();
  // 获取用户唯一标识
    Login.getMe((openid) => {
    // 检测QQ绑定账户
    findAccountByQQOpenid({ unionId: openid })
    // 检测到账号, 走 then 回调函数, 执行登录成功之后的逻辑
    .then(loginSuccessful)
    // 没有检测到账号, 走 catch 回调函数
    .catch(() => {
      });
    });
```

* **Step.3：为检测账号的过程添加 loading 状态**

  检测过程中隐藏 LoginCallback 组件中的选项卡, 显示 loading 状态, 如果账号检测成功, 直接跳转, 检测失败, 显示选项卡中的内容

  ```js
  
  // 先假设该用户没有使用 QQ 绑定了账号
  const isBind = ref(false)
  const loading = ref(false);
  if (Login.check()) {
    loading.value = true;
    // 检测QQ绑定账户
    findAccountByQQOpenid({ unionId: openid })
        // 检测到账号, 走 then 回调函数, 执行登录成功之后的逻辑
      .then((data) => {
         isBind.value = true;
         loading.value = false;
         loginSuccess(data);
         })
      // 没有检测到账号, 走 catch 回调函数
      .catch(() => {
        // 用户没有使用QQ绑定账号
        isBind.value = false;
        loading.value = false;
      });
  }
  
  ```

  ```html
  <!-- 加载提示 -->
  <section class="container" v-if="loading">
    <div class="unbind">
      <div class="loading"></div>
    </div>
  </section>
  <section class="container" v-if="!loading && !isBind">原有组件内容</section>
  ```

 ```css
  .container {
    padding: 25px 0;
    position: relative;
    height: 730px;
  }
  .container .unbind {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 25px 0;
    z-index: 99;
  }
  .container .unbind .loading {
    height: 100%;
    background: #fff url(@/assets/images/load.gif) no-repeat center / 100px 100px;
  }
 ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
