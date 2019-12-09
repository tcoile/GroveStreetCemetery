<template>
  <div class="container" id="home">
    <b-card title="Welcome to Grove Street Cemetery"
      img-src="grove_street.jpg" img-alt="Card image" img-top>
      <b-card-text>
        Within these gates rest many notable figures of history: Charles Goodwin the inventor of rubber,  Josiah Willard Gibbs “Father of Thermodynamics”, and the forefathers of Yale. But with this history tour, we hope to remember the forgotten residents of New Haven buried within these grounds.
      </b-card-text>
      <b-btn size="lg" @click="setMarker(1); setPage(0)">Start Tour</b-btn>
    </b-card>
    
  </div>
</template>

<script>
  export default {
    methods: {
      setMarker(marker) {
        this.$store.dispatch('setActionMarker', marker)
      },
      setPage(n) {
        this.$store.dispatch('setActionPage', n)
      },
    },
  }
</script>

<style>
</style>
