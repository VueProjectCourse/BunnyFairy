# 封装网络请求

::: tip 目标
这一小节，我们的目标是实现项目中网络请求插件的二次封装
:::

::: warning 步骤

1. 在`src/utils/Axios/`新建`index.js`
2. 在`src/utils/Axios/`新建`axios.setConfig.js`
3. 在`src/utils/Axios/`新建`axios.handlerError.js`
4. 在`src/utils/Axios/`新建`axios.handleResponse.js`
:::

::: info 体验

* **Step.1：在`src/utils/Axios/`新建`index.js`**

  ```js
  import axios from "axios";
  import setConfig from "./axios.setConfig.js";
  import handleResponse from "./axios.handleResponse.js";
  import handleError from "./axios.handleError.js";
  // import store from '@/store/index'
  // import router from '@/router/index.js'
  import { Message } from "element-ui";
  const showTip = (tip) => {
    Message({
      type: "warning",
      message: tip || "请求出错啦",
      duration: 1500,
    });
  };

  /**
   * intactRequest是只在axios基础上更改了请求配置。
   * 而request是基于axios创建的实例，实例只有常见的数据请求方法，没有axios.isCancel/ axios.CancelToken等方法，
   * 也就是没有**取消请求**和**批量请求**的方法。
   * 所以如果需要在实例中调用取消某个请求的方法（例如取消上传），请用intactRequest。
   */
  let intactRequest = setConfig(axios);
  let request = setConfig(intactRequest.create());

  // 请求中的api
  let pendingPool = new Map();

  /**
   * 请求拦截
   */
  const requestInterceptorId = request.interceptors.request.use(
    (config) => {
      // 对于异常的响应也需要在pendingPool中将其删除，但响应拦截器中的异常响应有些获取不到请求信息，这里将其保存在实例上
      request.config = Object.assign({}, config);
      // 在发送请求之前做些什么
      // config.headers.common['cookie-id'] = cookieId
      config.cancelToken = new axios.CancelToken((cancelFn) => {
        pendingPool.has(config.url)
          ? cancelFn(`${config.url}请求重复`)
          : pendingPool.set(config.url, { cancelFn, global: config.global });
      });
      return config;
    },
    (err) => {
      console.log("请求拦截err:", err);
      // 对请求错误做些什么
      return Promise.reject(err);
    }
  );
  /**
   * 响应拦截
   */
  const responseInterceptorId = request.interceptors.response.use(
    (response) => {
      const { config } = response;
      pendingPool.delete(config.url);

      // console.log('响应response suc:', response)
      // showTip(err.message);
      return Promise.resolve(handleResponse(response));
    },
    // 对异常响应处理
    (err) => {
      const { config } = request;
      if (!axios.isCancel(err)) pendingPool.delete(config.url);

      if (!err) return Promise.reject(err);

      if (err.response) {
        err = handleError(err);
      }
      // 没有response(没有状态码)的情况
      // eg: 超时；断网；请求重复被取消；主动取消请求；
      else {
        // 错误信息err传入isCancel方法，可以判断请求是否被取消
        if (axios.isCancel(err)) {
          throw new axios.Cancel(
            err.message || `请求'${request.config.url}'被取消`
          );
        } else if (err.stack && err.stack.includes("timeout")) {
          err.message = "请求超时!";
        } else {
          err.message = "连接服务器失败!";
        }
      }

      showTip(err.message);
      return Promise.reject(err);
    }
  );

  // 移除全局的请求拦截器
  function removeRequestInterceptor() {
    request.interceptors.request.eject(requestInterceptorId);
  }

  // 移除全局的响应拦截器
  function removeResponseInterceptor() {
    request.interceptors.response.eject(responseInterceptorId);
  }

  /**
   * 清除所有pending状态的请求
   * @param {Array} whiteList 白名单，里面的请求不会被取消
   * 返回值 被取消了的api请求
   */
  function clearPendingPool(whiteList = []) {
    if (!pendingPool.size) return;

    // const pendingUrlList = [...pendingPool.keys()].filter((url) => !whiteList.includes(url))
    const pendingUrlList = Array.from(pendingPool.keys()).filter(
      (url) => !whiteList.includes(url)
    );
    if (!pendingUrlList.length) return;

    pendingUrlList.forEach((pendingUrl) => {
      // 清除掉所有非全局的pending状态下的请求
      if (!pendingPool.get(pendingUrl).global) {
        pendingPool.get(pendingUrl).cancelFn();
        pendingPool.delete(pendingUrl);
      }
    });

    return pendingUrlList;
  }

  request.removeRequestInterceptor = removeRequestInterceptor;
  request.removeResponseInterceptor = removeResponseInterceptor;
  request.clearPendingPool = clearPendingPool;

  export { intactRequest, request };

  ```

