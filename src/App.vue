<template>
  <div id="app">
    <whichMarker/>
    <homePage v-if="marker==0"></homePage>
    <finalPage v-if="marker==5"></finalPage>
    <div v-if="marker!=0 && marker !=5" id="main">
      <my-map v-if="page==0">
      </my-map>
      <imageCheck v-if="page==1"></imageCheck>
      <Info v-if="page==2"></Info>
      <whichPage/>
    </div>
  </div>
</template>

<script>
import homePage from './components/homePage.vue'
import MyMap from './components/MyMap.vue'
import whichMarker from './components/whichMarker.vue'
import whichPage from './components/whichPage.vue'
import imageCheck from './components/imageCheck.vue'
import Info from './components/Info.vue'
import finalPage from './components/finalPage.vue'

export default {
  name: 'app',
  data: () => ({
  }),

  components: {
    homePage,
    MyMap, 
    whichMarker,
    whichPage,
    imageCheck,
    Info,
    finalPage
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
