<template>
  <div id="app" class="container-fluid" >
    <Modal v-if="isModalVisible"
           @close="closeModal"></Modal>
    <LargeContainer> </LargeContainer>

    <!--<LargeContainer v-if="windowWidth > 992"> </LargeContainer>
    <SmallContainer v-if="windowWidth < 992"></SmallContainer>-->
  </div>
</template>

<script>
import Modal from "@/components/layout/Modal";
import $ from 'jquery';
import LargeContainer from "@/components/large-screen/Large-Container";
// import SmallContainer from  "@/components/small-screen/Small-Container"

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
    LargeContainer,
    // SmallContainer,
    Modal
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
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
