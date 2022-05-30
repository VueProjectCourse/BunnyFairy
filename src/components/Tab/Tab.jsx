import { defineComponent } from "vue";
import {useVModel} from "@vueuse/core"
export default defineComponent({
  props: ["active"],
  emits: ["update:active"],
  setup(props, {slots,emit}){
     // 获取插槽内容
     const defaults = slots.default();
     // 用于存储选项卡标题
     const titles = [];
     // 用于存储选项卡内容
     const contents = [];


     // 收集选项卡标题和内容
    defaults.forEach((item) => {
      if (typeof item.type === "symbol") {
        item.children.forEach((child) => {
          if (child.props.title) {
            titles.push(child.props.title)
          }else {
            contents.push(child.props.content)
          }
        });
      }
    });


  // 选项卡索引
  const index = useVModel(props, "active", emit);

  const onTabTitleClickHandler = (i)=>{
    index.value = i;
  }

    return () => (<div className="xtx-tabs">
      <nav>
        {
          titles.map((item, i)=>(
            <a
            className={i === index.value ? "active" : ""}
            href="javascript:"
            onClick={() => onTabTitleClickHandler(i)}
            >
              {item}
            </a>
          ))
        }
      </nav>
      {contents.map((item, i) => (
            <div className={i === index.value ? "active" : ""}>{item}</div>
          ))}
    </div>);
  }
});
