<template>
  <div id="book_page">
    <div>
      <h2 class="header--primary">Repenser l'équitation</h2>
      <h3 class="header--secondary"> Gestes, postures et performance</h3>
    </div>
    <div class="book-containter">
      <Cover></Cover>
      <Resume></Resume>
      <HomePictureLeft></HomePictureLeft>
    </div>
    <OrderLink></OrderLink>
    <AuthorPage></AuthorPage>
    <BookVideo></BookVideo>
  </div>
</template>

<script>
import $ from 'jquery'
import Cover from "@/components/book/Cover";
import Resume from "@/components/book/Resume";
import HomePictureLeft from "@/components/book/HomePictureLeft";
import OrderLink from "@/components/book/OrderLink";
import AuthorPage from "@/components/book/AuthorPage";
import BookVideo from "@/components/book/BookVideo";

export default {
  name: 'BookPage',
  components: {
    Cover,
    Resume,
    HomePictureLeft,
    OrderLink,
    AuthorPage,
    BookVideo
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
      if (this.scrollpx > 1250) {
        console.log(this.scrollpx)
        $("#order_link").css({
          'transform': 'scale(' + 1 + ',' + 2 + ')',
          'transition': 'all ' + 1 + 's'
        })
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
