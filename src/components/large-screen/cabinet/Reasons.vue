<template>
  <div id="reasons">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Quand consulter ? - Cabinet d'Ostéopathie Paris 15</h3>
      </div>
      <div class="container wrapper">
        <div>
          <div>
            <div>
              <b-tabs content-class="m-3">
                <b-tab id="back_pain" title="Maux de dos" active title-link-class="tab-title">
                  <BackPain></BackPain>
                </b-tab>
                <b-tab id="back_pain" title="Douleur articulaire" active title-link-class="tab-title">
                  <JoinPain></JoinPain>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackPain from "@/components/large-screen/cabinet/reasons/BackPain";
import JoinPain from "@/components/large-screen/cabinet/reasons/JoinPain";
export default {
  components: {
    BackPain,
    JoinPain,
  },
  name: 'Reasons',
}

</script>

<style scoped>


</style>
