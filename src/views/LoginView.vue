<template>
  <div class="login_box">
    <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="80px"
    class="demo-ruleForm"
  >
    <h2>后台管理系统</h2>
    <el-form-item label="账号：" prop="username">
      <el-input v-model="ruleForm.username"  autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码：" prop="password">
      <el-input
        v-model="ruleForm.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="loginBtn" @click="submitForm(ruleFormRef)">登录</el-button>
      <el-button class="loginBtn" @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs ,ref,} from 'vue'
import { LoginData } from '../type/login'
import type { FormInstance } from 'element-plus'
// import {login} from '../request/api'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup () {
    const data = reactive(new LoginData())
    const rules = {
      username: [
        { required: true, message: '请输入账号', trigger: 'blur' },
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
      ],
    }
    //登录
    const ruleFormRef = ref<FormInstance>()
    const router = useRouter() // $router
    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate((valid, fields) => {
        if (valid) {
          // login(data.ruleForm).then(res=>{
            localStorage.setItem('token','admin-token');
            router.push('/')
          // })
        } else {
          console.log('error submit!', fields)
        }
      })
      // console.log(formEl);
      
    }
    //重置
    const resetForm = () => {
      data.ruleForm.username = ""
      data.ruleForm.password = ""
    }
    return {...toRefs(data),rules,resetForm,ruleFormRef,submitForm}
  }
})
</script>

<style scoped lang="scss">
.login_box{
  width: 100%;
  height: 100%;
  background:url("../assets/bj.jpg") no-repeat 100%;
  text-align: center;
  overflow: hidden;
  .demo-ruleForm{
    width: 400px;
    margin: 200px auto;
    padding: 40px;
    background: #fff;
    border-radius: 20px;
  }
  .loginBtn{
    width: 20%;
  }
  h2{
    margin-bottom: 15px;
  }
}
</style>