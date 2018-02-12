<template>
  <div class="App">
    <potato-loader></potato-loader>
    <potato-header></potato-header>
    <transition name="App__fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import PotatoLoader from '@/components/PotatoLoader'
import PotatoHeader from '@/components/PotatoHeader'

export default {
  name: 'App',
  components: {
    PotatoLoader,
    PotatoHeader
  }
}
</script>

<style lang="scss">
@import "./assets/scss/app.scss";

.App {

  &__fade {

    &-enter-active,
    &-leave-active {
      transition: all $trans-speed;
    }

    &-enter-active {
      transition-delay: $trans-speed;
    }

    &-enter,
    &-leave-active {
      opacity: 0;
      pointer-events: none;
    }

  }
  
}
</style>
