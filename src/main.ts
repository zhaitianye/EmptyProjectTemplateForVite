import { createApp } from 'vue'
import App from './App.vue'

// 路由和数据仓库
import router from "./router";
import store from "./store";

// 全局引入vant样式-直接导入所有模块，以稍微高点的体积换取开发时间
import Vant from 'vant';
import 'vant/lib/index.css';

// 引入basess 移动端适配
import Basess from 'basess';
import 'basess/dist/basess.css';
Basess(375); // 设计稿宽度

// 挂载axios
import axios from 'axios'
import api from "./axios/api"

// 手机端测试组件
import VConsole from 'vconsole'

// 测试环境引入vconsole
if (import.meta.env.MODE === 'development') {
  // vconsole 会在浏览器提示拖动警告，正式服不会引入vconsole 可以忽略此警告
  new VConsole()
}

// 启动app
const app = createApp(App);

// 挂载全局
app.config.globalProperties.$http = axios;
app.config.globalProperties.$api = api;

app.use(router)
app.use(store)
app.use(Vant)
app.mount('#app')
