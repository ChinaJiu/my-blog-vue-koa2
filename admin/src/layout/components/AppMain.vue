<template>
  <div class="app-main">
    app-main
    <div>username: {{userName}}</div>
    <div>avatar: {{userAvatar}}</div>
    
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
  activated () {
    
  },
  computed: {
    ...mapState({
      userName: state => state.user.name,
      userAvatar: state => state.user.avatar
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
