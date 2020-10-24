<template>
  <div id="home" class="home">
    <div class="home-box">
      <div class="home-box--1">
        <div class="home-modal">
          <h2>Joséphine Lyon</h2>
          <p class=" mb-5">Ostéopathe D.O</p>
          <a class="home__link home__link--1" @click="handleBookPage('cabinet')" href="#cabinet">Le Cabinet
            d'Ostéopathie</a>
        </div>
      </div>
      <div class="home-box--2">
        <div class="home-modal">
          <h2>Repenser l'équitation</h2>
          <p class="mb-5">J.Lyon & F.Brigaud</p>
          <a class="home__link home__link--2" @click="handleBookPage('book')" href="#book-container"> Découvrir le
            livre</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  methods: {
    handleBookPage(param) {
      this.$emit('handle-book', param)
    }
  }
}

</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
