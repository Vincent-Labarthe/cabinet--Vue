<template>
  <div id="home" class=" home">
  <div class="home-box d-none d-lg-flex">
  <a class="home-box--1" href="#cabinet" @click="handleBookPage('cabinet')">
    <div>
      <div class="home-modal">
        <div class="home-square">
          <h2>Joséphine Lyon</h2>
          <p class=" mb-5">Ostéopathe D.O</p>
          <p class="home__link home__link--1">Le Cabinet
            d'Ostéopathie</p>
        </div>

      </div>
    </div>
  </a>
  <a class="home-box--2" href="#book-container" @click="handleBookPage('book')">
    <div>
      <div class="home-square">
        <div>
          <h2>Repenser l'équitation</h2>
          <p class="mb-5">J.Lyon & F.Brigaud</p>
          <p class="home__link home__link--2"> Découvrir le
            livre</p>
        </div>

      </div>
    </div>
  </a>
</div>
    <div class="header-home d-flex h-100 text-center text-white pt-5 d-lg-none">
    <div class="cover-container d-flex vw-100 vh-100 p-3 mx-auto flex-column">
            <main class="px-3">
        <h1>Bienvenue sur site de Joséphine Lyon Ostéopathe D.O</h1>
        <p class="lead mt-5">Vous pouvez naviguer soit vers le site du Cabinet d'Ostéopathie Paris 15 soit vers le site dédié à l'ouvrage Repenser l'Equitation</p>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <a class="nav-link " aria-current="page" href="#cabinet" @click="handleBookPage('cabinet')">Cabinet</a>
          <a class="nav-link" href="#book-container" @click="handleBookPage('book')">Ouvrage</a>
        </nav>
      </main>
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
