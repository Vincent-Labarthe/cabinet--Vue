<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/" class="navbar-brand">Joséphine Lyon <br>  Ostéopathe D.O</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#page" nav-item-class="custom-navbar">Le Livre</b-nav-item>
            <b-nav-item href="#author">Les auteurs</b-nav-item>
            <b-nav-item-dropdown text="Mes Spécialisations" right>
            <router-link to="/repenser-lequitation" @click="handleBookPage('cabinet')" class="nav-link">Cabinet d'Ostéopathie Paris 15</router-link>

              <a class="dropdown-item" href="#osteo_sport" @click="selectedSpe('sport')">Ostéopathie du Sport</a>
              <a class="dropdown-item" href="#osteo_baby" @click="selectedSpe('baby')">Ostéopathie pédiatrique</a>
              <a class="dropdown-item" href="#osteo_pregnant" @click="selectedSpe('pregnant')">Ostéopathie de la femme enceinte</a>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Quand consulter ?" right>
              <a class="dropdown-item" href="#back_pain">Maux de dos</a>
              <!--  <a class="dropdown-item" href="#joint">Douleurs articulaire</a>
                <a class="dropdown-item" href="#stress">Stress & trouble du sommeil</a>
                <a class="dropdown-item" href="#trauma">Douleur post-trauma</a>-->
            </b-nav-item-dropdown>
            <b-nav-item href="#formation">Mes formations</b-nav-item>
            <b-nav-item href="#network">Mon Réseaux</b-nav-item>

            <router-link to="/cabinet-osteopathie-paris-15" @click="handleBookPage('cabinet')" class="nav-link">Cabinet d'Ostéopathie Paris 15</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button class="my-2 my-sm-0" variant="outline-info"><a href="https://www.adverbum.fr/editions-desiris/frederic-brigaud-et-josephine-lyon/repenser-l-equitation_6xb5n7paauhq.html">Acheter le livre</a></b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>

export default {
  name: 'Navbar',

}

</script>

<style scoped>


</style>
