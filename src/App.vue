<template>
  <div class="App">
    <potato-header></potato-header>
    <transition name="App__fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import PotatoHeader from '@/components/PotatoHeader'

export default {
  name: 'App',
  components: {
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
