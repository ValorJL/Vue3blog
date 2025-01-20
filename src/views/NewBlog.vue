<template>
  <div class="new-blog">
    <el-form ref="blogForm" :model="form" label-width="100px">
      <el-form-item label="标题">
        <div class="title-container">
          <el-input v-model="form.title" />
        </div>
      </el-form-item>
      <el-form-item label="内容">
        <div class="quill-container">
          <!-- 工具栏 -->
          <div ref="toolbar"></div>
          <!-- 编辑区 -->
          <div ref="editor"></div>
        </div>
      </el-form-item>
      <el-form-item>
        <div class="btn-container">
          <el-button type="primary" @click="submitBlog">提交</el-button>
          <el-button type="default" @click="navigateToHome">返回</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css"; // 引入 Quill 样式

export default {
  name: "NewBlog",
  data() {
    return {
      form: {
        title: "",
        content: "",
      },
      quill: null, // 用于存储 Quill 实例
    };
  },
  mounted() {
    // 初始化 Quill 编辑器
    this.quill = new Quill(this.$refs.editor, {
      theme: "snow", // 选择 Quill 主题
      placeholder: "请输入内容...",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike"],
          ["link"],
          ["blockquote", "code-block"],
          [{ color: [] }, { background: [] }],
          ["clean"], // 清除格式按钮
        ], // 内联工具栏配置
      },
    });

    // 当编辑器内容改变时同步到 model.content
    this.quill.on("text-change", () => {
      this.form.content = this.quill.root.innerHTML; // 保存 HTML 格式的内容
    });
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
    async submitBlog() {
      try {
        await this.$axios.post("/api/articles", this.form);
        this.$message.success("文章创建成功");
        this.$router.push("/");
      } catch (error) {
        this.$message.error("文章创建失败");
      }
    },
  },
};
</script>
<style scoped>
.new-blog {
  padding: 20px;
}
.title-container {
  width: 90%;
  margin: 0 auto;
}
.quill-container {
  width: 90%;
  height: 50vh;
  margin: 0 auto; /* 居中 */
}

.quill-toolbar {
  width: 100%; /* 工具栏宽度占满父容器 */
  border: 1px solid #ccc;
  border-bottom: none; /* 工具栏底部不需要边框 */
}

.quill-editor {
  width: 100%; /* 编辑器宽度占满父容器 */
  height: 100%;
  border: 1px solid #ccc;
  padding: 10px;
}

.btn-container {
  text-align: center;
  margin: 0 auto;
  display: flex;
  /* justify-content: center; */
  margin-top: 100px;
}
</style>
