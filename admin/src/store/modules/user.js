import { getUser, login } from '@/api/user'
import Cookies from 'js-cookie'

const state = {
  name: '',
  avatar: '',
  article: '',
  token: Cookies.get('token_RD')
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  async setToken ({ commit }, userInfo) {
    const { username, password } = userInfo
    const result = await login({ username: username, password: password })
    Cookies.set('token_RD', result.data.token)
    commit('SET_TOKEN', result.data.token)
    return result
  },
  async setUser ({ commit }) {
    const data = (await getUser()).data
    commit('SET_NAME', data.name)
    commit('SET_AVATAR', data.avatar)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
