<template>
  <header class="Header">
    <div class="Header__main">
      <div class="Header__logo">
        <router-link to="/" exact>
          <svg :width="50" :height="48" :viewBox="Logo.viewbox">
            <use :xlink:href="'#' + Logo.id" />
          </svg>
        </router-link>
      </div>
      <div class="Header__tools">
        <potato-search></potato-search>
      </div>
    </div>
  </header>
</template>

<script>
import PotatoSearch from '@/components/PotatoSearch'
import Logo from '@/assets/svg/logo.svg'

export default {
  name: 'PotatoHeader',
  data () {
    return ({
      Logo
    })
  },
  components: {
    PotatoSearch
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/variables.scss";
@import "../assets/scss/base/placeholders.scss";
@import "../assets/scss/base/mixins.scss";

.Header {

  position: fixed;
  top: 0;
  left: 0;
  z-index: map-get($depth, 'header');
  width: 100%;
  height: $header-height;
  background-color: map-get($brand, 'dark');
  display: grid;
  grid-gap: $gap-small;
  grid-template-columns: 1fr minmax(auto, #{$max-site-width}) 1fr;
  grid-template-rows: 1fr;

  svg {

    display: block;

  }

  &__main {
    
    grid-column: 2 / 3;
    display: flex;
    align-items: center;

  }

  &__logo {

    margin-right: $gap-small;

  }

  &__tools {

    display: flex;
    align-items: center;
    width: 100%;

  }

}
</style>
