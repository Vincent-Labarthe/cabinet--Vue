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
            <h5>L'intérêt pour les sportifs </h5>
          </div>
          <div class="sport-card--body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.</p>
          </div>
        </div>
        <div class="sport-card">
          <div class="sport-card--header sport-card--header--2">
            <h5>Pour tous les niveaux </h5>
          </div>
          <div class="sport-card--body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.</p>
          </div>
        </div>
        <div class="sport-card">
          <div class="sport-card--header sport-card--header--3">
            <h5>la pratique ostéopathique chez les sportifs</h5>
          </div>
          <div class="sport-card--body">
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
