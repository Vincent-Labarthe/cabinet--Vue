<template>
  <div id="osteo_baby">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Les nourrissons - bébés - enfants</h3>
        <p @click="handleBackSpe('')">
          <img class="icon icon-arrow-right icon-arrow--1" src="../../../../public/icon/left-arrow.svg"
               alt="icon téléphone">
          Retour
        </p>
      </div>
        <div class="spe-baby">
          <div class="baby-card">
            <div class="baby-card--header baby-card--header--1">
              <h5>Le nourrisson</h5>
            </div>
            <div class="baby-card--body">
              <p>Parce que les grossesses et accouchements difficiles engendrent souvent des contraintes pour le bébé avant même sa naissance,
                il est fortement recommandé de réaliser un bilan ostéopathique à la naissance du bébé pour contrôler et traiter les tensions qui
                peuvent perturber ses premiers mois de vie (coliques, régurgitations, méplats du crâne, agitation, ...) </p>
            </div>
          </div>
          <div class="baby-card">
            <div class="baby-card--header baby-card--header--2">
              <h5>L'enfant</h5>
            </div>
            <div class="baby-card--body">
              <p>De manière générale, il est possible d'emmener votre enfant chez l' ostéopathe une fois par an pour un bilan global.
                Mais certaines périodes du développement nécessitent plus particulièrement votre vigilance : </p>
              <ul><li>Entre 0 et 2 ans, l'enfant peut être suivi après sa naissance pour vérifier si l' accouchement n'a pas généré de traumatismes</li>
              <li>Lors de ses 6 mois, une visite permettra de contrôler son développement psychomoteur</li>
                <li>Au moment de la pré-marche, cela l'encouragera à adopter une bonne posture debout.</li>
              </ul>
            </div>
          </div>
          <div class="baby-card">
            <div class="baby-card--header baby-card--header--3">
              <h5>L'adolescent</h5>
            </div>
            <div class="baby-card--body">
              <p>Les douleurs du dos ou des membres sont fréquentes chez l'adolescent en croissance. <br>
                Plus elles sont repérées tôt, plus l'ostéopathe a les moyens d'intervenir et de les prévenir.
                Il va rééquilibrer le corps et si besoin, travailler en collaboration avec l'orthopédiste, le pédiatre, le kinésithérapeute, le podologue ou encore le dentiste.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'OsteoBaby',
  methods: {
    handleBackSpe(param) {
      event.preventDefault()
      this.$emit('handle-spe', param)
    }
  }
}

</script>

<style scoped>


</style>
