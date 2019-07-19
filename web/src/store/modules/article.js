import article from '../../api/article'

const state = {
  // 文章
  articleList: []
};

const mutations = {
  SET_ARTICLE_LIST(state, list) {
    state.articleList = list
  }
}

const actions = {
   /**
   * 获取文章列表
   * @param state
   * @param commit
   * @param params
   * @returns {Promise<void>}
   */
  async getArticleList({commit}, params) {
    let res = await article.list(params);
    let data = res.data.data.data
    commit('SET_ARTICLE_LIST',data);
    return res;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}