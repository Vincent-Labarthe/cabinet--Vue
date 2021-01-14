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
                <b-tab title="Maux de dos" active title-link-class="tab-title">
                  <BackPain></BackPain>
                </b-tab>

                <b-tab title="Douleurs articulaires" title-link-class="tab-title" >
                  <ul> <b-card-text>
                    <p>Lombalgie / lumbago : douleur en bas du dos</p>
                  </b-card-text>
                    <b-button variant="primary">Lire notre dossier</b-button>
                    <b-card-text>
                      <p>Sciatique/Sciatalgie : douleur qui part du bas du dos ou de la fesse et irradie à la face postérieure de la jambe pouvant parfois aller jusqu’au pied.</p>
                    </b-card-text>
                    <b-card-text>
                      <p>Cruralgie : douleur qui part du bas du dos et qui irradie sur la face antérieure de cuisse jusqu’au genou.</p>
                    </b-card-text>
                    <b-card-text>
                      <p>Dorsalgie : douleur au milieu du dos, entre les omoplates.</p>
                    </b-card-text>
                    <b-button variant="primary">Lire notre dossier</b-button>
                    <b-card-text>
                      <p>Cervicalgie : douleur du cou et de la nuque.</p>
                    </b-card-text>
                    <b-button variant="primary">Lire notre dossier</b-button>
                  </ul>
                </b-tab>

                <b-tab title="Grossesse" title-link-class="tab-title" >
                  <ul> <b-card-text>
                    <p>Lombalgie / lumbago : douleur en bas du dos</p>
                  </b-card-text>
                    <b-button variant="primary">Lire notre dossier</b-button>
                    <b-card-text>
                      <p>Sciatique/Sciatalgie : douleur qui part du bas du dos ou de la fesse et irradie à la face postérieure de la jambe pouvant parfois aller jusqu’au pied.</p>
                    </b-card-text>
                    <b-card-text>
                      <p>Cruralgie : douleur qui part du bas du dos et qui irradie sur la face antérieure de cuisse jusqu’au genou.</p>
                    </b-card-text>
                    <b-card-text>
                      <p>Dorsalgie : douleur au milieu du dos, entre les omoplates.</p>
                    </b-card-text>
                    <b-button variant="primary">Lire notre dossier</b-button>
                    <b-card-text>
                      <p>Cervicalgie : douleur du cou et de la nuque.</p>
                    </b-card-text>
                    <b-button variant="primary">Lire notre dossier</b-button>
                  </ul>
                </b-tab>

                <b-tab title="Nourrissons, bébé" title-link-class="tab-title" >
                  <ul> <b-card-text>
                    <p>Lombalgie / lumbago : douleur en bas du dos</p>
                  </b-card-text>
                    <b-button variant="primary">Lire notre dossier</b-button>
                    <b-card-text>
                      <p>Sciatique/Sciatalgie : douleur qui part du bas du dos ou de la fesse et irradie à la face postérieure de la jambe pouvant parfois aller jusqu’au pied.</p>
                    </b-card-text>
                    <b-card-text>
                      <p>Cruralgie : douleur qui part du bas du dos et qui irradie sur la face antérieure de cuisse jusqu’au genou.</p>
                    </b-card-text>
                    <b-card-text>
                      <p>Dorsalgie : douleur au milieu du dos, entre les omoplates.</p>
                    </b-card-text>
                    <b-button variant="primary">Lire notre dossier</b-button>
                    <b-card-text>
                      <p>Cervicalgie : douleur du cou et de la nuque.</p>
                    </b-card-text>
                    <b-button variant="primary">Lire notre dossier</b-button>
                  </ul>
                </b-tab>

                <b-tab title="Enfants" title-link-class="tab-title" >
                  <ul> <b-card-text>
                    <p>Lombalgie / lumbago : douleur en bas du dos</p>
                  </b-card-text>
                    <b-button variant="primary">Lire notre dossier</b-button>
                    <b-card-text>
                      <p>Sciatique/Sciatalgie : douleur qui part du bas du dos ou de la fesse et irradie à la face postérieure de la jambe pouvant parfois aller jusqu’au pied.</p>
                    </b-card-text>
                    <b-card-text>
                      <p>Cruralgie : douleur qui part du bas du dos et qui irradie sur la face antérieure de cuisse jusqu’au genou.</p>
                    </b-card-text>
                    <b-card-text>
                      <p>Dorsalgie : douleur au milieu du dos, entre les omoplates.</p>
                    </b-card-text>
                    <b-button variant="primary">Lire notre dossier</b-button>
                    <b-card-text>
                      <p>Cervicalgie : douleur du cou et de la nuque.</p>
                    </b-card-text>
                    <b-button variant="primary">Lire notre dossier</b-button>
                  </ul>
                </b-tab>

              </b-tabs>
            </div>
          </div>
<!--          <a class="spe-img-box spe-img-box&#45;&#45;1 d-none d-md-flex" href="" @click="selectedReason('backPain')"><p class=" ">Les Sportifs</p></a>-->

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
  data() {
    return {
      }
  },
}

</script>

<style scoped>


</style>
