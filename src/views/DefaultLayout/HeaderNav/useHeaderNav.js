import { useCateStore } from "@/stores/cateStore"
import { storeToRefs } from "pinia"
const { cateList } = storeToRefs(useCateStore())
const cateStore = useCateStore();