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
import $ from "jquery";

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
    Formation
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
      if (this.scrollpx > 2862) {
        $(".reason-img").css({
          'transform': 'translate(' + 0 + ',' + 0 + ')',
          'transition': 'all ' + 1.5 + 's'
        })
        $(".reason-text").css({
          'transform': 'translateY(' + 0 + ')',
          'transition': 'all ' + 1.5 + 's'
        })
      } else {
        $(".reason-img").css({
          'transform': 'translate(-' + 50 + 'px,-' + 20 + 'px)',
          'transition': 'all ' + 1.5 + 's',
        })
        $(".reason-text").css({
          'transform': 'translateY(-' + 50 + 'px)',
          'transition': 'all ' + 1.5 + 's'
        })
      }
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
