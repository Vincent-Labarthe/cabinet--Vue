<template>
  <div id="cabinet">
    <CabinetNavBar v-if="scrollpx > 450" @handle-spe="displaySpe"></CabinetNavBar>
    <div id="page">
      <Cabinet></Cabinet>
      <Osteopathie></Osteopathie>
      <Specialisation v-if="spePage === ''" @handle-spe="displaySpe"></Specialisation>
      <OsteoSport v-if="spePage === 'sport'" @handle-spe="displaySpe"></OsteoSport>
      <OsteoBaby v-if="spePage === 'baby'" @handle-spe="displaySpe"></OsteoBaby>
      <OsteoPregnant v-if="spePage === 'pregnant'" @handle-spe="displaySpe"></OsteoPregnant>
      <Reasons></Reasons>
      <Formation></Formation>

    </div>
  </div>
</template>

<script>
import CabinetNavBar from "@/components/large-screen/cabinet/layout/CabinetNavBar";
import Cabinet from "@/components/large-screen/cabinet/Cabinet";
import Osteopathie from "@/components/large-screen/cabinet/Osteopathie";
import Specialisation from "@/components/large-screen/cabinet/Specialisation";
import OsteoSport from "@/components/large-screen/cabinet/OsteoSport";
import OsteoBaby from "@/components/large-screen/cabinet/OsteoBaby";
import OsteoPregnant from "@/components/large-screen/cabinet/OsteoPregnant";
import Reasons from "@/components/large-screen/cabinet/Reasons";
import Formation from "@/components/large-screen/cabinet/Formation";

export default {
  name: 'HomePageCabinet',
  components: {
    CabinetNavBar,
    Cabinet,
    Osteopathie,
    Specialisation,
    OsteoSport,
    OsteoBaby,
    OsteoPregnant,
    Reasons,
    Formation,
  },
  data() {
    return {
      scrollpx: 0,
      spePage: '',
    }
  },
  methods: {
    handleScroll() {
      this.scrollpx = window.scrollY;
    },
    displaySpe(param) {
      this.spePage = param;
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
