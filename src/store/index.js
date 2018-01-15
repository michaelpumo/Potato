import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedState from 'vuex-persistedstate'
import fetchJsonp from 'fetch-jsonp'
import { postId } from '@/utilities/helpers'

Vue.use(Vuex)

window.jsonFlickrFeed = (data) => {
  console.log('Data', data)
}

const store = new Vuex.Store({
  plugins: [VuexPersistedState({
    key: 'potatoStore',
    paths: [
      'posts',
      'tags'
    ]
  })],
  strict: process.env.NODE_ENV !== 'production',
  state: {
    isLoading: false,
    posts: [],
    tags: ['potato']
  },
  getters: {
    isLoading: (state) => state.isLoading,
    tags: (state) => state.tags.join(' '),
    tagsCommas: (state) => state.tags.join(','),
    posts: (state) => state.posts,
    post (state) {
      return id => state.posts.find(item => {
        const linkId = postId(item.link)
        return linkId === id
      })
    }
  },
  mutations: {
    setLoading (state, flag) {
      state.isLoading = flag
    },
    setTags (state, payload) {
      state.tags = payload
    },
    setPosts (state, payload) {
      state.posts = payload
    }
  },
  actions: {
    setLoading (context, payload) {
      context.commit('setLoading', payload)
    },
    setTags (context, payload) {
      const tags = payload.trim().split(' ').filter(item => (item.length && item.match(/^[0-9a-zA-Z]+$/)))
      context.commit('setTags', tags)
    },
    fetchPosts ({ commit, state }) {
      commit('setLoading', true)
      const tags = this.getters.tagsCommas
      fetchJsonp(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${tags}&tagmode=all&format=json`, {
        timeout: 8000,
        jsonpCallback: 'jsoncallback',
        jsonpCallbackFunction: 'jsonFlickrFeed'
      })
      .then(response => response.json())
      .then(json => {
        const items = json.items
        commit('setPosts', items)
        commit('setLoading', false)
      })
      .catch(error => {
        console.log('Error in fetch to Flickr', error)
        commit('setLoading', false)
      })
    }
  }
})

export default store
