<template>
  <nav class="Nav">
    <ul class="Nav__list">
      <li class="Nav__item"><router-link class="Nav__link" to="/">Feed</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PotatoNavigation'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/variables.scss";

.Nav {

}
</style>
