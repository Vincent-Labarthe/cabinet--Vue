<template>
  <div id="app" >
    <LargeContainer v-if="windowWidth > 992"> </LargeContainer>
    <Footer v-if="scrollpx > 1000"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/layout/Footer";
import $ from 'jquery';
import LargeContainer from "@/components/large-screen/Large-Container";

export default {
  name: 'App',
  data() {
    return {
      scrollpx: 0,
      windowWidth:2000,
    }
  },
  components: {
    LargeContainer,
    Footer,
  },
  methods: {
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

#app {
  display: flex;
  flex-direction: column;
}
html {
  scroll-behavior: smooth;
}

</style>
