<template>
  <div class="Error">
    <div class="Error__main">
      <h1>Page not found 🤔</h1>
      <p><router-link :to="{ name: 'PotatoFeed' }">Get me outta here!</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PotatoError'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/variables.scss";
@import "../assets/scss/base/placeholders.scss";
@import "../assets/scss/base/mixins.scss";

.Error {

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - #{$header-height});
  
  &__main {

    max-width: $max-site-width;
    text-align: center;

  }

}
</style>
