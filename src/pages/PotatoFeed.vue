<template>
  <div class="Feed">
    <div class="Feed__main">
      <potato-post
        v-for="(post, index) in getPosts"
        :key="index"
        :title="post.title"
        :author="post.author"
        :authorId="post.author_id"
        :published="post.published"
        :image="post.media.m"
        :link="post.link"
      >
      </potato-post>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PotatoPost from '@/components/PotatoPost'

export default {
  name: 'PotatoFeed',
  data () {
    return ({
    })
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

<style lang="scss" scoped>
@import "../assets/scss/base/variables.scss";
@import "../assets/scss/base/placeholders.scss";
@import "../assets/scss/base/mixins.scss";

.Feed {

  display: grid;
  grid-template-columns: 1fr minmax(auto, #{$max-site-width}) 1fr;
  grid-template-rows: 1fr; 
  
  &__main {

    grid-column: 2 / 3;

  }

}
</style>
