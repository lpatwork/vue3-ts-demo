<template>
  <div class="login-box">
    <h2>Login Page</h2>

    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Username" prop="username">
        <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Submit</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>

import { reactive, ref } from "vue";
import { LoginData } from "@/type/login";
import type { FormInstance, FormRules } from "element-plus";
import { login } from "../request/api";

import { useRouter } from "vue-router";

const ruleForm = reactive(new LoginData());
const router = useRouter();
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  username: [
    { required: true, message: "Please input user name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Please input user password", trigger: "blur" },
    { min: 6, max: 12, message: "Length should be 6 to 12", trigger: "blur" },
  ],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      login(ruleForm).then((res) => {
        console.log(res);
        localStorage.setItem("token",res.data.token);
        router.push("/");
      });
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style scoped lang="scss">
.login-box {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
</style>
