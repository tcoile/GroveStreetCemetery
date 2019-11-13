<template>
  <div id="app">
    <whichMarker/>
    <Map v-if="page==0"></Map>
    <imageCheck v-if="page==1"></imageCheck>
    <Info v-if="page==2"></Info>
    <whichPage/>
  </div>
</template>

<script>
import whichMarker from './components/whichMarker.vue'
import whichPage from './components/whichPage.vue'
import Map from './components/Map.vue'
import imageCheck from './components/imageCheck.vue'
import Info from './components/Info.vue'

export default {
  name: 'app',
  data: () => ({
  }),

  components: {
    whichMarker,
    whichPage,
    Map, 
    imageCheck,
    Info
  }, 

  methods: {
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
