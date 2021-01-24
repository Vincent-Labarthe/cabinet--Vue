<template>
  <div id="cabinet">
    <CabinetNavBar @handle-spe="displaySpe" @handle-reason="displayReason"></CabinetNavBar>
    <div id="page">
      <Cabinet></Cabinet>
      <Osteopathie></Osteopathie>
      <Specialisation v-if="spePage === ''" @handle-spe="displaySpe"></Specialisation>
      <OsteoSport v-if="spePage === 'sport'" @handle-spe="displaySpe"></OsteoSport>
      <OsteoBaby v-if="spePage === 'baby'" @handle-spe="displaySpe"></OsteoBaby>
      <OsteoPregnant v-if="spePage === 'pregnant'" @handle-spe="displaySpe"></OsteoPregnant>
      <Reasons :navBarData="reasonPage"></Reasons>
      <Formation></Formation>
      <Network></Network>
      <Footer></Footer>
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
import Network from "@/components/large-screen/cabinet/Network";
import Footer from "@/components/layout/Footer";

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
    Network,
    Footer
  },
  props: {
    parentData: Object,
  },
  data() {
    return {
      scrollpx: 0,
      spePage: '',
      reasonPage:''
    }
  },
  methods: {
    handleScroll() {
      this.scrollpx = window.scrollY;
    },
    displaySpe(param) {
      this.spePage = param;
    },
    displayReason(param) {
      this.reasonPage = param;
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
