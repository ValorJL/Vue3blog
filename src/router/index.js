import { createRouter, createWebHistory } from 'vue-router';

// 定义路由组件
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import BlogDetail from '../views/BlogDetail.vue';
import NewBlog from '../views/NewBlog.vue';

// 定义路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/blogdetail',
    name: 'BlogDetail',
    component: BlogDetail,
  },
  {
    path: '/newblog',
    name: 'NewBlog',
    component: NewBlog,
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 模式的路由
  routes,
});

export default router;

