<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/" class="navbar-brand">Joséphine Lyon <br>  Ostéopathe D.O</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-col lapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#page">Le Livre</b-nav-item>
          <b-nav-item href="#author">Les auteurs</b-nav-item>
          <router-link to="/cabinet-osteopathie-paris-15" @click="handleBookPage('cabinet')" class="nav-link">Cabinet d'Ostéopathie Paris 15</router-link>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button class="my-2 my-sm-0" variant="outline-info"><a href="https://www.adverbum.fr/editions-desiris/frederic-brigaud-et-josephine-lyon/repenser-l-equitation_6xb5n7paauhq.html">Commander le livre</a></b-button>
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
