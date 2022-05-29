// 学习一下 vue3中如何使用jsx来描述组件
// 不提倡在vue中使用jsx
// 该项目争取覆盖vue3的全部知识点

// 因为 如果使用jsx 那么以前所学习的vue的东西基本上就白学了
import { defineComponent,ref } from "vue";


export default defineComponent({
  props: {
    active: {
      type: String
    }
  },
  emits: ["update"],
  setup(prop, {emit, slots}){
// 测试数据绑定

console.log(prop)
const person = ref({ name: "张三", age: 20 });
// 测试事件绑定
const onClickHandler = () => {
  person.value.name = "李四";
  emit("update",124324324)
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


    return ()=>(
      <>
        <div>{person.value.name}-{person.value.age}</div>
        <button onClick={onClickHandler}>按钮</button>

        <p className={activeClassName}>阿斯顿发射点犯得上</p>

        <ul>
         {
           hobbies.map(item=>(
             <li>{item}</li>
           ))
         }
        </ul>

         {paragraph}

         <input type="text" style={{border: "1px solid #ccc"}} value={text.value} onInput={onChangedHandler}  />
         <p onClick={onTextChanged}>{text.value}</p>
      </>
     
    )
  }
})


