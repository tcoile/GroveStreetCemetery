<template>
  <div id="app">
    <whichMarker/>
    <my-map v-if="page==0" :markers='[
        {"lat": 41.312735,"lng": -72.926955},
        {"lat":41.315017 ,"lng": -72.927987},
        {"lat":41.314707,"lng": -72.926505},
        {"lat":41.314543,"lng": -72.927736},
      ]'>
    </my-map>
    <imageCheck v-if="page==1"></imageCheck>
    <Info v-if="page==2"></Info>
    <whichPage/>
  </div>
</template>

<script>
import MyMap from './components/MyMap.vue'
import whichMarker from './components/whichMarker.vue'
import whichPage from './components/whichPage.vue'
import imageCheck from './components/imageCheck.vue'
import Info from './components/Info.vue'

export default {
  name: 'app',
  data: () => ({
  }),

  components: {
    MyMap, 
    whichMarker,
    whichPage,
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
