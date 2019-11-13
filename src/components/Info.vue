<template>
  <div>
    <p>Info Goes Here</p>
    <b-btn @click="incrementMarker">Next Marker</b-btn>
  </div>
</template>

<script>
export default {
  name: 'Info',
  methods: {
    incrementMarker () {
        this.$store.dispatch('incrementActionMarker', 1)
        this.$store.dispatch('incrementActionPage', 1)
      }
  }
}
</script>