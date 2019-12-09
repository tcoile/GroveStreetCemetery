<template>
  <div id='which-page'>
    <br>
    <b-button-group>
      <b-btn v-if="page == 1" @click="incrementPage(-1)" size="lg" variant="info">
        Back to Map
      </b-btn>
      <b-btn v-if="page != 2" @click="incrementPage(1)" size="lg" variant="info">
        I found it!
      </b-btn>
      <b-btn v-if="page == 2 && marker !=4" @click="incrementMarker" size="lg" variant="info">
        Next Location
      </b-btn>
      <b-btn v-if="page == 2 && marker ==4" @click="incrementMarker" size="lg" variant="info">
        Conclusion
      </b-btn>
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
      },
      marker () {
        return this.$store.getters.marker
      }
    }
  }
</script>

<style> 
#which-page {
  height: 10vh;
  width: 100%;
}
</style>