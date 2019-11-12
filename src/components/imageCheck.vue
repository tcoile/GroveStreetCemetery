<template>
  <div class="container p-3">
    <h2>Do you see this place?</h2>
    <b-img thumbnail :src="'marker/' + marker + '.jpg'"></b-img>
  </div>
</template>

<script>
  export default {
    methods: {
      incrementPage () {
        this.$store.dispatch('incrementActionPage', 1)
      }
    },
    computed: {
      page () {
        return this.$store.getters.page
      },
      marker () {
        return this.$store.getters.marker
      }
    }
  }
</script>

<style>
</style>