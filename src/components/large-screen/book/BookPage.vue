<template>
  <div id="book-container" class="book-header">
    <Navbar></Navbar>
    <div id="videoDiv2">
      <video id="video2"  src="video/video_header.mov" autoplay loop playsinline muted></video>
      <div id="videoMessage2" class="styling">
        <h2 class="header--primary">Repenser l'équitation</h2>
        <h3 class="header--secondary"> Gestes, postures et performance</h3>
            <a href="#page" class="cd-next"><img src="icon/down-arrow.svg" alt="" class="down-arrow loop"></a>
      </div>
    </div>
  <div id="page" >
    <h3 class="header--tertiaire" > Quel cavalier n’a pas rêvé d’une pratique de l’équitation fluide, efficace, sans heurt et sans douleurs ?</h3>
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
    <Footer></Footer>
  </div>
  </div>
</template>

<script>
import Resume from "@/components/large-screen/book/Resume";
import OrderLink from "@/components/large-screen/book/OrderLink";
import AuthorPage from "@/components/large-screen/book/AuthorPage";
import Navbar from "@/components/layout/Navbar";
import BookCarousel from "@/components/large-screen/book/BookCarousel";
import { loop } from '../../../../public/js/animate';
import Footer from "@/components/layout/Footer";
export default {
  name: 'BookPage',
  components: {
    Resume,
    OrderLink,
    AuthorPage,
    Navbar,
    BookCarousel,
    Footer
  },
  mounted(){
    loop('.loop');
  }
}

</script>

<style>

</style>
