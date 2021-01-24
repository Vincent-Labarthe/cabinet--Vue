<template>
  <div id="reasons">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Quand consulter ? - Cabinet d'Ostéopathie Paris 15</h3>
      </div>
      <div  class="container wrapper">
        <div v-if="navBarData !== ''">
          <p @click="resetReason"><img class="icon icon-arrow-right icon-arrow--1" src="../../../../public/icon/left-arrow.svg" alt="icon téléphone">Les autres motifs </p>
        </div>
        <div>
          <div>
            <div>
              <b-tabs content-class="m-3">
                <b-tab v-for="reason in reasonSelected" :key="reason.id" id="back_pain" :title="reason.title" active title-link-class="tab-title">
                  <ReasonModal :parentData="reason.category" ></ReasonModal>
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
import ReasonModal from "@/components/large-screen/cabinet/reasons/ReasonModal";
export default {
  components: {
    ReasonModal
  },
  name: 'Reasons',
  props: {
    navBarData: String,
  },
  methods: {
    resetReason() {
      this.navBarData=''
    }
  },
  data() {
    return {
      reasons: [
        {
          title:'Maux de dos',
          category: 'backPain'
        },
        {
          title:'Douleur articulaire',
          category: 'jointPain'
        },
        {
          title:'Stress et troubles du sommeil',
          category: 'stress'
        },
        {
          title:'Bébé et enfant',
          category: 'baby'
        },
      ]
    }
  },
  computed: {
    reasonSelected() {
      if(this.navBarData !== ''){
        return this.reasons.filter(p => p.category === this.navBarData);
      }
      return this.reasons
    }
  }
}

</script>

<style scoped>


</style>
