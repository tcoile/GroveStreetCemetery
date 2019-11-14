<!-- MyMap.vue -->
<template>
  <div class="container">
    <h1>Map</h1>
    <map-loader 
      :map-config="mapConfig"
      apiKey="AIzaSyDn3JZPmqYtO73Cd4r1b-x1ClNlF0NsXf8"
    >
    <template slot-scope="scopeProps"> <!-- slot-scope -->
        <child-marker 
          v-for="(marker,i) in currMarkers"
          :key="i"
          :position="marker" 
          :google="scopeProps.google"
          :map="scopeProps.map"
        />
      </template>
    </map-loader>
  </div>
</template>

<script>
import MapLoader from "./MapLoader.vue"
import ChildMarker from './ChildMarker'

export default {
  data(){
    return {
      markers: [
        {"lat": 41.312735,"lng": -72.926955},
        {"lat":41.315017 ,"lng": -72.927987},
        {"lat":41.314543,"lng": -72.927736},
        {"lat":41.314707,"lng": -72.926505},
      ],
      currMarkers: [],
      mapConfig: {
        zoom: 18,
        center: {lat: 41.314001, lng: -72.927009}
        // center: this.markers[0]
      }
    }
  },
  components: {
    MapLoader,
    ChildMarker
  }, 
  methods: {
    displayMarker: function(markerNumber) {
      this.currMarkers = [];
      this.currMarkers.push(this.markers[markerNumber]);
    }
  }, 
  mounted() {
    this.displayMarker(this.$store.getters.marker);
  }
}
</script>