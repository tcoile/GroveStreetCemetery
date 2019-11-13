<template>
  <div>
    <b-button-group>
      <b-btn v-if="page == 1" @click="incrementPage(-1)" size="lg">Back to Map</b-btn>
      <b-btn v-if="page != 2" @click="incrementPage(1)" size="lg">I found it!</b-btn>
      <b-btn v-if="page == 2" @click="incrementMarker" size="lg">Next Marker</b-btn>
    </b-button-group>
  </div>
</template>

<script>
  export default {
    methods: {
      incrementPage(n) {
        this.$store.dispatch('incrementActionPage', n)
      },
      incrementMarker () {
        this.$store.dispatch('incrementActionMarker', 1)
        this.$store.dispatch('incrementActionPage', 1)
      }
    },
    computed: {
      page () {
        return this.$store.getters.page
      }
    }
  }
</script>

<style> 
</style>