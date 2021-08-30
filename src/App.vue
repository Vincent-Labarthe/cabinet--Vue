<template>
  <div id="app" class="container-fluid custom-container" >
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    switchPage(param) {
      this.page = param
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
