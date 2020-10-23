<template>
  <div style="width: 100vw">
    <BurgerMenu v-show="false"></BurgerMenu>
    <HomePage @handle-book="switchPage"></HomePage>
    <BookPage v-if="page === 'book'"></BookPage>
    <HomePageCabinet v-if="page === 'cabinet'"> </HomePageCabinet>
  </div>

</template>

<script>
import HomePage from "@/components/large-screen/HomePage";
import BookPage from "@/components/large-screen/book/BookPage";
import HomePageCabinet from "@/components/large-screen/cabinet/HomePageCabinet";
import BurgerMenu from "@/components/large-screen/menu/BurgerMenu";

export default {
  name: 'LargeContainer',
  components: {
    BookPage,
    HomePage,
    HomePageCabinet,
    BurgerMenu
  },
  data() {
    return {
      page: '',
      scrollpx:''
    }
  },methods: {
    switchPage(param) {
      this.page = param
    },
    handleScroll() {
      this.scrollpx = window.scrollY
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

<style scoped>


</style>
