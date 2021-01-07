<template>
  <div id="osteopathie" class="osteopathie-page">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">L'Ostéopathie</h3>
      </div>
      <div class="osteopathie-body">
        <div class="container wrapper">
          <div class="row">
            <div class="col-sm-4">
              <img class="shadow  img-fluid rounded d-none d-md-flex" src="../../../../public/img/osteo-1.jpg" alt="">
            </div>
            <div class="col-sm-8 mt-sm-4">
              <div class="osteopathie-text">
                <p class="text-justify">Le Registre des ostéopathes de France définit l’ostéopathie
                  comme une méthode de soins qui s’emploie à déterminer et à
                  traiter les restrictions de mobilité qui peuvent affecter
                  l’ensemble des structures composant le corps humain. <br><br>
                  Toute perte de mobilité des articulations, des muscles, des
                  ligaments ou des viscères peut provoquer un déséquilibre de
                  l’état de santé. L’ostéopathie est fondée sur la capacité du corps
                  à s’autoéquilibrer et sur une connaissance approfondie de
                  l’anatomie. <br><br>
                  Elle prévient et soigne de nombreux troubles physiques et agit
                  également aux plans nerveux, fonctionnel et psychologique. Elle
                  aide chacun à gérer, de manière responsable et autonome, son
                  “capital vie” pour un mieux-être au quotidien.</p>

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
                        Le corps humain est une unité fonctionnelle constituée de différentes parties. Une affection dans une
                        partie du corps influence les autres. C’est pourquoi l’ostéopathe manipule parfois des zones éloignées
                        de votre douleur première.
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
                        Les diverses fonctions corporelles interagissent avec la structure du système musculosquelettique.
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
                <p class="text-justify">L'ostéopathe ne s'intéresse pas uniquement à un symptôme douloureux, mais considère le patient comme un
                  tout devant être évalué dans son ensemble. Il doit découvrir de façon précise l'origine des tensions et des
                  blocages qui restreignent la mobilité des différents tissus.</p>
              </div>
            </div>
          </div>
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
