<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Joséphine Lyon <br>  Ostéopathe D.O</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav justify-content-center">
          <li class="nav-item active">
            <a class="nav-link" href="#cabinet">Accueil </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#osteopathie">L'Ostéopathie</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"  role="button" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Mes Spécialisations
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#osteo_sport" @click="selectedSpe('sport')">Ostéopathie du Sport</a>
              <a class="dropdown-item" href="#osteo_baby" @click="selectedSpe('baby')">Ostéopathie pédiatrique</a>
              <a class="dropdown-item" href="#osteo_pregnant" @click="selectedSpe('pregnant')">Ostéopathie de la femme enceinte</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"  role="button"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Quand consulter ?
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#back_pain">Maux de dos</a>
              <a class="dropdown-item" href="#joint">Douleurs articulaire</a>
              <a class="dropdown-item" href="#stress">Stress & trouble du sommeil</a>
              <a class="dropdown-item" href="#trauma">Douleur post-trauma</a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#formation">Formations</a>
          </li>
<!--          <li class="nav-item">
            <a class="nav-link" href="#">Infos pratiques</a>
          </li>-->
          <li class="nav-item">

            <a class="nav-link btn btn-ligh" style="background-color: #E8E8E8" href="https://www.doctolib.fr/osteopathe/paris/josephine-lyon">Prendre rendez-vous via Doctolib</a>
          </li>

        </ul>
      </div>
    </nav>
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
