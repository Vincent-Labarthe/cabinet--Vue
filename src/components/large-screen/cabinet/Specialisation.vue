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
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></a>
          </div>
        </div>
        <div class="card m-2 shadow-sm">
          <div class="card-body">
            <a class="card-link" style="color: #1b1e21" href="" @click="selectedSpe('baby')">
              <h5 class="card-title">Les Nourrissons / Bébés / Jeunes Enfants
              </h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></a>
          </div>
        </div>
        <div class="card m-2 shadow-sm" >
          <div class="card-body">
            <a class="card-link" style="color: #1b1e21" href="" @click="selectedSpe('pregnant')">
              <h5 class="card-title">Les Femmes Enceintes
              </h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></a>
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
