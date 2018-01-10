<template>
  <div class="Search">
    <form class="Search__form Form" @submit.prevent="updateData">
      <fieldset class="Form__fieldset">
        <legend class="Form__legend">Search</legend>
        <input
          class="Form__input"
          placeholder="Enter tags separated by a space. Only letters and numbers are accepted."
          ref="field"
          v-model="input"
          @change="updateData"
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
      input: ''
    })
  },
  computed: {
    ...mapGetters([
      'tags'
    ])
  },
  mounted () {
    this.setInput(this.tags)
  },
  methods: {
    ...mapActions([
      'setTags',
      'fetchPosts'
    ]),
    updateData () {
      this.$router.push('/')
      const field = this.$refs.field
      this.setTags(field.value)
      this.setInput(this.tags)
      this.fetchPosts()
    },
    setInput (value) {
      this.input = value
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
