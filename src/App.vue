<template>
  <div id="app">
    <my-map :markers='[
        {"lat": 41.312735,"lng": -72.926955},
        {"lat":41.315017 ,"lng": -72.927987},
        {"lat":41.314707,"lng": -72.926505},
        {"lat":41.314543,"lng": -72.927736},
      ]'>
    </my-map>

    <Info v-if="pageType"></Info>
    <p>technically changed</p>
    <button @click="changePage()">Next</button> 
  </div>
</template>

<script>
import MyMap from './components/MyMap.vue'
import Info from './components/Info.vue'

export default {
  name: 'app',
  data: () => ({
    pageType: 0
  }),
  components: {
    MyMap, 
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
