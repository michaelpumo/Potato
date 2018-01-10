<template>
  <div class="Single">
    <h1>{{ post }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PotatoSingle',
  data () {
    return ({
      id: this.$route.params.id
    })
  },
  computed: {
    post () {
      return this.$store.getters.post(this.id)
    }
  },
  watch: {
    '$route.params.id': (id) => {
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
.Single {
  
}
</style>
