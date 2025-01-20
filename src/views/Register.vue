<template>
  <div class="register_form">
    <el-form
      :model="registerForm"
      ref="registerForm"
      :rules="rules"
      @submit.native.prevent="handleRegister"
    >
      <el-form-item
        label="Username"
        :label-width="formLabelWidth"
        prop="username"
      >
        <el-input v-model="registerForm.username" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item
        label="Password"
        :label-width="formLabelWidth"
        prop="password"
      >
        <el-input
          type="password"
          v-model="registerForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="Repassword"
        :label-width="formLabelWidth"
        prop="repassword"
      >
        <el-input
          type="password"
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

      <el-form-item label="Email" :label-width="formLabelWidth" prop="email">
        <el-input
          type="email"
          v-model="registerForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <div class="button-container">
        <el-button type="primary" native-type="submit">Confirm</el-button>
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
        repassword: [
          {
            required: true,
            message: "Repassword is required",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "Email is required", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleRegister() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          // 两次密码需要输入的一样
          if (this.registerForm.password !== this.registerForm.repassword) {
            // 弹窗提示密码不一致
            this.$message.error("两次密码输入不一致！");
            return false; // 防止继续执行注册逻辑
          }
          console.log("Register form submitted", this.registerForm);
          // Add your register logic here
        } else {
          console.log("Validation failed");
          return false;
        }
      });
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
