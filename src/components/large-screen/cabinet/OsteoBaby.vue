<template>
  <div id="osteo_baby">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Les nourrissons - bébés - enfants</h3>
        <p @click="handleBackSpe('')">
          <img class="icon icon-arrow-right icon-arrow--1" src="../../../../public/icon/left-arrow.svg"
               alt="icon téléphone">
          Retour
        </p>
        <div class="spe-baby">
          <div class="baby-card">
            <div class="baby-card--header baby-card--header--1">
              <h5>Le nourrisson</h5>
            </div>
            <div class="baby-card--body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.</p>
            </div>
          </div>
          <div class="baby-card">
            <div class="baby-card--header baby-card--header--2">
              <h5>L'enfant</h5>
            </div>
            <div class="baby-card--body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                deleniti explicabo facilis magni nam nobis obcaecati omnis sed tempore veritatis.</p>
            </div>
          </div>
          <div class="baby-card">
            <div class="baby-card--header baby-card--header--3">
              <h5>L'adolescent</h5>
            </div>
            <div class="baby-card--body">
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
  name: 'OsteoBaby',
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
