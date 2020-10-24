<template>
  <div class="cabinet--navbar">
    <div class="cabinet--navbar--left">
      <a href="#home"> <p class="cabinet--navbar--left cabinet--navbar--left--1">Cabinet d'Ostéopathie</p>
      <p class="cabinet--navbar--left cabinet--navbar--left--2">Joséphine LYon</p>
      <p class="cabinet--navbar--left cabinet--navbar--left--3">01.53.69.19.32</p>
      </a>
    </div>
    <div class="cabinet--navbar--center">
      <ul>
        <li>
          <a href="#cabinet" class="cabinet--navbar--center cabinet--navbar--center--link">Accueil</a>
        </li>
        <li>
          <a href="#osteopathie" class="cabinet--navbar--center cabinet--navbar--center--link">L'Ostéopathie</a>
        </li>


        <li>
          <div class="dropdown">
          <a class="cabinet--navbar--center cabinet--navbar--center--link " href="#specialisation" @click="selectedSpe('')">Mes Spécialisations
          </a>
            <div class="dropdown-content">
              <a class="cabinet--navbar--center--link--sub" href="#osteo_sport" @click="selectedSpe('sport')">Ostéopathie du Sport</a>
              <a class="cabinet--navbar--center--link--sub" href="#osteo_baby" @click="selectedSpe('baby')">Ostéopathie pédiatrique</a>
              <a class="cabinet--navbar--center--link--sub" href="#osteo_pregnant" @click="selectedSpe('pregnant')">Ostéopathie de la femme enceinte</a>
            </div>
          </div>

        </li>
        <li>
          <div class="dropdown">
            <a class="cabinet--navbar--center cabinet--navbar--center--link " href="#reasons" >Quand consulter ?
            </a>
            <div class="dropdown-content">
              <a class="cabinet--navbar--center--link--sub" href="#back_pain" >Maux de dos</a>
              <a class="cabinet--navbar--center--link--sub" href="#joint">Douleurs articulaire</a>
              <a class="cabinet--navbar--center--link--sub" href="#stress">Stress & trouble du sommeil</a>
              <a class="cabinet--navbar--center--link--sub" href="#trauma">Douleur post-trauma</a>

            </div>
          </div>

        </li>
        <li>
          <a href="#formation" class="cabinet--navbar--center cabinet--navbar--center--link">Formations</a>
        </li>
        <li>
          <a href="" class="cabinet--navbar--center cabinet--navbar--center--link">Infos pratiques</a>
        </li>
      </ul>

    </div>
    <div class="cabinet--navbar--right">
      <a href="https://www.doctolib.fr/osteopathe/paris/josephine-lyon">
        <p>Prendre Rendez-Vous</p>
      </a>
    </div>
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
