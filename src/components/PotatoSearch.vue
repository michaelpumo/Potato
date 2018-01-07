<template>
  <div class="Search">
    <form class="Search__form Form">
      <fieldset class="Form__fieldset">
        <legend class="Form__legend">Search</legend>
        <input class="Form__input" :value="getTags">
      </fieldset>
    </Form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PotatoSearch',
  data () {
    return ({
      // tag: this.getTags
    })
  },
  computed: {
    ...mapGetters([
      'getTags'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/variables.scss";
@import "../assets/scss/base/placeholders.scss";
@import "../assets/scss/base/mixins.scss";

.Search {

  width: 100%;

}
</style>
