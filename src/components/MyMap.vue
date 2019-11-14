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
          v-for="(marker,i) in markers"
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
  props: {
    markers: Array
  },
  data(){
    return {
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
  }
}
</script>