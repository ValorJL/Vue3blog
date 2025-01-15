<template>
  <div class="login_form">
    <el-form
      :model="loginForm"
      ref="loginForm"
      :rules="rules"
      @submit.native.prevent="handleLogin"
    >
      <el-form-item label="Username" :label-width="formLabelWidth">
        <el-input v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" :label-width="formLabelWidth">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <div class="button-container">
        <el-button type="primary" @click="handleLogin">Login</el-button>
        <el-button type="default" @click="navigateToRegister"
          >Register</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelWidth: "100px",
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "Username is required", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleLogin() {
      console.log("Login form submitted", this.loginForm);
      // Add your login logic here
    },
    navigateToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.login_form {
  border: 1px solid #2c3e50;
  border-radius: 15px;
  background-clip: padding-box;
  margin: 15% auto;
  width: 600px;
  padding: 35px 35px 35px 35px;
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
</style>
