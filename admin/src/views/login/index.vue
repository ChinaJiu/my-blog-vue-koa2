<template>
  <div class="login-wrapper">
    <el-form :model="loginForm" class="login-form" status-icon>

      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item 
        class="login-item"
        prop="username" 
        :rules="{
            required: true, message: '用户名不能为空', trigger: 'blur'
          }"
        >
        <el-input 
          id="username"
          prefix-icon= "el-icon-user"
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item 
        class="login-item"
        prop="password" 
        :rules="{
            required: true, message: '密码不能为空', trigger: 'blur'
        }"
        >
        <el-input 
          id="password"
          prefix-icon= "el-icon-lock"
          v-model="loginForm.password"
          placeholder="PassWord"
          name="password"
          show-password="true"
          type="password"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-button id="el-submit" class="el-submit" type="primary" @click="loginFn()">login</el-button>

    </el-form>
    
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { login } from '@/api/user'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('user', [
      'setToken'
    ]),
    async loginFn () {
      let isLogin = await login()
      if (isLogin) {
        try {
          await this.setToken({ username: 'xiaojiu', password: '1233' })
          this.$router.push({ path: '/' })
        } catch (err) {
          this.$message({ showClose: true, message: err, type: 'error' })
        }
      }
    }
  },
  activated () {

  }
}
</script>

<style lang="scss">
// 覆盖input
/* reset element-ui css */
.login-item{
  .el-input {
    display: inline-block;
    input {
      font-size: 1px;
      height: 50px;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #ffffff inset !important;
      }
    }
  }
}
</style>

<style lang='scss' scoped>
$light_gray:#eee;
.login-wrapper{
  width: 100%;
  height: 100%;
  .login-form{
    width: 520px;
    max-width: 100%;
    padding: 130px 35px 50px;
    margin: 0 auto;
    .login-item{
      padding: 10px 0;
    }
    .el-submit{
      width: 100%;
      margin-top: 10px;
    }
  }
  .title-container{
    width: 100%;
    text-align: center;
    font-size: 26px;
    color: $light_gray;
    font-weight: bold;
    padding: 10px 0;
  }
  el-form-item{
    width: 50%;
  }
}
</style>
