<template>
  <div id="osteopathie" class="osteopathie-page">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">L'Ostéopathie</h3>
      </div>
      <div class="osteopathie-body">
        <img class="osteopathie-img" src="../../../../public/img/osteo-1.jpg" alt="">

        <div class="osteopathie-text">
          <p>Connu comme le "thérapeute du mal de dos", l'ostéopathe peut traiter bien plus que les douleurs
            musculosquelletiques. Il pourra également agir sur les troubles du système cardiovasculaire, digestif,
            génito-urinaire, neurologique ou encore oto-rhino-laryngologique et pulmonaire. Un champ d'action large qui
            fait de la pratique de l'ostéopathie une option véritablement intéressante que ce soit pour les douleurs
            aiguës ou chroniques.</p>

          <div class="accordion" id="accordionExample">
            <p>Principes fondamentaux de l'ostéopathie, il en existe 3 : </p>
            <div>
              <div id="heading-1">
                <h2 class="mb-0">
                  <button class="btn btn-link text-left accordion-text" type="button" data-toggle="collapse"
                          data-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">
                    <img class="icon icon-arrow-left icon-arrow--1" src="../../../../public/icon/right-arrow.svg" alt="icon téléphone">  La globalité
                  </button>
                </h2>
              </div>

              <div id="collapse-1" class="collapse" aria-labelledby="heading-1" data-parent="#accordionExample">
                <div class="card-body">
                  le corps humain est une unité fonctionnelle constituée de différentes parties. Une affection dans une
                  partie du corps influence les autres. C’est pourquoi l’ostéopathe manipule parfois des zones éloignées
                  de votre douleur première (sur le diaphragme pour soulager le dos par exemple).
                </div>
              </div>
            </div>

            <div>
              <div id="heading-2">
                <h2 class="mb-0">
                  <button class="btn btn-link text-left accordion-text" type="button" data-toggle="collapse"
                          data-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                    <img class="icon icon-arrow-left icon-arrow--2" src="../../../../public/icon/right-arrow.svg" alt="icon téléphone">  La structure gouverne la fonction
                  </button>
                </h2>
              </div>

              <div id="collapse-2" class="collapse " aria-labelledby="heading-2" data-parent="#accordionExample">
                <div class="card-body">
                  les diverses fonctions corporelles interagissent avec la structure du système musculosquelettique.
                </div>
              </div>
            </div>

            <div>
              <div id="heading-3">
                <h2 class="mb-0">
                  <button class="btn btn-link text-left accordion-text" type="button" data-toggle="collapse"
                          data-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                    <img class="icon icon-arrow-left icon-arrow--3" src="../../../../public/icon/right-arrow.svg" alt="icon téléphone"> L'auto régulation du corps
                  </button>
                </h2>
              </div>

              <div id="collapse-3" class="collapse" aria-labelledby="heading-3" data-parent="#accordionExample">
                <div class="card-body">
                  Le corps a la capacité de s’auto-réguler et donc de pouvoir retrouver une dynamique qui
                  éloignerait les douleurs. « Être en bonne santé, c’est tomber malade et s’en relever », disait
                  Canguilhem (médecin et philosophe du XIXe). Associé à une bonne vascularisation artérielle empêchant
                  toutes congestions, le corps posséderait toutes les cartes pour se soigner ou du moins limiter les
                  affections.
                </div>
              </div>
            </div>
          </div>
          <p>L'ostéopathe ne s'intéresse pas uniquement à un symptôme douloureux, mais considère le patient comme un
            tout devant être évalué dans son ensemble. Il doit découvrir de façon précise l'origine des tensions et des
            blocages qui restreignent la mobilité des différents tissus.</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Osteopathie',
}

</script>

<style scoped>


</style>
