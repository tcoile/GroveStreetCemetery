<template>
  <div id="which-marker">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand v-if="marker != 0 && marker != 5" href="#">Location {{marker}}</b-navbar-brand>
      <b-navbar-brand v-if="marker == 0" href="#">Home</b-navbar-brand>
      <b-navbar-brand v-if="marker == 5" href="#">Conclusion</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="setMarker(0)">Home</b-nav-item>
          <b-nav-item @click="setMarker(1)">Original Plot for People of Color</b-nav-item>
          <b-nav-item @click="setMarker(2)">North-Westerly Corner Plot</b-nav-item>
          <b-nav-item @click="setMarker(3)">Sycamore Avenue Plot</b-nav-item>
          <b-nav-item @click="setMarker(4)">Ivy Path Plot</b-nav-item>
          <b-nav-item @click="setMarker(5)">Conclusion</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br>
  </div>
</template>

<script>
  export default {
    methods: {
      setMarker(marker) {
        this.$store.dispatch('setActionMarker', marker)
      }
    },
    computed: {
      marker () {
        return this.$store.getters.marker
      }
    }
  }
</script>

<style>
</style>
