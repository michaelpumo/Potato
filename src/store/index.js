import Vue from 'vue'
import Vuex from 'vuex'
// import vuexPersistedState from 'vuex-persistedstate'
// import fetchJsonp from 'fetch-jsonp'

Vue.use(Vuex)

const store = new Vuex.Store({
  // plugins: [vuexPersistedState({
  //   key: 'potatoStore',
  //   paths: [
  //   ]
  // })],
  strict: process.env.NODE_ENV !== 'production',
  state: {
    isLoading: false,
    flickr: undefined,
    tags: [
      'potato'
    ]
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    getFlickr (state) {
      return state.flickr
    },
    getTags (state) {
      return state.tags
    },
    getPosts (state) {
      return (state.flickr) ? state.flickr.items : []
    }
  },
  mutations: {
    setLoading (state, flag) {
      state.isLoading = flag
    },
    setFlickr (state, payload) {
      state.flickr = payload
    },
    setTags (state, payload) {
      state.tags = [...state.tags, payload]
    }
  },
  actions: {
    setLoading (context, payload) {
      context.commit('setLoading', payload.flag)
    },
    setFlickr (context, payload) {
      context.commit('setFlickr', payload)
    },
    setTags (context, payload) {
      context.commit('setTags', payload)
    }
  }
})

export default store
