<template>
  <div class="Feed">
    <div class="Feed__main">
      <potato-post
        v-for="(post, index) in posts"
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
import { mapGetters, mapActions } from 'vuex'
import PotatoPost from '@/components/PotatoPost'

export default {
  name: 'PotatoFeed',
  components: {
    PotatoPost
  },
  computed: {
    ...mapGetters([
      'tags',
      'posts'
    ])
  },
  methods: {
    ...mapActions([
      'setTags',
      'fetchPosts'
    ])
  },
  mounted () {
    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/variables.scss";
@import "../assets/scss/base/placeholders.scss";
@import "../assets/scss/base/mixins.scss";

.Feed {

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  
  &__main {

    width: 100%;
    max-width: $max-site-width;

  }

}
</style>
