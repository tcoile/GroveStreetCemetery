<template>
  <div id="app">
    <Map v-if="!pageType"></Map>
    <Info v-if="pageType"></Info>
    <p>technically changed</p>
    <button @click="changePage()">Next</button> 
    <imageCheck :whichMarker="whichMarker"></imageCheck>
  </div>
</template>

<script>
import Map from './components/Map.vue'
import imageCheck from './components/imageCheck.vue'
import Info from './components/Info.vue'

export default {
  name: 'app',
  data: () => ({
    pageType: 0,
    whichMarker: 0
  }),
  components: {
    Map, 
    imageCheck,
    Info
  }, 
  methods: {
    changePage: function() {
      this.pageType = !this.pageType;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
