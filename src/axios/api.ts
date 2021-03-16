import axios from 'axios';
import qs from 'qs';

const baseURL: any = import.meta.env.VITE_HOST1;

const instance = axios.create({
  baseURL,
  timeout: 5000, // request timeout
});

// 发起请求之前的拦截器
instance.interceptors.request.use(
  (config) => {
    // 如果有token 就携带tokon
    const token = window.localStorage.getItem('accessToken');
    if (token) {
      config.headers.common.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 请求服务器地址、依次向下写请求
const request = {
  // 测试
  test() {
    let url = `/server/info`;

    return new Promise((resolve, reject) => {
      instance
        .get(url)
        .then(
          (response) => {
            resolve(response.data);
          },
          (err) => {
            reject(err);
          }
        )
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default request;
