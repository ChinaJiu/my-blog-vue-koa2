<template>
  <div class="login-wrapper">
    <div>username: <input type="text"></div>
    <div>password: <input type="text"></div>
    <button @click="login">登录</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('user', [
      'setToken'
    ]),
    async login () {
      try {
        await this.setToken({ username: 'xiaojiu', password: '1233' })
        this.$router.push({ path: '/' })
      } catch (err) {
        this.$message({ showClose: true, message: err, type: 'error' })
      }
    }
  },
  activated () {

  }
}
</script>
<style lang='scss' scoped>
.login-wrapper{
  width: 100%;
  height: 100%;
}
</style>
