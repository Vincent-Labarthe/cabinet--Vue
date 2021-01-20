<template>
  <div>
    <div class="row">
      <div class="col-md-3 col-sm-6 highlight">
        <div v-for="reason in reasons" :key="reason.id" class=" card-home">
          <div class="card-body text-center">
            <img class="card-icon mb-4" src="../../../../../public/icon/question.svg" alt="">
            <div class="h-caption"><h4 class="card-title">{{reason.id}}</h4></div>
            <b-button v-b-toggle="'sidebar-' + reason.id" v-b-toggle.sidebar-4 variant="light">Lire notre dossier</b-button>
            <b-sidebar  :id="'sidebar-'+reason.id" title="Douleur articulaire" shadow>
              <div class="px-3 py-20 m-3">
                <p class="text-justify">
                  L’appareil locomoteur est constitué des os (rigidité) qui sont reliés entre eux par des articulations et des muscles (mobilité). C’est grâce à lui que nous pouvons nous déplacer dans l’espace.
                  <br>
                  On parle couramment de « blocage articulaire » mais le terme le plus approprié pour décrire ce trouble serait dysfonction articulaire.
                </p>
                <video class="reason-video col-sm-12 mb-3"  src="video/joint.mp4" autoplay loop playsinline muted></video>


                <p class="text-justify">Une articulation peut se mettre en dysfonction pour des raisons variées : traumatisme, faux mouvement, mauvaise posture, alimentation trop acide, mauvais apport sanguin, stress, trouble digestif…</p>

                <p class="text-justify">Les conséquences de cette dysfonctions vont être multiples : une raideur de l’articulation et donc une difficulté
                  à faire certains gestes, une douleur, une inflammation, une hypersollicitation musculaire,
                  un trouble de la vascularisation et de la conduction nerveuse, l’apparition de nouvelle dysfonctions à distance (articulaire, viscérales) bref
                  c’est tout le système qui en sera perturbé. <br>
                  A terme, si la dysfonction ne disparait pas on assistera à une modification irréversible des tissus :
                  c’est alors qu’apparaissent les phénomènes de fibrose et d’arthrose.
                </p>
                <p class="text-justify">Le but de l’ostéopathe n’est pas de « remettre les os en place » ni de les replacer dans un bon alignement mais de <b>traiter ces dysfonctions articulaires</b> ou d’éviter qu’il en apparaisse.
                  L’intégrité du système locomoteur est d’une importance cruciale pour le fonctionnement général du corps et dans le maintien de la santé.</p>

              </div>
            </b-sidebar>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReasonModal",
  data() {
    return {
        reasons:[
          {id:4,title:'Douleur Articulaire',subTitle:'', hasFile:'', text:''}
        ]
    }
  }
}
</script>

<style scoped>

</style>