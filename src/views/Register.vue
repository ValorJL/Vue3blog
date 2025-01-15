<template>
  <div class="register_form">
    <el-form
      :model="registerForm"
      ref="registerForm"
      :rules="rules"
      @submit.native.prevent="handleRegister"
    >
      <el-form-item label="Username" :label-width="formLabelWidth">
        <el-input v-model="registerForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" :label-width="formLabelWidth">
        <el-input
          type="password"
          v-model="registerForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Repassword" :label-width="formLabelWidth">
        <el-input
          type="repassword"
          v-model="registerForm.repassword"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Gender" :label-width="formLabelWidth">
        <el-radio-group v-model="registerForm.gender">
          <el-radio :value="'Male'">Male</el-radio>
          <el-radio :value="'Female'">Female</el-radio>
          <el-radio :value="'Unknown'">Unknown</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Email" :label-width="formLabelWidth">
        <el-input
          type="email"
          v-model="registerForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <div class="button-container">
        <el-button type="primary" @click="handleRegister">Confirm</el-button>
        <el-button type="default" @click="navigateToLogin">Return</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelWidth: "100px",
      registerForm: {
        username: "",
        password: "",
        repassword: "",
        gender: "Unknown",
        email: "",
      },
      rules: {
        username: [
          { required: true, message: "Username is required", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
        ],
        email: [
          { required: true, message: "Email is required", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleRegister() {
      console.log("Register form submitted", this.registerForm);
      // Add your login logic here
    },
    navigateToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.register_form {
  display: flex;
  justify-content: center;
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
