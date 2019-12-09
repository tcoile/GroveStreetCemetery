<template>
  <div id="image-check">
    <h3>Do you see this place?</h3>
    <b-img thumbnail :src="'marker/' + marker + '.jpg'"></b-img>
  </div>
</template>

<script>
  export default {
    computed: {
      marker () {
        return this.$store.getters.marker
      }
    }
  }
</script>

<style scoped>
  #image-check {
    height: 70vh;
  }
</style>