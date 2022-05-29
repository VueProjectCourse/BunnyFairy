import { setupWorker } from "msw";
import { handlers } from "./handlers";

// 启动拦截的方法
const worker = setupWorker(...handlers);

export default worker;
