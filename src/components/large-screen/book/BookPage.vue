<template>
  <div id="book-container" class="book-header">
  <Navbar v-if="scrollpx > 450" ></Navbar>
  <div id="page" >
    <div id="book-header">
      <h2 class="header--primary">Repenser l'équitation</h2>
      <h3 class="header--secondary"> Gestes, postures et performance</h3>
    </div>
    <div class="book-containter">
      <div class="container wrapper">
        <div class="row">
          <div class="col-sm">
            <BookCarousel></BookCarousel>
          </div>
          <div class="col-sm">
            <Resume></Resume>
            <div class="order-link">
            <b-button variant="info"><a href="https://fr.calameo.com/read/00021996329017519aa08" target="_blank">Feuilleter le livre</a></b-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <OrderLink class="m-5"></OrderLink>
    <AuthorPage></AuthorPage>
    <BookVideo v-show="false"></BookVideo>
  </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Resume from "@/components/large-screen/book/Resume";
import OrderLink from "@/components/large-screen/book/OrderLink";
import AuthorPage from "@/components/large-screen/book/AuthorPage";
import BookVideo from "@/components/large-screen/book/BookVideo";
import Navbar from "@/components/layout/Navbar";
import BookCarousel from "@/components/large-screen/book/BookCarousel";

export default {
  name: 'BookPage',
  components: {
    Resume,
    OrderLink,
    AuthorPage,
    BookVideo,
    Navbar,
    BookCarousel

  },
  data() {
    return {
      scrollpx: 0,
    }
  },
  methods: {
    handleScroll() {
      this.scrollpx = window.scrollY
      if (this.scrollpx > 300) {
        $("#image").css({
          'transform': 'scale(' + 1 + ')',
          'transition': 'all ' + 1.5 + 's'
        });
      }
      if (this.scrollpx > 1200) {
        $(".author__text").css({
          'transform': 'translate(' + 0 + ',' + 0 + ')',
          'transition': 'all ' + 1.5 + 's'
        })
        $(".profile-picture--box").css({
          'transform': 'translate(' + 0 + ')',
          'opacity': 1,
          'transition': 'all ' + 1.5 + 's'
        })
      }
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

</style>
