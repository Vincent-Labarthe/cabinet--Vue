<template>
  <div id="specialisation">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Mes spécialisations</h3>
      </div>
      <div class="spe-body">
        <a class="spe-img-box spe-img-box--1 d-none d-md-flex" href="" @click="selectedSpe('sport')"><p class=" ">Les Sportifs</p></a>
        <a class=" spe-img-box spe-img-box--2 d-none d-md-flex" href="" @click="selectedSpe('baby')"><p >Les Nourrissons / Bébés / Jeunes Enfants</p></a>
        <a class=" spe-img-box spe-img-box--3 d-none d-md-flex" href="" @click="selectedSpe('pregnant')"><p >Les Femmes Enceintes</p></a>
        <div class=" d-md-none">
        <div class="card m-2 shadow-sm" >
          <div class="card-body">
            <a class="card-link" style="color: #1b1e21" href="" @click="selectedSpe('sport')">
            <h5 class="card-title">Les Sportifs
              </h5>
            <p class="card-text">Toute perte de mobilité des articulations, des muscles, des ligaments ou des viscères peut provoquer un déséquilibre de l’état de santé. Celui-ci se manifeste chez le sportif par différents symptômes, de la simple contracture à la douleur chronique, altérant de toute façon les performances.</p></a>
          </div>
        </div>
        <div class="card m-2 shadow-sm">
          <div class="card-body">
            <a class="card-link" style="color: #1b1e21" href="" @click="selectedSpe('baby')">
              <h5 class="card-title">Les Nourrissons / Bébés / Jeunes Enfants
              </h5>
              <p class="card-text">L’ostéopathe peut dès la naissance effectuer un bilan sur le nouveau-né. Ses techniques et sa prise en charge sont sans risque et ne sont jamais douloureuses pour l’enfant.</p></a>
          </div>
        </div>
        <div class="card m-2 shadow-sm" >
          <div class="card-body">
            <a class="card-link" style="color: #1b1e21" href="" @click="selectedSpe('pregnant')">
              <h5 class="card-title">Les Femmes Enceintes
              </h5>
              <p class="card-text">De plus en plus de femmes choisissent l’ostéopathie pour favoriser leur chance de tomber enceinte, vivre une grossesse confortable, préparer l’accouchement ou pour accélérer la récupération après l’accouchement</p></a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Specialisation',
  methods:{
    selectedSpe(param){
      event.preventDefault()
      this.$emit('handle-spe', param)
    }
  }
}

</script>

<style scoped>


</style>
