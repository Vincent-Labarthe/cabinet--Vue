<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <p class="text-justify">2 square du Croisic 75015 Paris <br>
            Métro : Duroc - Falguière - Montparnasse <br>
            01.53.69.19.32.
          </p>

        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Spécialisation - Ostéopathe Paris 15</h6>
          <ul class="footer-links">
            <li><a href="#osteo_sport" @click="selectedSpe('sport')">Ostéopathie du Sport</a></li>
            <li><a href="#osteo_baby" @click="selectedSpe('baby')">Ostéopathie pédiatrique</a></li>
            <li><a href="#osteo_pregnant" @click="selectedSpe('pregnant')">Ostéopathie de la femme enceinte</a>
            </li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Formation - Ostéopathe Paris 15</h6>
          <ul class="footer-links">
            <li><a href="http://scanfcode.com/about/">Ceeso - Osteopathe D.O</a></li>
            <li><a href="http://scanfcode.com/contact/">DIU anatomie appliquée</a></li>
            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Ostéopathique de la périnatalité</a></li>
            <li><a href="http://scanfcode.com/privacy-policy/">Osteo Sport Pro</a></li>
            <li><a href="http://scanfcode.com/sitemap/">Empilement Articulaire Dynamique</a></li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Quand Consulter ? - Ostéopathe Paris 15</h6>
          <ul class="footer-links">
            <li><a href="http://scanfcode.com/category/c-language/">Maux de dos</a></li>
            <li><a href="http://scanfcode.com/category/front-end-development/">Douleurs articulaire</a></li>
            <li><a href="http://scanfcode.com/category/back-end-development/">Stress & trouble du sommeil</a></li>
            <li><a href="http://scanfcode.com/category/java-programming-language/">Douleur post-trauma</a></li>
          </ul>
        </div>

      </div>
      <hr>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
            <a href="https://goo.gl/maps/3az5qmenPu8jwyqS9">Web-Sante</a>.
          </p>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
          <p class="copyright-text">Contact 01.53.69.19.32. | <a href="https://www.doctolib.fr/osteopathe/paris/josephine-lyon">Prendre rendez-vous via DOCTOLIB</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  methods: {
    selectedSpe(param) {
      this.$emit('handle-spe', param)
    }
  }
}

</script>

<style scoped>


</style>
