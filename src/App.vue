<script setup></script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/blogdetail">Detail</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
