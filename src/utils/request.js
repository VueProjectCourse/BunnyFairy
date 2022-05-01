// 导入 Axios
import axios from "axios";

// 使用Axios创建新的axios实例 并导出
const instance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net/",
  // baseURL: "https://apipc-xiaotuxian-front.itheima.net/",
  timeout: 10000,
});

export default instance;
