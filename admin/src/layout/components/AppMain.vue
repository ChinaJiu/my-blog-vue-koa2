<template>
  <div class="app-main">
    app-main
    <div>username: {{userName}}</div>
    <div>avatar: {{userAvatar}}</div>
    <div>token: {{token}}</div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      arr: ''
    }
  },
  async mounted () {
    await this.setUser()
  },
  created () {

  },
  computed: {
    ...mapState({
      userName: state => state.user.name,
      userAvatar: state => state.user.avatar,
      token: state => state.user.token
    })
  },
  methods: {
    ...mapActions('user', [
      'setUser'
    ])
  }
}
</script>

<style>
.app-main{
  width: 100%;
}
</style>
