<template>
  <div>
    <h2>{{counter}} is this</h2>
    <button @click="incrementCounter">increment counter</button>
  </div>
</template>

<script>
  export default {
    methods: {
      incrementCounter () {
        this.$store.dispatch('incrementAction', 1)
      }
    },
    computed: {
      counter () {
        return this.$store.getters.counter
      }
    }
  }
</script>

<style>
</style>