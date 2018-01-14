<template>
  <article class="Post">
    <router-link :to="{ name: 'PotatoSingle', params: { id: formattedId }}" class="Post__thumbnail">
      <img class="Post__image" :src="post.image">
    </router-link>
    <div class="Post__content">
      <h1 class="Post__title">{{ post.title }}</h1>
      <div class="Post__description" v-html="post.description"></div>

      <ul class="Post__tags">
        <li v-for="(tag, index) in formattedTags" :key="index">
          <a :href="'https://www.flickr.com/photos/tags/' + tag" target="_blank" rel="noopener">{{ tag }}</a>
        </li>
      </ul>

      <footer class="Post__meta">
        <p class="Post__author"><a :href="'https://www.flickr.com/people/' + post.author_id" target="_blank" rel="noopener">{{ formattedAuthor }}</a></p>
        <p class="Post__published"><time :datetime="post.published">{{ formattedPublished }}</time></p>
        <p class="Post__flickr"><a :href="post.link" target="_blank" rel="noopener">View on Flickr</a></p>
      </footer>
    </div>
  </article>
</template>

<script>
import { postId, postPublished, postAuthor, postTags } from '@/utilities/helpers'

export default {
  name: 'PotatoSingle',
  data () {
    return ({
      id: this.$route.params.id
    })
  },
  computed: {
    post () {
      return this.$store.getters.post(this.id)
    },
    formattedId () {
      return postId(this.post.link)
    },
    formattedPublished () {
      return postPublished(this.post.published)
    },
    formattedAuthor () {
      return postAuthor(this.post.author)
    },
    formattedTags () {
      return postTags(this.post.tags)
    }
  },
  watch: {
    '$route.params.id': (id) => {
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
.Single {
  
}
</style>
