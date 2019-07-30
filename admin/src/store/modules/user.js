import { getUser } from '@/api/user'

const state = {
  name: '',
  avatar: '',
  article: '123'
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
