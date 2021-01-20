<template>
  <div id="back_pain">
    <div class="row">
      <div class="col-md-3 col-sm-6 highlight">
        <div class=" card-home">
          <div class="card-body text-center">
            <img class="card-icon mb-4" src="../../../../../public/icon/question.svg" alt="">
            <div class="h-caption"><h4 class="card-title">Lombalgie / lumbago</h4></div>
            <p class="card-text"> Douleur en bas du dos</p>
            <b-button v-b-toggle.sidebar-1 variant="light">Lire notre dossier</b-button>
            <b-sidebar id="sidebar-1" title="Lombalgie" shadow>
              <div class="px-3 py-20 m-3">
                <p class="text-justify">
                  Selon l’International Association for the study of pain (IASP), la lombalgie peut être définie comme
                  la perception d’une douleur provenant de la région lombaire (bas du dos) et / ou du sacrum (os médian
                  et supérieur du bassin).
                  <br><br>Elle peut s’accompagner de décharges dans la jambes médicalement appelées radiculopathies :
                  trouble neurologique qui bloque la conduction d’un nerf ou de ses racines.
                  On parle alors de sciatique, de <b>sciatalgie</b>, de <b>sciatalgie</b> ou encore de <b>cruralgie</b>
                  en fonction de la topographie de la racine ou du nerf atteint. Elle résulte d’une compression ou d’une
                  diminution d’apport sanguin du nerf ce qui entraîne des troubles de la sensibilité appelées
                  paresthésies (fourmillement, picotement, engourdissement).
                </p>
                <video class="reason-video col-sm-12 mb-3"  src="video/back-pain.mp4" autoplay loop playsinline muted></video>

                <p class="text-justify">Les douleurs sont typiquement intermittentes, d'un seul côté (unilatérale),
                  irradiantes du rachis lombaire jusque dans les orteils, parfois majorées lors des efforts de toux ou à
                  la défécation, calmées par le repos en position allongée ou debout. Elles peuvent être déclenchées par
                  la position assise (notamment en voiture).</p>

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
      <div class="col-md-3 col-sm-6 highlight">
        <div class=" card-home">
          <div class="card-body text-center">
            <img class="card-icon mb-4" src="../../../../../public/icon/question.svg" alt="">
            <div class="h-caption"><h4 class="card-title">Cervicalgie</h4></div>
            <p class="card-text">Douleur du cou et de la nuque</p>
            <b-button v-b-toggle.sidebar-2 variant="light">Lire notre dossier</b-button>
            <b-sidebar id="sidebar-2" title="Cervicalgie" shadow>
              <div class="px-3 py-20 m-3">
                <p class="text-justify">
                  On dénomme cervicalgie les douleurs du rachis cervical plus communément toutes les douleurs de la région du cou.
                  Elle peut diffuser dans le bras et/ou être associée de maux de tête.
                </p>
                <p class="text-justify">La douleur et la raideur cervicale sont des symptômes très fréquents, particulièrement chez les adultes.
                  La cervicalgie affecte entre 10 et 15% de la population. Tout comme la lombalgie, elle a un impact sur la qualité de vie et l’une des principales causes d’arrêt de travail.
                  Le traitement ostéopathique là aussi semble être la méthode de soin la plus efficace à court et à long terme.</p>
                <p class="text-justify">Dans la très grande majorité des cas, il s’agit de cervicalgies communes (sans gravité) dues à un trouble fonctionnel musculo-ligamentaire de la région cervicale ou à une détérioration dégénérative (l’arthrose).
                  La cervicarthrose anatomique est d’une extrême fréquence : plus de 50 % des individus après 40 ans et elle augmente avec l’âge</p>
                <p class="text-justify">Il est important de comprendre que l’arthrose n’est pas une fatalité et qu’elle n’est pas synonyme
                  de douleur sinon la moitié des individus après 40 ans auraient mal au cou! Il n’y a d’ailleurs pas de concordance entre le stade d’évolution de l’arthrose et la douleur ressentie</p>
                <h4 class="text-justify pt-3">Astuces pour prévenir les cervicalgies : </h4>
                <ul class="text-justify">
                  <li>
                    <p>Respecter l’horizontalité du regard : hausser le haut de l’écran, éviter les postures prolongées tête en bas </p>
                  </li>
                  <li>
                    <p>Traiter les troubles de la mâchoire : serrement des dents, problèmes d’occlusion</p>
                  </li>
                  <li>
                    <p>Traiter les troubles ophtalmiques et orthoptistes : porter des lunettes ou des lentilles adaptées à votre vision, suivi ophtalmologique régulier, séances d’orthoptie si nécessaire</p>
                  </li>
                  <li>
                    <p>Techniques de gestion du stress : activité physique pour décharger + activité douce pour abaisser le seuil de stress</p>
                  </li>
                  <li>
                    <p>Eviter la posture sur le ventre pour dormir</p>
                  </li>
                  <li>
                    <p>Prendre en charge les troubles de la postures dans son ensemble, les cervicalgies peuvent être la conséquences d’asymétries de postures provenant d’ailleurs :<br>
                      éviter de croiser les jambes, de toujours porter du même côté, d’incliner la tête toujours du même côté (exemple : port de casque),
                      de rééquilibrer le corps si pratique d’activité symétrique (ex : sports de raquette)</p>
                  </li>
                </ul>
              </div>
            </b-sidebar>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 highlight">
        <div class=" card-home">
          <div class="card-body text-center">
            <img class="card-icon  mb-4" src="../../../../../public/icon/question.svg" alt="">
            <div class="h-caption"><h4 class="card-title">Sciatique/Sciatalgie</h4></div>
            <p class="card-text">Douleur qui part du bas du dos ou de la fesse et irradie à la face postérieure de la
              jambe pouvant parfois aller jusqu’au pied. </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 highlight">
        <div class=" card-home">
          <div class="card-body text-center">
            <img class="card-icon mb-4" src="../../../../../public/icon/question.svg" alt="">
            <div class="h-caption"><h4 class="card-title">Cruralgie</h4></div>
            <p class="card-text">Douleur qui part du bas du dos et qui irradie sur la face antérieure de cuisse jusqu’au
              genou. </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 highlight">
        <div class=" card-home">
          <div class="card-body text-center">
            <img class="card-icon mb-4" src="../../../../../public/icon/question.svg" alt="">
            <div class="h-caption"><h4 class="card-title">Dorsalgie</h4></div>
            <p class="card-text">Douleur au milieu du dos, entre les omoplates </p>
            <b-button v-b-toggle.sidebar-3 variant="light">Lire notre dossier</b-button>
            <b-sidebar id="sidebar-3" title="Dorsalgie" shadow>
              <div class="px-3 py-20 m-3">
                <p class="text-justify">
                  Les dorsalgies sont des douleurs ressenties au milieu du dos, en regard du rachis thoracique (T1 à
                  T12),
                  dans la zone des omoplates. Elles peuvent être la traduction d’une souffrance du rachis thoracique,
                  des côtes,
                  de la musculature dorsale, d’un problème de posture mais aussi souvent d’une souffrance viscérale
                  (système cardio-pulmonaire ou digestif haut).
                </p>
                <h4 class="text-justify pt-3">Conduite à tenir : </h4>
                <p class="text-justify">Contrairement aux lombalgies, en dehors de toute orientation diagnostique
                  particulière,
                  des examens complémentaires radiologiques sont souvent nécessaires en première intention : </p>
                <ul class="text-justify">
                  <li>
                    <p>Radiographies du rachis thoracique</p>
                  </li>
                  <li>
                    <p>+/- Recherche de signes biologiques d’inflammation (VS, CRP) par prise de sang.</p>
                  </li>
                </ul>
                <p class="text-justify">En l’absence d’affection rachidienne ou viscérale, on évoque des dorsalgies
                  fonctionnelles traitées efficacement en ostéopathie. </p>

                <h4 class="text-justify pt-3">Cause de la dorsalgie fonctionnelle : </h4>
                <p class="text-justify">Nous avons très souvent les bras devant, travail devant l’ordinateur, pour
                  porter,
                  faire de la cuisine, lire, regarder notre téléphone... Rappelons que notre posture physiologique est
                  celle
                  de l’Homme debout, qui marche et court. Ces postures ont tendance à orienter les épaules vers l’avant
                  et
                  à arrondir le dos ce qui met sous contrainte la zone entre les omoplates.</p>
                <h4 class="text-justify pt-3">Astuces pour prévenir une dorsalgie ou éviter sa récidive : </h4>
                <ul class="text-justify">
                  <li><p>Engager les omoplates : pour protéger le dos, il faut resserrer les omoplates et les abaisser.
                    A partir de cette posture, nous pouvons solliciter les bras sans risque pour le dos. </p></li>
                  <li><p>Renforcer les muscles «grands» : grand dorsal, grand pectoral, rhomboïde, trapèzes,
                    paravertébraux.
                    Exercices du superman, tractions, rameur, traction d’élastique vers l’arrière...</p></li>
                  <li><p>Etirer la région de l’omoplate :<br>
                    1)Positionner les mains sur vos épaules, avec les coudes, dessiner les cercles les plus grands
                    possible vers l’arrière.
                    <br>
                    2)Mains jointes au dessus de la tête, reculer les coudes puis monter les mains au maximum. <br>
                    3)Mains jointes derrière le bassin, reculer les épaules puis descendre les mains au maximum.</p>
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