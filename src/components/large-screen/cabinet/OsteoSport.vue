<template>
  <div id="osteo_sport">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Les sportifs</h3>
        <p @click="handleBackSpe('')"><img class="icon icon-arrow-right icon-arrow--1"
                                           src="../../../../public/icon/left-arrow.svg" alt="icon téléphone">Retour</p>
      </div>
      <div class="spe-sport">
        <div class="sport-card">
          <div class="sport-card--header sport-card--header--1">
            <h5>Intervention préventive </h5>
          </div>
          <div class="sport-card--body">
            <p>L’ostéopathe dépiste et traite les dysfonctions de l’organisme avant même qu’elles ne se manifestent (par une douleur ou une raideur).
              <br> <br>
              Lorsque ces dysfonctions persistent, elles fragilisent le corps, altèrent le niveau de performance et favorisent l’apparition de blessures.</p>
          </div>
        </div>
        <div class="sport-card">
          <div class="sport-card--header sport-card--header--2">
            <h5>Intervention curative </h5>
          </div>
          <div class="sport-card--body">
            <p> L'ostéopathie permet de rééquilibrer de façon très précise les axes articulaires qui ont été perturbés par un choc,
              après fractures, entorses ou une opérations chirurgicales pour aider à une bonne cicatrisation. <br> <br>
               Elle permmet aussi d'effacer les traumatismes même anciens.</p>
          </div>
        </div>
        <div class="sport-card">
          <div class="sport-card--header sport-card--header--3">
            <h5>Optimisation et amélioration de la performance sportive</h5>
          </div>
          <div class="sport-card--body">
            <p>L’ostéopathie contribue également à améliorer les performances physiques et donc sportives : en veillant à entretenir une mobilité optimale
              de l’ensemble des articulations et des chaines musculaires, un traitement ostéopathique régulier permet de prendre davantage conscience de son
              corps et des signaux qu’il nous envoie, auxquels nous sommes parfois inattentifs.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OsteoSport',
  methods: {
    handleBackSpe(param) {
      event.preventDefault()
      this.$emit('handle-spe', param)
    }
  }
}

</script>

<style scoped>


</style>
