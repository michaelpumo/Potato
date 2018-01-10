<template>
  <article class="Post">
    <router-link :to="{ name: 'PotatoSingle', params: { id: internalId }}" class="Post__thumbnail">
      <img class="Post__image" :src="image">
    </router-link>
    <div class="Post__content">
      <h1 class="Post__title">
        <router-link :to="{ name: 'PotatoSingle', params: { id: internalId }}">{{ title }}</router-link>
      </h1>
      <footer class="Post__meta">
        <p class="Post__author"><a :href="'https://www.flickr.com/people/' + authorId" target="_blank" rel="noopener">{{ formattedAuthor }}</a></p>
        <p class="Post__published"><time :datetime="published">{{ formattedPublished }}</time></p>
        <p class="Post__flickr"><a :href="link" target="_blank" rel="noopener">View on Flickr</a></p>
      </footer>
    </div>
  </article>
</template>

<script>
import { format } from 'date-fns'

export default {
  name: 'PotatoPost',
  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    authorId: {
      type: String,
      required: true
    },
    published: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    internalId () {
      const link = this.link.trim()
      return link.split('/').filter(item => item.length).pop()
    },
    formattedPublished () {
      const published = new Date(this.published)
      return format(new Date(published), '[Published:] Do MMM YYYY [at] HH:mm')
    },
    formattedAuthor () {
      const author = this.author.trim()
      return (/"/.test(author)) ? author.match(/"(.*?)"/)[1] : author
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/variables.scss";
@import "../assets/scss/base/placeholders.scss";
@import "../assets/scss/base/mixins.scss";

.Post {

  width: 100%;
  background-color: map-get($brand, 'grey-dark');
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:nth-child(odd) {

    background-color: map-get($brand, 'grey-medium');

  }

  &__thumbnail {

    width: 90px;
    height: 180px;

    @include media(map-get($bp, 'small')) {

      width: 150px;

    }

    @include media(map-get($bp, 'medium')) {

      width: 200px;

    }

    @include media(map-get($bp, 'large')) {

      width: 300px;

    }

  }

  &__content {

    width: 100px;
    min-width: 0;
    height: auto;
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    padding: 0 $gap-small;

    @include media(map-get($bp, 'large')) {

      padding: 0 $gap-large;

    }

  }

  &__image {

    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  &__title {

    margin-bottom: 0;
    font-size: map-get($type, 'h3');
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @include media(map-get($bp, 'large')) {

      font-size: map-get($type, 'h2');

    }

    a {

      text-decoration: inherit;
      color: inherit;

    }

  }

  &__meta {

    width: 100%;
    color: map-get($brand, 'grey-light');

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

  &__flickr {


  }

}
</style>
