<template>
  <div class="Single">
    <h1>{{ title }} {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PotatoSingle',
  data () {
    return {
      id: this.$route.params.id,
      title: 'Single'
    }
  },
  watch: {
    '$route.params.id': function (id) {
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
.Single {
  
}
</style>
