<template>
  <div id="network">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Mon Réseaux</h3>
      </div>
      <div class="container wrapper">
      </div>
      <carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="9">
        <slide :index="0">
          <div class=" card-home card-network">
            <div class="card-body text-center">
              <div class="h-caption"><h4 class="card-title">Gynécologue, obstétricien, échographiste</h4></div>
              <p class="card-text-network"> Docteur Romain Guilherme vous reçoit au cabinet médical Croisic Duroc,
                2 square du Croisic 75015 Paris (Doctolib, 01 44 93 58 47) et à la maternité de l’hôpital Cochin Port-Royal (01 58 41 39 39)</p>
              <b-button variant="light"><a style="color:grey" href="https://www.mon-gyneco.com/">Site internet</a></b-button>
            </div>
          </div>
        </slide>
        <slide :index="1">
          <div class=" card-home card-network">
            <div class="card-body text-center">
              <div class="h-caption"><h4 class="card-title">Psychologue clinicienne et psychothérapeute</h4></div>
              <p class="card-text-network">Deborah Mlockier vous reçoit au cabinet médical Croisic Duroc,
                2 square du Croisic 75015 Paris (doctolib, 06 80 46 13 80)</p>
              <b-button variant="light"><a style="color:grey" href="https://deborah-mlockier-psychologue-paris-15-therapie.business.site/">Site internet</a></b-button>
            </div>
          </div>
        </slide>
        <slide :index="2">
          <div class=" card-home">
            <div class="card-body text-center">
              <div class="h-caption"><h4 class="card-title">Diététicienne-nutritionniste</h4></div>
              <p class="card-text-network">Aurélie Guerri propose des programmes nutritionnels personnalisés et efficaces,
                s’adapte à chaque personne et assure un suivi complet (01 55 25 47 95)</p>
              <b-button variant="light"><a style="color:grey" href="https://aurelieguerri.com/">Site internet</a></b-button>
            </div>
          </div>
        </slide>
<!--        <slide :index="3">-->
<!--          <div class=" card-home">-->
<!--            <div class="card-body text-center">-->
<!--              <div class="h-caption"><h4 class="card-title">Deborah Mlockier</h4></div>-->
<!--              <p class="card-text-network">Psychologue clinicienne et psychothérapeute vous reçoit au cabinet médical Croisic Duroc,-->
<!--                2 square du Croisic 75015 Paris (doctolib, 06 80 46 13 80)</p>-->
<!--              <b-button variant="light"><a style="color:grey" href="https://deborah-mlockier-psychologue-paris-15-therapie.business.site/">Site internet</a></b-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </slide>-->
<!--        <slide :index="4">-->
<!--          <div class=" card-home">-->
<!--            <div class="card-body text-center">-->
<!--              <div class="h-caption"><h4 class="card-title">Deborah Mlockier</h4></div>-->
<!--              <p class="card-text-network">Psychologue clinicienne et psychothérapeute vous reçoit au cabinet médical Croisic Duroc,-->
<!--                2 square du Croisic 75015 Paris (doctolib, 06 80 46 13 80)</p>-->
<!--              <b-button variant="light"><a style="color:grey" href="https://deborah-mlockier-psychologue-paris-15-therapie.business.site/">Site internet</a></b-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </slide>-->
<!--        <slide :index="5">-->
<!--          <div class=" card-home">-->
<!--            <div class="card-body text-center">-->
<!--              <div class="h-caption"><h4 class="card-title">Deborah Mlockier</h4></div>-->
<!--              <p class="card-text-network">Psychologue clinicienne et psychothérapeute vous reçoit au cabinet médical Croisic Duroc,-->
<!--                2 square du Croisic 75015 Paris (doctolib, 06 80 46 13 80)</p>-->
<!--              <b-button variant="light"><a style="color:grey" href="https://deborah-mlockier-psychologue-paris-15-therapie.business.site/">Site internet</a></b-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </slide>-->
<!--        <slide :index="6">-->
<!--          <div class=" card-home">-->
<!--            <div class="card-body text-center">-->
<!--              <div class="h-caption"><h4 class="card-title">Deborah Mlockier</h4></div>-->
<!--              <p class="card-text-network">Psychologue clinicienne et psychothérapeute vous reçoit au cabinet médical Croisic Duroc,-->
<!--                2 square du Croisic 75015 Paris (doctolib, 06 80 46 13 80)</p>-->
<!--              <b-button variant="light"><a style="color:grey" href="https://deborah-mlockier-psychologue-paris-15-therapie.business.site/">Site internet</a></b-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </slide>-->
<!--        <slide :index="7">-->
<!--          <div class=" card-home">-->
<!--            <div class="card-body text-center">-->
<!--              <div class="h-caption"><h4 class="card-title">Deborah Mlockier</h4></div>-->
<!--              <p class="card-text-network">Psychologue clinicienne et psychothérapeute vous reçoit au cabinet médical Croisic Duroc,-->
<!--                2 square du Croisic 75015 Paris (doctolib, 06 80 46 13 80)</p>-->
<!--              <b-button variant="light"><a style="color:grey" href="https://deborah-mlockier-psychologue-paris-15-therapie.business.site/">Site internet</a></b-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </slide>-->
<!--        <slide :index="8">-->
<!--          <div class=" card-home">-->
<!--            <div class="card-body text-center">-->
<!--              <div class="h-caption"><h4 class="card-title">Deborah Mlockier</h4></div>-->
<!--              <p class="card-text-network">Psychologue clinicienne et psychothérapeute vous reçoit au cabinet médical Croisic Duroc,-->
<!--                2 square du Croisic 75015 Paris (doctolib, 06 80 46 13 80)</p>-->
<!--              <b-button variant="light"><a style="color:grey" href="https://deborah-mlockier-psychologue-paris-15-therapie.business.site/">Site internet</a></b-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </slide>-->
<!--        <slide :index="9">-->
<!--          <div class=" card-home">-->
<!--            <div class="card-body text-center">-->
<!--              <div class="h-caption"><h4 class="card-title">Deborah Mlockier</h4></div>-->
<!--              <p class="card-text-network">Psychologue clinicienne et psychothérapeute vous reçoit au cabinet médical Croisic Duroc,-->
<!--                2 square du Croisic 75015 Paris (doctolib, 06 80 46 13 80)</p>-->
<!--              <b-button variant="light"><a style="color:grey" href="https://deborah-mlockier-psychologue-paris-15-therapie.business.site/">Site internet</a></b-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </slide>-->
      </carousel-3d>

    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  components:{
    Carousel3d,
    Slide
  },
name: "Network"
}
</script>

<style scoped>

</style>