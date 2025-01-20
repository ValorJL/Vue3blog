<template>
  <div class="blog-home">
    <el-header class="header">
      <h1>所有博客</h1>
      <el-button type="primary" @click="createNewBlog">新建文章</el-button>
    </el-header>
    <el-main>
      <BlogList :articles="articles" />
    </el-main>
  </div>
</template>

<script>
import BlogList from "../components/BlogList.vue";

export default {
  name: "Home",
  components: { BlogList },
  data() {
    return {
      articles: [], // 存储文章数据
    };
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await this.$axios.get("/api/articles");
        this.articles = response.data;
      } catch (error) {
        this.$message.error("加载文章失败");
      }
    },
    createNewBlog() {
      this.$router.push({ path: "/newblog" });
    },
  },
  created() {
    this.fetchArticles();
  },
};
</script>

<style scoped>
.blog-home {
  padding: 20px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}
</style>
