<template>
  <div class="Feed">
    <h1>{{ title }}</h1>

    <potato-post
      v-for="(post, index) in getPosts"
      :key="index"
      :title="post.title"
      :author="post.author"
      :published="post.published"
      :image="post.media.m"
      :link="post.link"
    >
    </potato-post>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PotatoPost from '@/components/PotatoPost'

export default {
  name: 'PotatoFeed',
  data () {
    return {
      title: 'Feed'
    }
  },
  components: {
    PotatoPost
  },
  computed: {
    ...mapGetters([
      'getPosts'
    ])
  }
}
</script>

<style scoped>
.Feed {
  
}
</style>
