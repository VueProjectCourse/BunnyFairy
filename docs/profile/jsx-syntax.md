# 在 vue 中使用 JSX

::: tip Object
这一小节，我们的目标是 掌握如何在 Vue 中使用 JSX 语法
:::

::: warning Path

1. 数据绑定
2. 事件绑定
3. 类名绑定
4. 遍历语法
5. 双向数据绑定
:::

::: info Experience

示例:

```html
<script>
import { ref } from "vue";
import LearnJSXChild from "@/test/LearnJSXChild";

export default {
  name: "LearnJSX",
  components: { LearnJSXChild },
  setup() {
    // 测试数据绑定
    const person = ref({ name: "张三", age: 20 });
    // 测试事件绑定
    const onClickHandler = () => {
      person.value.name = "李四";
    };
    // 测试类名绑定
    const activeClassName = "active";
    // 测试遍历语法
    const hobbies = ["足球", "篮球", "橄榄球"];
    // 测试 JSX
    const paragraph = <p>i am a paragraph</p>;
    // 测试双向数据绑定 (input 绑定的数据)
    const text = ref("");
    // 测试双向数据绑定 ( html -> js)
    const onChangedHandler = (event) => {
      text.value = event.target.value;
    };
    // 测试双向数据绑定 ( js -> html)
    const onTextChanged = () => {
      text.value = "hello i am another text";
    };
    return function () {
      return (
        <>
          <span onClick={onClickHandler}>{person.value.name}</span>
          <span className={activeClassName}>{person.value.age}</span>
          <ul>
            {hobbies.map((hobby) => (
              <li>{hobby}</li>
            ))}
          </ul>
          {paragraph}
          {/* 测试 this 指向 */}
          <button
            onClick={() => this.$message({ type: "success", text: "success" })}
          >
            show message
          </button>
          <input type="text" value={text.value} onInput={onChangedHandler} />
          <div>{text.value}</div>
          <button onClick={onTextChanged}>change text</button>
          <LearnJSXChild onClickHandler={onClickHandler} msg={person.value}>
            我是LearnJSXChild组件标记中间的内容
          </LearnJSXChild>
        </>
      );
    };
  },
};
</script>
```

```html
<script>
export default {
  name: "LearnJSXChild",
  props: ["msg", "onClickHandler"],
  setup(props) {
    return function () {
      return (
        <>
          <div>我是LearnJSXChild组件</div>
          <div>
            {props.msg.name} {props.msg.age}
          </div>
          <button onClick={props.onClickHandler}>button</button>
          <div>{this.$slots.default()}</div>
        </>
      );
    };
  },
};
</script>
```

:::
