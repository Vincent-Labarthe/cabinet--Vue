<template>
  <div id="book_page">
    <div>
      <h2 class="header--primary">Repenser l'équitation</h2>
      <h3 class="header--secondary"> Gestes, postures et performance</h3>
    </div>
    <div class="book-containter">
      <div class="cover">
        <img class="cover__img" src="../../../public/img/repenser_equitation_cover.jpg" alt="">
        <div>
          <img class="download__icon" src="../../../public/icon/file.svg" alt="">
          <p>Télécharger la revue de presse</p></div>

      </div>
      <div class="resume">
        <p class="resume__text">Quel cavalier n’a pas rêvé d’une pratique de l’équitation fluide, efficace, sans heurt
          et
          sans douleurs ?
          <br><br>
          Un tel objectif demande une triple démarche :
          <br><br>
          – comprendre les tenants et aboutissants de l’équitation pour davantage de maîtrise et ne pas laisser un
          hasard
          chaotique dicter son apprentissage ;
          <br><br>
          – connaître les moyens d’interagir efficacement avec sa monture en toute situation ;
          <br><br>
          – comprendre la gestuelle à mettre en œuvre afin d’optimiser la relation cavalier/cheval mais aussi de
          préserver
          son corps et celui de sa monture, en connaissant ses limites.
          <br><br>
          L’équitation est loin d’être un sport ordinaire : être en harmonie avec son cheval et gagner en performance
          nécessitent de la finesse et de la subtilité. Cet ouvrage vous donne les clés pour analyser votre gestuelle,
          prendre conscience des gestes adaptés et inadaptés, et trouver des solutions pour corriger les erreurs.
          <br><br>
          La lecture de ce livre changera votre regard sur l’équitation et votre pratique, qui ne sera plus jamais la
          même.
        </p>
      </div>
      <div class="picture">
        <img id="image" src="../../../public/img/horse_home_book.jpg" alt="">
      </div>
    </div>
    <div class="order-link">
      <a href="https://www.adverbum.fr/editions-desiris/frederic-brigaud-et-josephine-lyon/repenser-l-equitation_6xb5n7paauhq.html">
        Commander le livre
      </a>
    </div>

  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'BookPage',
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
      } else {
        $("#image").css({
          'transform': 'scale(' + 0.5 + ')',
          'transition': 'all ' + 1.5 + 's'
        });
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
