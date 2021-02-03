const state = {
  pageType: ''
}
const mutations = {
  updatePageMutation (state, paylod) {
    state.pageType = paylod
  }
}
const actions = {
  updatePage ({ commit }, paylod) {
    commit('updatePageMutation', paylod)
  }
}
const getters = {
  pageType: state => state.pageType
}

export default {
  state,
  getters,
  mutations,
  actions
}
