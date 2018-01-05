<template>
  <header class="Header">
    <h1 class="Header__logo">
      <router-link to="/" exact>Home</router-link>
    </h1>
    <div class="Header__tools">
      <potato-navigation></potato-navigation>
    </div>
  </header>
</template>

<script>
import PotatoNavigation from '@/components/PotatoNavigation'

export default {
  name: 'PotatoHeader',
  components: {
    PotatoNavigation
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/variables.scss";
@import "../assets/scss/base/placeholders.scss";
@import "../assets/scss/base/mixins.scss";

.Header {



}
</style>
