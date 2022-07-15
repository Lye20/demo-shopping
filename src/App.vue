<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
    methods: {
      handleScroll(event) {
        console.log(event)
      }
    }
  }
</script>

<style>
</style>
