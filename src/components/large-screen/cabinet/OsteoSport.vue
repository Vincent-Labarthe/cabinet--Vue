<template>
  <div id="osteo_sport">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Les sportifs</h3>
        <p @click="handleBackSpe('')"><img class="icon icon-arrow-right icon-arrow--1" src="../../../../public/icon/left-arrow.svg" alt="icon téléphone">Retour</p>
      </div>
      <div class="spe-sport">
        <div class="sport-card">
          <div class="sport-card--header sport-card--header--1">
            <h5>Intervention préventive </h5>
          </div>
          <div class="sport-card--body">
            <p>Votre ostéopathe par un examen complet de la tête aux pieds, sait détecter les blocages ,les raideurs,
              les contractures, les ressauts, les débuts d’inflammation pouvant être à l’origine de pathologies typiques du sportifs
              (tendinite, périostite, essuie-glace...) voir de blessures (déchirures, entorse, fissure méniscale, claquage...)...
              En supprimant ces dysfonctionnements, votre ostéopathe favorise l’aisance dans la pratique sportive et facilite la reprise.</p>
          </div>
        </div>
        <div class="sport-card">
          <div class="sport-card--header sport-card--header--2">
            <h5>Intervention curative </h5>
          </div>
          <div class="sport-card--body">
            <p>Si la douleur est présente, il n’est pas trop tard pour intervenir. Votre ostéopathe sait surrpimer la plupart
              des douleurs d’origine mécanique et accélère la guérison en cas d’inflammation (tendinite, périostite, fasciite plantaire,
              syndrome fémoro-patellaire...). En cas de blessure, le rétablissement est facilité par l’ostéopathie en complément du traitement médical et kinésithérapique.</p>
          </div>
        </div>
        <div class="sport-card">
          <div class="sport-card--header sport-card--header--3">
            <h5>Optimisation et amélioration de la performance sportive</h5>
          </div>
          <div class="sport-card--body">
            <p>Votre ostéopathe vous propose de corriger vos postures et votre gestuelle durant la pratique sportive (formée au concepts ead).
              Elle vous expliquera les axes de mouvements à respecter, les limites de mouvements à ne pas dépasser et
              par quels moyens améliorer l’endurance, la fluidité, la force, la précision, l’amplitude de mouvement par un protocole d’entrainement adapté.
              Cette démarche vise à concilier performance et préservation du coprs.</p>
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
