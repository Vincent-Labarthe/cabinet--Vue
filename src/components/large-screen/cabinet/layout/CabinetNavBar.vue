<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" :class="{ 'navbar--hidden': !showNavbar }">
        <b-navbar-brand href="/" class="navbar-brand"><img src="icon/logo.svg" alt="" style="width: 10rem"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#cabinet" nav-item-class="custom-navbar">Accueil</b-nav-item>
          <b-nav-item href="#osteopathie">L'Ostéopathie</b-nav-item>
          <b-nav-item-dropdown text="Mes Spécialisations" right>
            <a class="dropdown-item" href="#osteo_sport" @click="selectedSpe('sport')">Ostéopathie du Sport</a>
            <a class="dropdown-item" href="#osteo_baby" @click="selectedSpe('baby')">Ostéopathie pédiatrique</a>
            <a class="dropdown-item" href="#osteo_pregnant" @click="selectedSpe('pregnant')">Ostéopathie de la femme enceinte</a>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Quand consulter ?" right>
            <a class="dropdown-item" href="#back_pain">Maux de dos</a>
          <!--  <a class="dropdown-item" href="#joint">Douleurs articulaire</a>
            <a class="dropdown-item" href="#stress">Stress & trouble du sommeil</a>
            <a class="dropdown-item" href="#trauma">Douleur post-trauma</a>-->
          </b-nav-item-dropdown>
          <b-nav-item href="#formation">Mes formations</b-nav-item>
          <b-nav-item href="#network">Mon Réseaux</b-nav-item>

          <router-link to="/repenser-lequitation" @click="handleBookPage('cabinet')" class="nav-link">Repenser l'équitation</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-button class="my-2 my-sm-0" variant="outline-info"><a href="https://www.doctolib.fr/osteopathe/paris/josephine-lyon">Prendre renndez-vous via Doctolib</a></b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'CabinetNavBar',
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      navigations: {
        navigationCabinet:
           [
            {link: '/', page: 'Accueil' },
            { link: '/osteopathie', page: 'L\'Ostéopathie' },
            { link: '/votre-osteopathe', page: 'Votre Ostéopathe' },
            { link: '/pour-qui', page: 'Pour qui ?', isDropDown:true },
            { link: '/la-consultation', page: 'La consultation' },
            { link: '/faq', page: 'FAQ' },
            { link: 'https://doctolib.fr', page: 'Prendre RDV' },
            { link: 'https://doctolib.fr', page: 'Web Sante' },
           ],
        navigationBook:
            [
              {link: '/', page: 'Accueil' },
              { link: '/osteopathie', page: 'L\'Ostéopathie' },
              { link: '/votre-osteopathe', page: 'Votre Ostéopathe' },
              { link: '/pour-qui', page: 'Pour qui ?', isDropDown:true },
              { link: '/la-consultation', page: 'La consultation' },
              { link: '/faq', page: 'FAQ' },
              { link: 'https://doctolib.fr', page: 'Prendre RDV' },
              { link: 'https://doctolib.fr', page: 'Web Sante' },
            ],
      }
    }
  },
  methods: {
    selectedSpe(param) {
      this.$emit('handle-spe', param)
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 120) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}

</script>

<style scoped>


</style>
