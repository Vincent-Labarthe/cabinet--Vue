<template>
  <div>
    <div class="row">
      <div class="col-md-3 col-sm-6 highlight">
        <div class=" card-home">
          <div class="card-body text-center">
            <img class="card-icon mb-4" src="../../../../../public/icon/question.svg" alt="">
            <div class="h-caption"><h4 class="card-title">Lombalgie / lumbago</h4></div>
            <p class="card-text"> Douleur en bas du dos</p>
            <b-button v-b-toggle.sidebar-1 variant="light">Lire notre dossier</b-button>
            <b-sidebar id="sidebar-1" title="Douleur articulaire" shadow>
              <div class="px-3 py-20 m-3">
                <p class="text-justify">
                  L’appareil locomoteur est constitué des os (rigidité) qui sont reliés entre eux par des articulations et des muscles (mobilité). C’est grâce à lui que nous pouvons nous déplacer dans l’espace.
                  <br>
                  On parle couramment de « blocage articulaire » mais le terme le plus approprié pour décrire ce trouble serait dysfonction articulaire.
                </p>
                <video class="reason-video mb-3"  src="video/joint.mp4" autoplay loop playsinline muted></video>


                <p class="text-justify">Une articulation peut se mettre en dysfonction pour des raisons variées : traumatisme, faux mouvement, mauvaise posture, alimentation trop acide, mauvais apport sanguin, stress, trouble digestif…</p>

                <p class="font-italic text-justify">«Il faut bien comprendre que nous ne sommes pas constitués
                  physiologiquement et structurellement pour être en position assise prolongée. Nous sommes fait pour
                  être debout, marcher, courir, bouger, nous reposer en position allongée. Nos modes de vie sédentaires
                  sont la cause principale de notre mal de dos. Nous n’en avons pas conscience car le mal de dos se
                  manifeste souvent à la suite d’un faux mouvements ou d’une activité quelconque. Le souffrant accuse à
                  tord ce mauvais geste qui’ n’est en réalité que l’interrupteur d’un problème sous-jacent.» </p>
                <p class="text-justify">Les lombalgies représentent à elles seules plus de <b>la moitié des motifs de
                  consultation en ostéopathie </b> et la seconde place en médecine générale. Elles représentent un <b>problème
                  de santé publique majeur</b> en raison de sa fréquence et des répercussions socio-économiques qui en
                  découlent (arrêt de travail, bien-être, appréhension pour réaliser des activités, baisse de moral...).
                </p>
                <h4 class="text-justify pt-3">Astuces pour prévenir une lombalgie ou éviter la récidive : </h4>
                <ul class="text-justify">
                  <li><p>Bouger : Le cartilage se réhydrate pas le mouvement, la circulation sanguine des jambes vers
                    le cœur s’obtient pas la marche, je ne reste pas en position statique prolongée même si je ne
                    ressens pas de douleur.</p></li>
                  <li>
                    <p>Limiter les port de charge, si je n’ai pas le choix, je gaine mes abdominaux, j’utilise mes deux
                      bras,
                      j’équilibre la charge sur mes deux épaules (je privilégie le sac à dos au sac à main). En cas de
                      déménagement,
                      ou si je présente une lésion (hernie discale), je peux mettre une ceinture lombaire
                      ponctuellement, pour un trajet en voiture par
                    </p>
                  </li>
                  <li><p>Eviter certains gestes : les vertèbres n’aiment pas le mouvement vers l’avant, pour me pencher
                    en avant,
                    je fléchis mes genoux et/ou mes hanche, je n’arrondis jamais le bas du dos. J’évite également les
                    mouvements de torsion,
                    je choisis une chaise qui pivote si je travaille sur deux écrans, si je suis debout, ce sont mes
                    pieds qui pivotent.</p></li>
                  <li><p>Je respecte les courbures de ma colonne : en position assise, je positionne mon bassin en
                    position neutre.
                    La cambrure du bas du dos est physiologique, il faut la respecter, ni plus, ni moins.
                    J’évite les longues marches en avec des chaussures à talons pour ne pas accentuer cette
                    cambrure.</p></li>
                  <li><p>Je banis les postures asymétriques : croiser les jambes, torsion de la colonne sur un côté.</p>
                  </li>
                  <li><p>Je décomprime mes vertèbres lombaires : je me suspends à un support solide (barre de traction,
                    branche, mezzanine, escalier). Je peux aussi, en position debout, mettre tout le poids de mon corps
                    sur
                    mes avant-bras posés verticalement sur un bureau. En position allongée, je peux réunir mes deux
                    genoux
                    et les rapprocher de ma poitrine, de façon rectiligne puis circulaire</p>.
                  </li>
                </ul>
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
  name: "BackPain"
}
</script>

<style scoped>

</style>