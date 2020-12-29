<template>
  <div style="width: 100vw">
    <Header v-if="displayHeader === false"></Header>
    <NavbarSm  v-if="displayHeader === true"></NavbarSm>
    
  </div>

</template>

<script>
import Header from "@/components/small-screen/Header";
import NavbarSm from "@/components/small-screen/cabinet/Navbar-sm";

export default {
  name: 'HomePageSm',
  components: {
    Header,
    NavbarSm
  },
  data() {
    return {
      displayHeader: true,
      scrollPx: 0,
      st: 0
    }
  },
  methods: {
    handleScroll() {
      this.st = window.scrollY;
      if (this.st > this.scrollPx) {
        this.displayHeader = false
      } else {
        this.displayHeader = true
      }
      this.scrollPx = this.st;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);

  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}

</script>

<style scoped>

</style>
