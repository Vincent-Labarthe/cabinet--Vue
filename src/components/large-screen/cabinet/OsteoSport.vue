<template>
  <div id="osteo_sport">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Mes spécialisations</h3>
        <p @click="handleBackSpe('')"><img class="icon icon-arrow--1" src="../../../../public/icon/left-arrow.svg" alt="icon téléphone">Retour</p>
      </div>
      <div class="spe-body">
        <h4>Les sportif</h4>

      </div>
    </div>  </div>
</template>

<script>

export default {
  name: 'OsteoSport',
methods:{
  handleBackSpe(param){
    event.preventDefault()
    this.$emit('handle-spe', param)
  }
}
}

</script>

<style scoped>


</style>
