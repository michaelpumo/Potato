<template>
  <article class="Post">
    <img :src="image">
    <h1 class="Post__title">{{ title }}</h1>
    <div class="Post__author">{{ author }}</div>
    <time>{{ dateFormatted }}</time>
  </article>
</template>

<script>
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
    dateFormatted: () => this.published
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/variables.scss";
@import "../assets/scss/base/placeholders.scss";
@import "../assets/scss/base/mixins.scss";

.Post {



}
</style>
