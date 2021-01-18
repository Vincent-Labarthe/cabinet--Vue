<template>
  <div id="reasons">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Quand consulter ? </h3>
      </div>
      <div class="container wrapper">
        <div>
          <div>
            <div>
              <b-tabs content-class="m-3">
                <b-tab id="back_pain" title="Maux de dos" active title-link-class="tab-title">
                  <BackPain></BackPain>
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
export default {
  components: {
    BackPain,
  },
  name: 'Reasons',
}

</script>

<style scoped>


</style>
