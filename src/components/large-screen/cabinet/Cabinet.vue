<template>
  <div class="cabinet-page">
    <div id="cabinet_header" class="cabinet-header">
      <h2 class="header--primary">Cabinet d'ostéopathie Paris-15 </h2>
      <h3 class="header--secondary"> 2 square du Croisic 75015 Paris</h3>
    </div>
    <div>
      <div id="cabinet-background">
        <div id="cabinet" class="cabinet-header">
          <h3 class="header--secondary">Accueil</h3>
        </div>
        <div class="cabinet-content">
          <div class="container wrapper">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-sm-7">
                <div class="cabinet-img-modal justify-content-center">
                  <Carousel class="mb-sm-4"></Carousel>
                </div>
              </div>
              <div class="col-sm-5 mt-sm-4">
                <div class="cabinet-content-text">
                  <p class="text-justify"><b>Le Cabinet médical Croisic Duroc </b> se situe 2 Square du Croisic 75015 Paris. (entrée au 12 boulevard du
                    Montparnasse)</p>
                  <p class="text-justify">A deux pas de l'hôpital Necker, entre les stations Duroc (L10 et L13), Falguière (L12) et Montparnasse.
                    (L4,L6,L12,L13)</p>
                  <p class="text-justify">Il se compose d'un gynécologue obstétricien échographiste : Romain Guilherme, d'une psychologue : Déborah
                    Mlockier et d'une ostéopathe : Joséphine Lyon. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="acces-content mt-md-4">
          <div class="container wrapper">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-sm-6 mb-md-4">
                <div class="acces-text">
                  <p class="text-justify">Les consultations d'ostéopathie sont assurées par <b>Joséphine Lyon</b> et <br>sa collaboratrice <b>Mylène Dufresne</b>
                    de 9h à 21h du lundi au vendredi et
                    <br> de 9h à 13h le samedi. <br><br>
                 La consultation dure <b>une heure </b>et le tarif est fixé à <b>80 euros</b>.</p>
                  <div class="acces-info">
                    <p><img class="icon" src="../../../../public/icon/telephone.svg" alt="icon téléphone">01.53.69.19.32.</p>
                    <p><a href="https://bit.ly/3dPt3Sn" target="_blank"><img class="icon" src="../../../../public/icon/location.svg" alt="icon adresse cabinet ostéopathie Paris 15">2
                      square du Croisic 75015 Paris</a></p>
                    <p><img class="icon" src="../../../../public/icon/metro.svg" alt="icon métro cabinet ostéopathie Paris 15">Métro : Duroc - Falguière - Montparnasse</p>
                    <p><img class="icon" src="../../../../public/icon/send-email.svg" alt="icon adresse email">josephinelyon.osteo@gmail.com
                    </p>
                    <div class="doctolib-btn ">
                      <a href="https://www.doctolib.fr/osteopathe/paris/josephine-lyon" target="_blank"><p>Prendre rendez-vous via
                        <img class="icon-doctolib" src="../../../../public/icon/doctolib.svg" alt="icon doctolib"></p></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 ">
                <div>
                  <iframe class=" acces-img shadow rounded"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.644370810174!2d2.31474101567393!3d48.84592177928634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67032132d9819%3A0x669865a063648484!2s2%20Square%20du%20Croisic%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1603479947213!5m2!1sfr!2sfr"
                           frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                          tabindex="0" height="50%"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Carousel from "@/components/large-screen/cabinet/Carousel";

export default {
  name: 'Cabinet',
  components: {
    Carousel
  },
}

</script>

<style scoped>


</style>
