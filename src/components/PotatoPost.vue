<template>
  <article class="Post">
    <img class="Post__image" :src="image">
    <div class="Post__content">
      <h1 class="Post__title t-h2">
        <router-link to="/single/">{{ title }}</router-link>
      </h1>
      <div class="Post__meta">
        <p class="Post__author">{{ author }}</p>
        <p class="Post__published"><time :datetime="published">{{ dateFormatted }}</time></p>
        <p class="Post__flickr"><a :href="link" target="_blank">View on Flickr</a></p>
      </div>
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
    dateFormatted () {
      const d = new Date(this.published)
      return format(new Date(d), '[Published:] Do MMM YYYY [at] HH:mm')
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
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: minmax(170px, 1fr);
  grid-gap: 20px;

  background-color: map-get($brand, 'grey-dark');

  &:nth-child(odd) {

    background-color: map-get($brand, 'grey-medium');

  }

  &__image {

    grid-column: 1 / 2;
    grid-row: 1 / 2;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  &__title {

    margin: 0;

    a {

      display: block;
      text-decoration: inherit;
      color: inherit;

    }

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

  }

  &__meta {

    display: flex;

  }

}
</style>
