<template>
  <div id="app" class="container-fluid">
    <BurgerMenu></BurgerMenu>
    <Navbar v-if="scrollpx > 450"></Navbar>
    <HomePage @handle-book="switchPage"></HomePage>
    <BookPage v-if="page === 'book'"></BookPage>
    <Footer></Footer>
  </div>
</template>

<script>
import HomePage from "@/components/home-page/HomePage";
import BurgerMenu from "@/components/menu/BurgerMenu";
import BookPage from "@/components/book/BookPage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default {
  name: 'App',
  data() {
    return {
      page: '',
      scrollpx: 0,
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
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
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
