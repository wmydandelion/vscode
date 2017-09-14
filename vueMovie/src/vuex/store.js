import Vue from 'vue';
import VueX from 'vuex'
Vue.use(VueX)

const state = {
    title: 'movie',
    bgColor: 'rgb(33,150,243)'
}
const mutations = {
    changeTitle(state, status) {
        state.title = status[0];
        state.bgColor = status[1];
    }
}

const actions = {
    changeTitle: ({ commit }, status) => commit('changeTitle', status)
}

const getters = {}
export default new VueX.Store({
    state,
    mutations,
    actions,
    getters
});