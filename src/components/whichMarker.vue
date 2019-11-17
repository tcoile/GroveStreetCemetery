<template>
  <div>
    <b-button-group>
      <b-btn size="lg" @click="setMarker(0)">Home</b-btn>
      <b-btn size="lg" @click="setMarker(1)">Marker 1</b-btn>
      <b-btn size="lg" @click="setMarker(2)">Marker 2</b-btn>
      <b-btn size="lg" @click="setMarker(3)">Marker 3</b-btn>
      <b-btn size="lg" @click="setMarker(4)">Marker 4</b-btn>
      <b-btn size="lg" @click="setMarker(5)">Conclusion</b-btn>
    </b-button-group>
    <h2 v-if="marker!=0 && marker!=5" class="p-3">Marker #{{marker}}</h2>
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
