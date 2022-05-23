// 导入 Axios
import axios from "axios";
import { useUserStore } from "../stores/userStore";
import { storeToRefs } from "pinia";
// 使用Axios创建新的axios实例 并导出
const instance = axios.create({
  // 在开发中，接口是有多种的 地址有好多个
  // 开发环境
  // 测试环境
  // 线上环境
  baseURL: "https://apipc-xiaotuxian-front.itheima.net/",
  // baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net/",
  // timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const { profile } = storeToRefs(useUserStore());
    // console.log(profile.value.token);
    if (profile.value.token) {
      config.headers.Authorization = `Bearer ${profile.value.token}`;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么

    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么

    return response;
  },
  async function (error) {
    // 对响应错误做点什么

    return Promise.reject(error);
  }
);

export default instance;
