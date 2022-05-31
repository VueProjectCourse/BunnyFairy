import { defineComponent,ref } from "vue";
import {useVModel} from "@vueuse/core"
// Tabs组件
export default defineComponent({
  props: {
    active:{
      type: Number,
      default: 0
    }
  },
  setup(props, {emit, slots}){
    // 用来存储 选项卡标题
    const titles = [];
    const contents = [];

    // console.log(slots.default())
    // comment 注释
    slots.default().forEach(item=>{
      // console.log(item.type.toString() === "Symbol(Fragment)")
      if ((item.type.toString() === "Symbol(Fragment)")&&item.children) {
        // console.log(item.children)
        item.children.forEach(subitem=>{
          if (subitem.props.title) {
            titles.push(subitem.props.title)
          }else {
            contents.push(subitem.props.content)
          }
        })
      }
    })
    const index = useVModel(props, "active", emit);

    const handlerChange = (i)=>{
      // console.log(i);
      index.value = i;
    }

    return ()=>(
      <div className="xtx-tabs">
        <nav>
         {
           titles.map((tagitem, i)=>( <a href="javascript:"  className={i === index.value ? "active" : ""} onClick={()=>handlerChange(i)}>{tagitem}</a>))
         }
        </nav>
        {
           contents.map((conitem, i)=>( <div className={i === index.value ? "active" : ""}>{conitem}</div>))
         }
      </div>
    )
  }
})


