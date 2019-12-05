<!-- MyMap.vue -->
<template>
  <div class="container">
    <h1>Map</h1>
    <div id="map"></div> 
  </div>
</template>

<script>
// import ChildMarker from './ChildMarker'
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  mounted() {
    this.initializeWrapper();
  },
  data(){
    return {
      markers: [
        {},
        {"lat": 41.312735,"lng": -72.926955},
        {"lat":41.315017 ,"lng": -72.927987},
        {"lat":41.314543,"lng": -72.927736},
        {"lat":41.314707,"lng": -72.926505},
      ],
      mapConfig: {
        zoom: 17,
        center: {lat: 41.314001, lng: -72.927009}
      },
      userLocation: null,
      map: null,
      currentMarker : Object,
      userMarker: null,
    }
  },
  components: {
    // ChildMarker
  }, 
  methods: {
    initializeWrapper() {
      GoogleMapsApiLoader({
      apiKey: this.$store.getters.apikey
      }).then((google) => {
        this.$store.dispatch('setActionGoogle', google); //set google
        const mapContainer = this.$el.querySelector("#map");
        const { Map } = this.$store.getters.google.maps
        // eslint-disable-next-line no-console
        console.log('this is map');
        // eslint-disable-next-line no-console
        console.log(Map);
        this.map = new Map(mapContainer, this.mapConfig);

        //put child markers here
        this.displayMarker(this.$store.getters.marker);

        this.getLocation();
      })
    },
    displayMarker: function(markerNumber) {
      //make a new marker for the location!
      const { Marker } = this.$store.getters.google.maps
          this.currentMarker = new Marker({
          position: this.markers[markerNumber],
          map: this.map,
          title: "Child marker!"
        })
    },
    getLocation() {
      if(navigator.geolocation) {
        var options = {timeout:10000};
        navigator.geolocation.watchPosition(this.showLocation, this.errorHandler, options);
        } else {
        alert("Sorry, browser does not support geolocation!");
        }
    },
    showLocation(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      this.userLocation = {"lat":latitude, "lng":longitude};

      //get rid of previous marker
      if(this.userMarker) {
        this.userMarker.setMap(null);
      }

      //Initialize Marker
      const { Marker } = this.$store.getters.google.maps
          this.userMarker = new Marker({
          position: this.userLocation,
          map: this.map,
          title: "Child marker!",
      })
    },
    errorHandler(err) {
      if(err.code == 1) {
        alert("Error: Access is denied!");
      } else if( err.code == 2) {
        alert("Error: Position is unavailable!");
      }
  }
  
  }
}
</script>

<style scoped>
#map {
  height: 100vh;
  width: 100%;
}
</style>