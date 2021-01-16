<template>
  <div id="app" class="container-fluid custom-container" >
    <router-view></router-view>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'App',
  data() {
    return {
      scrollpx: 0,
      windowWidth: $(window).width(),
      isModalVisible: true,

    }
  },
  components: {
  },
  methods: {
    switchPage(param) {
      this.page = param
    },
    handleScroll() {
      this.scrollpx = window.scrollY;
    },
    onResize(){
      this.windowWidth = $(window).width();
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.onResize);

  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.onResize);
  },
}
</script>

<style>

html {
  scroll-behavior: smooth;
}

</style>
