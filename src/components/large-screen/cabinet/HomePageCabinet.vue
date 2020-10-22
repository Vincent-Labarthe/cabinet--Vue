<template>
  <div id="cabinet">
    <CabinetNavBar v-if="scrollpx > 450" @handle-spe="displaySpe"></CabinetNavBar>
    <div id="page" >
      <Cabinet></Cabinet>
      <Osteopathie></Osteopathie>
      <Specialisation v-if="spePage === ''" @handle-spe="displaySpe"></Specialisation>
      <OsteoSport v-if="spePage === 'sport'" @handle-spe="displaySpe"></OsteoSport>
  </div>
  </div>
</template>

<script>
import CabinetNavBar from "@/components/large-screen/cabinet/layout/CabinetNavBar";
import Cabinet from "@/components/large-screen/cabinet/Cabinet";
import Osteopathie from "@/components/large-screen/cabinet/Osteopathie";
import Specialisation from "@/components/large-screen/cabinet/Specialisation";
import OsteoSport from "@/components/large-screen/cabinet/OsteoSport";

export default {
  name: 'HomePageCabinet',
  components: {
    CabinetNavBar,
    Cabinet,
    Osteopathie,
    Specialisation,
    OsteoSport
  },
  data() {
    return {
      scrollpx: 0,
      spePage:'',
    }
  },
  methods: {
    handleScroll() {
      this.scrollpx = window.scrollY;
    },
    displaySpe(param){
      this.spePage = param;
      console.log(this.spePage)

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
