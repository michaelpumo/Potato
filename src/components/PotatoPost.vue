<template>
  <article class="Post">
    <router-link :to="{ name: 'PotatoSingle', params: { id: internalId }}">
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
      const id = link.split('/').filter(item => item.length).pop()
      return id
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
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: minmax(170px, 1fr);

  @include media(map-get($bp, 'medium')) {

    grid-template-columns: 300px 1fr;
    grid-template-rows: minmax(170px, 1fr);

  }

  &:nth-child(odd) {

    background-color: map-get($brand, 'grey-medium');

  }

  &__content {

    grid-column: 2 / 3;
    grid-row: 1 / 2;
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: #{$gap-small / 2} $gap-small;

  }

  &__image {

    grid-column: 1 / 2;
    grid-row: 1 / 2;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  &__title {

    width: 100%;
    margin-bottom: 0;
    font-size: map-get($type, 'h4');

    @include media(map-get($bp, 'large')) {

      font-size: map-get($type, 'h3');

    }

    @include media(map-get($bp, 'x-large')) {

      font-size: map-get($type, 'h2');

    }

    a {

      display: block;
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

  &__published {

    @include media(map-get($bp, 'large')) {
    
      margin-left: 20px;
      margin-right: 20px;

    }

  }

  &__flickr {

    @include media(map-get($bp, 'large')) {
    
      margin-left: auto;

    }

  }

}
</style>
