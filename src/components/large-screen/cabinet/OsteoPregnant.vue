<template>
  <div id="osteo_pregnant">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Les femmes enceintes</h3>
        <p @click="handleBackSpe('')">
          <img class="icon icon-arrow-right icon-arrow--1" src="../../../../public/icon/left-arrow.svg"
               alt="icon téléphone">
          Retour
        </p>
        <div class="spe-pregnant">
          <div class="pregnant-card">
            <div class="pregnant-card--header pregnant-card--header--1">
              <h5>La grossesse</h5>
            </div>
            <div class="pregnant-card--body">
              <p>La prise en charge en ostéopathie permet d’optimiser les régulations neurovégétatives et d’agir ainsi sur les nausées,
                vomissements, troubles du transit, lombalgies et l’irritabilité fréquents à cette période</p>
            </div>
          </div>
          <div class="pregnant-card">
            <div class="pregnant-card--header pregnant-card--header--2">
              <h5>L'accouchement</h5>
            </div>
            <div class="pregnant-card--body">
              <p>L’accouchement demande une mobilisation totale de la force et de l’énergie de la future maman.
                Le travail de l’ostéopathe consiste à repérer toutes les dysfonctions qui entraînent des perturbations,
                et à agir ensuite pour diminuer les contraintes (tant chez la mère que chez l’enfant) liées au passage
                du fœtus dans le canal génito-pelvien lors de l’accouchement</p>
            </div>
          </div>
          <div class="pregnant-card">
            <div class="pregnant-card--header pregnant-card--header--3">
              <h5>l'allaitement</h5>
            </div>
            <div class="pregnant-card--body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OsteoPregnant',
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
