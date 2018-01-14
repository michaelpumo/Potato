<template>
  <div class="Loader" :class="{ 'is-loading': isLoading }">
    <div class="Loader__icon"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PotatoLoader',
  data () {
    return ({
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
// @import "../assets/scss/base/animations.scss";
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
    opacity $trans-speed $trans-ease;

  &.is-loading {

    opacity: 1;
    pointer-events: auto;

  }

  &__icon {

    border-top: 5px solid rgba(white, 0.2);
    border-right: 5px solid rgba(white, 0.2);
    border-bottom: 5px solid rgba(white, 0.2);
    border-left: 5px solid white;
    animation-name: spin;
    animation-duration: ($trans-speed * 2);
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    &,
    &:after {
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }

  }

}
</style>
