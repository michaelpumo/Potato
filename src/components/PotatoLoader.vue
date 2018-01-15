<template>
  <div class="Loader" :class="{ 'is-loading': isLoading }">
    <svg class="Loader__icon" :width="50" :height="48" :viewBox="Logo.viewbox">
      <use :xlink:href="'#' + Logo.id" />
    </svg>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '@/assets/svg/logo.svg'

export default {
  name: 'PotatoLoader',
  data () {
    return ({
      Logo
    })
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/variables.scss";
@import "../assets/scss/base/mixins.scss";

.Loader {

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: map-get($depth, 'loader');
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  background-color: rgba(map-get($brand, 'dark'), 0.9);
  transition:
    opacity ($trans-speed * 2) ($trans-delay * 2) $trans-ease;

  &.is-loading {

    transition-delay: 0s;
    opacity: 1;
    pointer-events: auto;

  }

  &__icon {

    width: 80px;
    height: 80px;
    animation-name: pulse;
    animation-duration: ($trans-speed * 1.5);
    animation-iteration-count: infinite;
    animation-timing-function: $easeOutBack;
    animation-direction: alternate-reverse;

  }

}
</style>
