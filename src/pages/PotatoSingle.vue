<template>
  <article class="Post">
    <div v-if="post" class="Post__main">
      <h1 class="Post__title">{{ post.title }}</h1>
      <div class="Post__meta">
        <p class="Post__author"><a :href="'https://www.flickr.com/people/' + post.author_id" target="_blank" rel="noopener">{{ formattedAuthor }}</a></p>
        <p class="Post__published"><time :datetime="post.published">{{ formattedPublished }}</time></p>
        <p class="Post__flickr"><a :href="post.link" target="_blank" rel="noopener">View on Flickr</a></p>
      </div>
      <div class="Post__content">
        <div class="Post__secondary">
          <img class="Post__image" :src="post.media.m">
        </div>
        <div class="Post__primary">
          <div class="Post__description" v-html="formattedDescription"></div>
          <p v-if="formattedTags.length"><strong>Tags</strong></p>
          <ul class="Post__tags" v-if="formattedTags.length">
            <li class="Post__tag" v-for="(tag, index) in formattedTags" :key="index">
              <a :href="'https://www.flickr.com/photos/tags/' + tag" target="_blank" rel="noopener">{{ tag }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { postId, postPublished, postAuthor, postTags, postDescription } from '@/utilities/helpers'

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
    },
    formattedDescription () {
      return postDescription(this.post.description)
    }
  },
  watch: {
    '$route.params.id': (id) => {
      this.$forceUpdate()
    }
  },
  mounted () {
    if (!this.post) {
      this.$router.push({ name: 'PotatoError' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/variables.scss";
@import "../assets/scss/base/placeholders.scss";
@import "../assets/scss/base/mixins.scss";

.Post {

  display: flex;
  justify-content: center;
  width: 100%;

  &__main {

    width: 100%;
    max-width: #{$max-site-width + ($gap-large * 2)};
    padding: $gap-small;

    @include media(map-get($bp, 'large')) {

      padding: $gap-large;

    }

  }

  &__meta {

    width: 100%;
    color: map-get($brand, 'grey-light');
    margin: 0 0 $gap-large 0;

    @include media(map-get($bp, 'large')) {

      display: flex;

    }

  }

  &__author {


  }

  &__published {

    margin-top: -15px;

    @include media(map-get($bp, 'large')) {
    
      margin: 15px;

    }

  }

  &__content {

    display: flex;
    flex-direction: column;

    @include media(map-get($bp, 'medium')) {
    
      flex-direction: row;

    }

  }

  &__secondary {

    @include media(map-get($bp, 'medium')) {
    
      width: 300px;

    }

  }

  &__primary {

    @include media(map-get($bp, 'medium')) {
    
      flex: 1;
      padding: 0 0 0 $gap-large;

    }

  }

  &__image {

    width: 100%;
    height: auto;

  }

  &__description {

    @include media(map-get($bp, 'medium')) {
    
      margin-top: -20px;

    }

  }
  
  &__tags {

    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

  }

  &__tag {

    margin-right: 10px;
    font-size: 14px;
    font-weight: 700;

    &:last-child {

      margin: inherit;

    }

    a {

      display: block;
      background-color: map-get($brand, 'pink');
      color: white;
      border-radius: $border-radius;
      padding: 0 5px;

    }

  }

}
</style>
