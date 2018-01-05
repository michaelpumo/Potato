<template>
  <div class="App">
    <potato-header></potato-header>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PotatoHeader from '@/components/PotatoHeader'

export default {
  name: 'App',
  components: {
    PotatoHeader
  },
  computed: {
    ...mapGetters([
      'getTags'
    ])
  },
  methods: {
    ...mapActions([
      'setFlickr'
    ]),
    getData () {
      this.$jsonp('https://api.flickr.com/services/feeds/photos_public.gne', {
        tags: this.getTags.join(','),
        tagmode: 'all',
        format: 'json',
        jsoncallback: 'jsonFlickrFeed'
      })
      .then(json => console.log('fff', json))
      .catch(err => console.log('eee', err))
    }
  },
  mounted () {
    // Because of JSONP, we have to register a dirty global function on the window.
    // This is so that the generated script can access it.
    window.jsonFlickrFeed = (data) => {
      this.setFlickr(data)
    }

    // Now we have the callback function defined, let's get the data from Flickr.
    this.getData()
  }
}
</script>

<style>
.App {

}
</style>
