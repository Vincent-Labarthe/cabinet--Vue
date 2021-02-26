<template>
  <div id="network">
    <div id="cabinet-background" class="bottom-network">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Mon Réseau - Cabinet d'Ostéopathie Paris 15</h3>
      </div>
      <div class="mt-5 mb-5">
      <div class="container wrappermt-5">
      </div>
      <carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="9">
        <slide v-for="slide in slides" :key="slide.id" :index="slide.id">
          <div class=" card-home card-network">
            <div class="card-body text-center">
              <div class="h-caption"><h4 class="card-title">{{slide.title}}</h4></div>
              <p class="card-text-network">{{slide.texte}}</p>
              <b-button variant="light"><a style="color:grey" :href="slide.link">{{slide.text_link}}</a></b-button>
            </div>
          </div>
        </slide>
      </carousel-3d>
      </div>
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
name: "Network",
  data() {
    return {
      slides: [
        {
          id:0,
          title: 'Gynécologue, obstétricien, échographiste',
          texte: 'Docteur Romain Guilherme vous reçoit au cabinet médical Croisic Duroc, 2 square du Croisic 75015 Paris (Doctolib, 01 44 93 58 47) et à la maternité de l’hôpital Cochin Port-Royal (01 58 41 39 39)',
          link: 'https://www.mon-gyneco.com/',
          text_link: 'Site internet'
        },
        {
          id:1,
          title: 'Psychologue clinicienne et psychothérapeute',
          texte: 'Deborah Mlockier vous reçoit au cabinet médical Croisic Duroc, 2 square du Croisic 75015 Paris (doctolib, 06 80 46 13 80)',
          link: 'https://deborah-mlockier-psychologue-paris-15-therapie.business.site/',
          text_link: 'Site internet'
        },
        {
          id:2,
          title: 'Diététicienne-nutritionniste',
          texte: 'Aurélie Guerri propose des programmes nutritionnels personnalisés et efficaces, s’adapte à chaque personne et assure un suivi complet (01 55 25 47 95)',
          link: 'https://aurelieguerri.com/',
          text_link: 'Site internet'
        },
        {
          id:3,
          title: 'Consultant & formateur en biomécanique humaine & sportive',
          texte: 'Fréderic Brigaud concepteur des principes posturo-dynamiques d’Empilement Articulaire Dynamique.' +
                 ' Auteur de plusieurs ouvrages (+212 665 15 60 65, eadconcept@gmail.com)',
          link: 'https://eadconcept.com/',
          text_link: 'Site internet'
        },
        {
          id:4,
          title: 'Malades de sport',
          texte: 'Léa Dall’aglio et Vincent Guerrier ont écris un ouvrage pour promouvoir l’activité physique malgré la maladie',
          link: 'https://www.maladesdesport.fr/',
          text_link: 'Site internet'
        },
        {
          id:5,
          title: 'Les lois naturelles de l’enfant',
          texte: 'Céline Alvarèz a développé des principes éducatifs adaptés au fonctionnement humain',
          link: 'https://www.celinealvarez.org/',
          text_link: 'Site internet'
        },
        {
          id:6,
          title: 'Médecin généraliste',
          texte: 'Docteur François Lacant médecin généraliste 25 Rue de la Croix Nivert, 75015 Paris. ',
          link: '',
          text_link: '01 47 83 72 45'
        },
        {
          id:7,
          title: 'Médecin Urologue',
          texte: 'Jean-Michel Casanova Fondation Saint Jean de Dieu - Clinique Oudinot, 19 Rue Oudinot, 75007 Paris, 01 47 83 69 64 ',
          link: '',
          text_link: '01 47 83 69 64'
        },
        {
          id:8,
          title: 'Médecin Cardiologue ',
          texte: 'Docteur Florence Pontau vous reçoit 2 Rue Ferdinand Fabre, 75015 Paris,01 77 45 67 52',
          link: 'https://www.doctolib.fr/cardiologue/paris/florence-pontnau',
          text_link: 'Site internet'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>