* **Step.2：在`src/utils/Axios/`新建`axios.setConfig.js`**

  ```js
  /**
   * @param {axios} axios实例
   * @param {config} 自定义配置对象，可覆盖掉默认的自定义配置
   */
   export default (axios, config = {}) => {
   
    const defaultConfig = {
        baseURL: process.env.VUE_APP_BASEURL,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'custom-defined-header-key': 'custom-defined-header-value',
            // 自定义请求头：对所有请求方法生效
            common: {
              // '自定义key': '自定义值对所有方法'
            },
            // 自定义请求头：只对post方法生效
            post: {
              // 'post-custom-key': 'custom value: only for post method'
            },
            // 自定义请求头：只对get方法生效
            get: {
              // 'get-custom-key': 'custom value: only for get method'
            }
        }
    }
  
    Object.assign(axios.defaults, defaultConfig, config)
    return axios
  }
  ```

* **Step.3：在`src/utils/Axios/`新建`axios.handlerError.js`**

  ```js
  export default (err) => {
    const { response } = err;

    if (!response.status) {
      err.code = "";
      err.message = "有response但没有response.status的情况";
    }
    err.code = response.status;
    switch (response.status) {
      case 200:
        err.message = "错误响应也会有状态码为200的情况";
        break;
      case 400:
        err.message = "请求错误(400)";
        break;
      case 401:
        err.message = "未授权，请重新登录(401)";
        break;
      case 403:
        err.message = "拒绝访问(403)";
        break;
      case 404:
        err.message = "请求出错(404)";
        break;
      case 408:
        err.message = "请求超时(408)";
        break;
      case 500:
        err.message = "服务器错误(500)";
        break;
      case 501:
        err.message = "服务未实现(501)";
        break;
      case 502:
        err.message = "网络错误(502)";
        break;
      case 503:
        err.message = "服务不可用(503)";
        break;
      case 504:
        err.message = "网络超时(504)";
        break;
      case 505:
        err.message = "HTTP版本不受支持(505)";
        break;
      default:
        err.message = `连接出错，状态码：(${err.response.status})!`;
    }
    return err;
  };

  ```

* **Step.4：在`src/utils/Axios/`新建`axios.handleResponse.js`**

  ```js
  // 处理响应错误码
  export default (response) => {
    const status = response.status;
    // 如果http响应状态码response.status正常，则直接返回数据
    if ((status >= 200 && status <= 300) || status === 304) {
      return response;
    } else {
      const code = parseInt(response.data && response.data.code);
      // msg为服务端返回的错误信息，字段名自定义，此处以msg为例
      let message = (response.data || {}).msg;
  
      switch (code) {
        case 400:
          break;
        case 4001:
          if (process.server) return;
          message = message || "登录设备数量超出限制";
          break;
        case 403:
          message = message || "未登录";
          break;
        case 404:
          message = message || "请求地址错误";
          break;
        case 412:
          message = message || "未找到有效session";
          break;
        default:
          message = message || err.response.data.msg
          break;
      }
      return {
        code,
        message,
      };
    }
  };
  
  ```

:::
