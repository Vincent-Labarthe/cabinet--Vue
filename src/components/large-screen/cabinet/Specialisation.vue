<template>
  <div id="specialisation">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Mes spécialisations</h3>
      </div>
      <div class="spe-body">

        <a class="spe-img-box spe-img-box--1" href="" @click="selectedSpe('sport')"><p class=" ">Les Sportifs</p></a>
        <a class=" spe-img-box spe-img-box--2" href=""><p >Les Nourrissons / Bébés / Jeunes Enfants</p></a>
        <a class=" spe-img-box spe-img-box--3" href=""><p >Les Femmes Enceintes</p></a>
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
