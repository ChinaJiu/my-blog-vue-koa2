import { constantRoutes } from '@/router/constantRoutes'
import { asyncRouterMap } from '@/router/asyncRouterMap'

function hasPermission (roles, route) {
  if (route.meta && route.meta.roles.length !== 0) {
    return roles.some(role => route.meta.roles.includes(role)) 
  } else { 
    return true
  }
}

export function filterAsyncRoutes (routes, roles) {
  let res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes ({ commit }, roles) {
    let accessedRoutes
    accessedRoutes = filterAsyncRoutes(asyncRouterMap, roles)
    commit('SET_ROUTES', accessedRoutes)
    return accessedRoutes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
