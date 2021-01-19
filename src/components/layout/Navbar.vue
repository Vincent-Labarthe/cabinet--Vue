<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" :class="{ 'navbar--hidden': !showNavbar }">
        <b-navbar-brand href="/" class="navbar-brand"><img src="icon/logo.svg" alt="" style="width: 14rem"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#page" nav-item-class="custom-navbar">Le Livre</b-nav-item>
            <b-nav-item href="#author">Les auteurs</b-nav-item>
            <router-link to="/cabinet-osteopathie-paris-15" @click="handleBookPage('cabinet')" class="nav-link">Cabinet d'Ostéopathie Paris 15</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button class="my-2 my-sm-0" variant="outline-info"><a href="https://www.adverbum.fr/editions-desiris/frederic-brigaud-et-josephine-lyon/repenser-l-equitation_6xb5n7paauhq.html">Acheter le livre</a></b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
      showNavbar: true,
    }
  },
  methods: {
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
