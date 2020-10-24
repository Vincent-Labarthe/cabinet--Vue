<template>
  <div id="home" class=" home">
    <div class="home-box">
      <a class="home-box--1" href="#cabinet" @click="handleBookPage('cabinet')">
        <div>
          <div class="home-modal">
            <h2>Joséphine Lyon</h2>
            <p class=" mb-5">Ostéopathe D.O</p>
            <p class="home__link home__link--1">Le Cabinet
              d'Ostéopathie</p>
          </div>
        </div>
      </a>
      <a class="home-box--2" href="#book-container" @click="handleBookPage('book')">
        <div>
          <div class="home-modal">
            <h2>Repenser l'équitation</h2>
            <p class="mb-5">J.Lyon & F.Brigaud</p>
            <p class="home__link home__link--2"> Découvrir le
              livre</p>
          </div>
        </div>
      </a>
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
