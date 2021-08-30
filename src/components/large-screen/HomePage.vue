<template>
  <div id="home" class=" home">
  <div class="home-box d-none d-lg-flex">
    <router-link to="/cabinet-osteopathie-paris-15" @click="handleBookPage('cabinet')" class="home-box--1">
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
    </router-link>
    <router-link to="/repenser-lequitation" @click="handleBookPage('book')" class="home-box--2">
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
    </router-link>
</div>
    <div class="header-home d-flex h-100 text-center text-white pt-5 d-lg-none">
    <div class="cover-container d-flex vw-100 vh-100 p-3 mx-auto flex-column">
            <main class="px-3">
        <h1>Bienvenue sur site de Joséphine Lyon Ostéopathe D.O</h1>
        <p class="lead mt-5">Vous pouvez naviguer soit vers le site du Cabinet d'Ostéopathie Paris 15 soit vers le site dédié à l'ouvrage Repenser l'Equitation</p>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <router-link to="/cabinet-osteopathie-paris-15" @click="handleBookPage('cabinet')" class="nav-link " aria-current="page">Cabinet</router-link>
          <router-link to="/repenser-lequitation" @click="handleBookPage('book')" class="nav-link">Ouvrage</router-link>
        </nav>
      </main>
    </div>
  </div>
  </div>
</template>

<script>
import HomePageCabinet from "@/components/large-screen/cabinet/HomePageCabinet";
export default {
  components:
  HomePageCabinet,
  name: 'HomePage',
  methods: {
    handleBookPage(param) {
      this.$emit('handle-book', param)
    }
  }
}
</script>
