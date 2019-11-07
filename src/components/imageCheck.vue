<template>
  <div class="container">
    <h3>Do you see this location? {{ whichMarker }}</h3>
    <div class="container col-8">
      <b-img thumbnail :src="'/marker' + whichMarker + '.jpg'"></b-img>
      <div class="row">
       <b-button>No, back to map.</b-button>
       <b-button>Yes!</b-button>
     </div>
    </div>     
  </div>
</template>

<script>
export default {
  name: 'imageCheck',
  methods: {

  },

  props: {
    whichMarker: Number
  }
}
</script>