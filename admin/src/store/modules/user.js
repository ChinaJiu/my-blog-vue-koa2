import { login } from '@/api/user'

const state = {
  name: '',
  avatar: ''
}

const mutations = {
  // SET_TOKEN: (state, token) => {
  //   state.token = token
  // },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user login
  login () {
    login()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
