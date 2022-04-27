# 退出登录

::: tip 目标
这一小节，我们的目标是实现用户退出登录功能
:::

::: warning 步骤

1. 为退出登录按钮添加点击事件, 事件触发后执行退出登录方法
2. 执行退出操作, 清除用户信息, 跳转到登录页
:::

::: info 体验

* **Step.1：为退出登录按钮添加点击事件, 事件触发后执行退出登录方法**

```html
<li><a @click="logout" href="javascript:;">退出登录</a></li>
```

* **Step.2：执行退出操作, 清除用户信息, 跳转到登录页**

```js
export default {
  name: 'AppTopNav',
  setup () {
    const store = useStore()
    const router = useRouter()
    // 退出登录
    // 1. 清除 store 中的 user/profile (localStorage 中的也会跟着清除)
    // 2. 跳转到登录页
    const logout = () => {
      store.commit('user/setUser', {})
      router.push('/login')
    }
    return { logout }
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
