<template>
  <div>
    <b-button-group>
      <b-btn size="lg" @click="setMarker(0)">Marker 0</b-btn>
      <b-btn size="lg" @click="setMarker(1)">Marker 1</b-btn>
      <b-btn size="lg" @click="setMarker(2)">Marker 2</b-btn>
      <b-btn size="lg" @click="setMarker(3)">Marker 3</b-btn>
    </b-button-group>
    <h2 class="p-3">Marker #{{marker}}</h2>
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
