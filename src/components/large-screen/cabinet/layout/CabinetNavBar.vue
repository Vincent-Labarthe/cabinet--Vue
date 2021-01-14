<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#home" class="navbar-brand">Joséphine Lyon <br>  Ostéopathe D.O</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#cabinet" nav-item-class="custom-navbar">Accueil</b-nav-item>
          <b-nav-item href="#osteopathie">L'Ostéopathie</b-nav-item>
          <b-nav-item-dropdown text="Mes Spécialisations" right>
            <a class="dropdown-item" href="#osteo_sport" @click="selectedSpe('sport')">Ostéopathie du Sport</a>
            <a class="dropdown-item" href="#osteo_baby" @click="selectedSpe('baby')">Ostéopathie pédiatrique</a>
            <a class="dropdown-item" href="#osteo_pregnant" @click="selectedSpe('pregnant')">Ostéopathie de la femme enceinte</a>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Quand consulter ?" right>
            <a class="dropdown-item" href="#back_pain">Maux de dos</a>
            <a class="dropdown-item" href="#joint">Douleurs articulaire</a>
            <a class="dropdown-item" href="#stress">Stress & trouble du sommeil</a>
            <a class="dropdown-item" href="#trauma">Douleur post-trauma</a>
          </b-nav-item-dropdown>
          <b-nav-item href="#formation">Mes formations</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-button class="my-2 my-sm-0" variant="outline-info"><a href="https://www.doctolib.fr/osteopathe/paris/josephine-lyon">Prendre renndez-vous via Doctolib</a></b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'CabinetNavBar',
  methods: {
    selectedSpe(param) {
      this.$emit('handle-spe', param)
    }
  }
}

</script>

<style scoped>


</style>
