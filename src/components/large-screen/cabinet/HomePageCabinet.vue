<template>
  <div id="cabinet">
    <CabinetNavBar v-if="scrollpx > 450"></CabinetNavBar>
    <div id="page" >
      <Cabinet></Cabinet>
      <Osteopathie></Osteopathie>
      <Specialisation></Specialisation>
  </div>
  </div>
</template>

<script>
import CabinetNavBar from "@/components/large-screen/cabinet/layout/CabinetNavBar";
import Cabinet from "@/components/large-screen/cabinet/Cabinet";
import Osteopathie from "@/components/large-screen/cabinet/Osteopathie";
import Specialisation from "@/components/large-screen/cabinet/Specialisation";

export default {
  name: 'HomePageCabinet',
  components: {
    CabinetNavBar,
    Cabinet,
    Osteopathie,
    Specialisation
  },
  data() {
    return {
      scrollpx: 0,
    }
  },
  methods: {
    handleScroll() {
      this.scrollpx = window.scrollY
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}

</script>

<style scoped>


</style>
