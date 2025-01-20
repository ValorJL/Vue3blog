<template>
  <div class="blog-home">
    <el-header class="header"> </el-header>
    <el-main>
      <div class="main-container">
        <h1>文章题目</h1>
        <div class="time-and-author">
          <h4>时间</h4>
          <h4>作者</h4>
        </div>
        <div class="detail-box">
          <h4>正文正文正文</h4>
        </div>
        <div class="btn-container">
          <el-button type="default" @click="navigateToHome">Return</el-button>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
import { ElButton } from "element-plus";

export default {
  name: "BlogDetail",
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.main-container {
  background-color: rgba(142, 142, 142, 0.2);
  margin-left: 50px;
  margin-right: 50px;
  padding: 30px;
}
.time-and-author {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.detail-box {
  min-height: 50vh;
}
.btn-container {
  text-align: center;
}
</style>
