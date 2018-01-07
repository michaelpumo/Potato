<template>
  <div class="Search">
    <form class="Search__form Form">
      <fieldset class="Form__fieldset">
        <legend class="Form__legend">Search</legend>
        <input
          class="Form__input"
          v-model="tags"
          @input="update"
          @change="update"
        >
      </fieldset>
    </Form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PotatoSearch',
  data () {
    return ({
      tags: ''
    })
  },
  computed: {
    ...mapGetters([
      'getTags'
    ])
  },
  mounted () {
    this.tags = this.getTags
  },
  methods: {
    ...mapActions([
      'setTags'
    ]),
    update ({ target }) {
      this.setTags(target.value)
    }
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
