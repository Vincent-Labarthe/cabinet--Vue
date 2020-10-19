<template>
  <div id="app" class="container-fluid">
    <BurgerMenu></BurgerMenu>
    <Navbar v-if="scrollpx > 450 || windowWidth < 992"></Navbar>
    <HomePage @handle-book="switchPage"></HomePage>
    <BookPage v-if="page === 'book'"></BookPage>
    <Footer v-if="scrollpx > 1000"></Footer>
  </div>
</template>

<script>
import HomePage from "@/components/home-page/HomePage";
import BurgerMenu from "@/components/menu/BurgerMenu";
import BookPage from "@/components/book/BookPage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import $ from 'jquery'

export default {
  name: 'App',
  data() {
    return {
      page: '',
      scrollpx: 0,
      windowWidth:'',
    }
  },
  components: {
    HomePage,
    BurgerMenu,
    BookPage,
    Navbar,
    Footer
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
      console.log( this.windowWidth);
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
