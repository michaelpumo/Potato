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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  padding: 0 $gap-small;

  svg {

    display: block;

  }

  &__main {

    display: flex;
    align-items: center;
    width: 100%;
    max-width: $max-site-width;

  }

  &__logo {

    margin-right: $gap-small;

  }

  &__tools {

    flex: 1;
    display: flex;
    align-items: center;
    width: 100%;

  }

}
</style>
