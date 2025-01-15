// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'; // 导入 Vue
import App from './App.vue';     // 导入主组件
import ElementPlus from 'element-plus'; // 导入 Element Plus
import 'element-plus/dist/index.css';  // 导入 Element Plus 样式
import router from './router'; // 引入路由

const app = createApp(App); // 创建 Vue 实例
app.use(ElementPlus);       // 使用 Element Plus 插件
app.use(router); // 使用路由
app.mount('#app');          // 挂载到 HTML 中的 #app 节点



