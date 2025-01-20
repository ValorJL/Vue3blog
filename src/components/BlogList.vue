<template>
  <el-table :data="articles" style="width: 100%">
    <el-table-column prop="title" label="标题" width="200" />
    <el-table-column prop="summary" label="摘要" />
    <el-table-column prop="createdAt" label="发布时间" width="150" />
  </el-table>
</template>

<script>
export default {
  name: "BlogList",
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
