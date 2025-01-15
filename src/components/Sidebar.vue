<template>
    <el-menu :default-active="activeMenu" class="sidebar-menu" @select="handleMenuSelect">
      <el-menu-item index="/home">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <el-submenu index="1">
        <template #title>Blog</template>
        <el-menu-item index="/blog/post1">Post 1</el-menu-item>
        <el-menu-item index="/blog/post2">Post 2</el-menu-item>
      </el-submenu>
    </el-menu>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeMenu: '/home', // 默认选中项
      };
    },
    methods: {
      handleMenuSelect(index) {
        this.$router.push(index); // 路由跳转
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar-menu {
    width: 200px;
    height: 100%;
    background-color: #fff;
  }
  </style>
  