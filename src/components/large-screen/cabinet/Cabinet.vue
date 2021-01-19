<template>
  <div class="cabinet-page">
    <header id="head">
      <div class="container">
        <div class="row d-flex flex-column ">
          <h1 class="lead ml11">
            <span class="text-wrapper">
              <span class="line line1"></span>
              <span class="letters">Cabinet d'Ostéopathie Paris - 15</span>
            </span>
          </h1>
          <p class="tagline letters">2 square du Croisic 75015 Paris </p>

          <p> <a class="btn btn-primary btn-custom " role="button" href="https://www.doctolib.fr/osteopathe/paris/josephine-lyon">PRENDRE RENDEZ-VOUS</a></p>
        </div>
      </div>
    </header>
    <div>
        <div id="cabinet-background">
        <div id="cabinet" class="cabinet-header">
        </div>
        <div class="cabinet-content">
          <div class="container wrapper">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-sm-6">
                <div class="cabinet-img-modal justify-content-center">
                  <Carousel></Carousel>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="cabinet-content-text mt-1">
                  <p class="text-justify">Je privilégie les <b>techniques douces, efficaces et adaptées</b> au patient que je reçois. Je ne
                    m’intéresse pas seulement à la région en souffrance mais à l’ensemble du corps de la tête au pied.</p>
                  <p class="text-justify">Si la priorité est de soulager la douleur, mon rôle a aussi un objectif sur le long terme. Il est
                    indispensable d’identifier la cause de cette douleur.</p>
                  <p class="text-justify">Le patient qui a pris conscience de l’origine de
                    sa souffrance a déjà fait la moitié du chemin dans sa guérison. Mon rôle est alors de proposer des
                    solutions pérennes pour éviter les récidives.</p>
                  <p class="text-justify">Parfois de petites corrections de posture, de
                    gestuelle, la pratique d’exercices spécifiques de renforcement, d’étirement, de relaxation, les
                    ajustements alimentaires peuvent mettre un terme définitivement à un problème ou à minima
                    permettent de diminuer l’intensité ou la fréquence des crises. </p>
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
                  <p class="text-justify"><b>Le Cabinet d'Ostéopathie Paris 15</b> se situe 2 Square du Croisic 75015 Paris. (entrée au 12 boulevard du
                    Montparnasse)</p>
                  <p class="text-justify">A deux pas de l'hôpital Necker, entre les stations Duroc (L10 et L13), Falguière (L12) et Montparnasse.
                    (L4,L6,L12,L13)</p>
                  <p class="text-justify">Il se compose d'un gynécologue obstétricien échographiste : Romain Guilherme, d'une psychologue : Déborah
                    Mlockier et d'une ostéopathe : Joséphine Lyon. </p>
                  <p class="text-justify">Les consultations d'ostéopathie sont assurées par <b>Joséphine Lyon</b> et sa collaboratrice <b>Mylène Dufresne</b>
                    de 9h à 21h du lundi au vendredi et
                    de 9h à 13h le samedi. <br><br>
                 La consultation dure <b>une heure </b>et le tarif est fixé à <b>80 euros</b>.</p>
                  <div class="acces-info">
                    <p><img class="icon" src="../../../../public/icon/telephone.svg" alt="icon téléphone">01.53.69.19.32.</p>
                    <p><a href="https://bit.ly/3dPt3Sn" target="_blank"><img class="icon" src="../../../../public/icon/location.svg" alt="icon adresse cabinet ostéopathie Paris 15">2
                      square du Croisic 75015 Paris</a></p>
                    <p><img class="icon" src="../../../../public/icon/metro.svg" alt="icon métro cabinet ostéopathie Paris 15">Métro : Duroc - Falguière - Montparnasse</p>
                    <p><img class="icon" src="../../../../public/icon/send-email.svg" alt="icon adresse email">josephinelyon.osteo@gmail.com
                    </p>
                    <div class="d-flex justify-content-center">
                      <div class="btn btn-primary doctolib-btn">
                      <a href="https://www.doctolib.fr/osteopathe/paris/josephine-lyon" target="_blank"><p>Prendre rendez-vous via
                        <img class="icon-doctolib" src="../../../../public/icon/doctolib.svg" alt="icon doctolib"></p></a>
                    </div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-sm-6 ">
                <div>
                  <iframe class=" acces-img shadow rounded"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.644370810174!2d2.314741015673
                          93!3d48.84592177928634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67032132d9819%3A0
                          x669865a063648484!2s2%20Square%20du%20Croisic%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1603479947213!5m2!1sfr!2sfr"
                           frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                          tabindex="0"></iframe>
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
import anime from 'animejs';
import Carousel from "@/components/large-screen/cabinet/Carousel";

export default {
  name: 'Cabinet',
  components: {
    Carousel
  },
  mounted: function() {
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([\s\S])/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false})
        .add({
          targets: '.ml11 .line',
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 700
        })
        .add({
          targets: '.ml11 .line',
          translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
          easing: "easeOutExpo",
          duration: 700,
          delay: 100
        }).add({
      targets: '.ml11 .letter',
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i + 1)
    });
  }
}




</script>

<style scoped>
.ml11 {
  font-weight: 700;
  font-size: 3.5em;
}

.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.ml11 .line1 {
  top: 0;
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
}

</style>
