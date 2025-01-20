import { createApp } from 'vue'; // 导入 Vue
import App from './App.vue';     // 导入主组件
import ElementPlus from 'element-plus'; // 导入 Element Plus
import 'element-plus/dist/index.css';  // 导入 Element Plus 样式
import router from './router'; // 引入路由
import axios from 'axios';

// 配置 Axios
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';  // 示例 API 基地址
axios.defaults.timeout = 10000;  // 请求超时设置为 10 秒

// 创建 Vue 应用实例
const app = createApp(App);

// 将 Axios 挂载到全局属性中
app.config.globalProperties.$axios = axios;

// 使用 Element Plus 插件
app.use(ElementPlus);

// 使用路由
app.use(router);

// 挂载到 HTML 中的 #app 节点
app.mount('#app');
