<template>
  <div>
    <div class="row">
      <div v-for="reason in reasonSelected" :key="reason.id" class="col-md-3 col-sm-6 highlight">
        <div class=" card-home">
          <div class="card-body text-center">
            <img alt="" class="card-icon mb-4" src="../../../../../public/icon/question.svg">
            <div class="h-caption"><h4 class="card-title">{{ reason.title }}</h4></div>
            <p class="card-text"> {{ reason.subTitle }}</p>
            <div v-if="reason.text">
            <b-button v-b-toggle="'sidebar-' + reason.id" variant="light">Lire notre dossier
            </b-button>
            <b-sidebar :id="'sidebar-'+reason.id" :title="reason.title" shadow class="sidebar">
              <div class="px-3 py-20 m-3" v-html="reason.text">
              </div>
            </b-sidebar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ReasonModal",
  props: {
    noCloseOnBackdrop:Boolean,
    parentData: String,
  },
  data() {
    return {
      reasons: [
        {
          id: 1,
          title: 'Lombalgie / lumbago',
          subTitle: 'Douleur en bas du dos',
          catgeory: 'backPain',
          text: '<p class="text-justify">\n' +
              'Selon l’International Association for the study of pain (IASP), la lombalgie peut être définie comme\n' +
              'la perception d’une douleur provenant de la région lombaire (bas du dos) et / ou du sacrum (os médian\n' +
              'et supérieur du bassin).\n' +
              '<br><br>Elle peut s’accompagner de décharges dans la jambes médicalement appelées radiculopathies :\n' +
              'trouble neurologique qui bloque la conduction d’un nerf ou de ses racines.\n' +
              'On parle alors de sciatique, de <b>sciatalgie</b>, de <b>sciatalgie</b> ou encore de <b>cruralgie</b>\n' +
              'en fonction de la topographie de la racine ou du nerf atteint. Elle résulte d’une compression ou d’une\n' +
              'diminution d’apport sanguin du nerf ce qui entraîne des troubles de la sensibilité appelées\n' +
              'paresthésies (fourmillement, picotement, engourdissement).\n' +
              '</p>\n' +
              '<video class="reason-video col-sm-12 mb-3"  src="video/back-pain.mp4" autoplay loop playsinline muted></video>\n' +
              '\n' +
              '<p class="text-justify">Les douleurs sont typiquement intermittentes, d\'un seul côté (unilatérale),\n' +
              'irradiantes du rachis lombaire jusque dans les orteils, parfois majorées lors des efforts de toux ou à\n' +
              'la défécation, calmées par le repos en position allongée ou debout. Elles peuvent être déclenchées par\n' +
              'la position assise (notamment en voiture).</p>\n' +
              '\n' +
              '<p class="font-italic text-justify">«Il faut bien comprendre que nous ne sommes pas constitués\n' +
              'physiologiquement et structurellement pour être en position assise prolongée. Nous sommes fait pour\n' +
              'être debout, marcher, courir, bouger, nous reposer en position allongée. Nos modes de vie sédentaires\n' +
              'sont la cause principale de notre mal de dos. Nous n’en avons pas conscience car le mal de dos se\n' +
              'manifeste souvent à la suite d’un faux mouvements ou d’une activité quelconque. Le souffrant accuse à\n' +
              'tord ce mauvais geste qui’ n’est en réalité que l’interrupteur d’un problème sous-jacent.» </p>\n' +
              '<p class="text-justify">Les lombalgies représentent à elles seules plus de <b>la moitié des motifs de\n' +
              'consultation en ostéopathie </b> et la seconde place en médecine générale. Elles représentent un <b>problème\n' +
              'de santé publique majeur</b> en raison de sa fréquence et des répercussions socio-économiques qui en\n' +
              'découlent (arrêt de travail, bien-être, appréhension pour réaliser des activités, baisse de moral...).\n' +
              '</p>\n' +
              '<h4 class="text-justify pt-3">Astuces pour prévenir une lombalgie ou éviter la récidive : </h4>\n' +
              '<ul class="text-justify">\n' +
              '<li><p>Bouger : Le cartilage se réhydrate pas le mouvement, la circulation sanguine des jambes vers\n' +
              'le cœur s’obtient pas la marche, je ne reste pas en position statique prolongée même si je ne\n' +
              'ressens pas de douleur.</p></li>\n' +
              '<li>\n' +
              '<p>Limiter les port de charge, si je n’ai pas le choix, je gaine mes abdominaux, j’utilise mes deux\n' +
              'bras,\n' +
              'j’équilibre la charge sur mes deux épaules (je privilégie le sac à dos au sac à main). En cas de\n' +
              'déménagement,\n' +
              'ou si je présente une lésion (hernie discale), je peux mettre une ceinture lombaire\n' +
              'ponctuellement, pour un trajet en voiture par\n' +
              '</p>\n' +
              '</li>\n' +
              '<li><p>Eviter certains gestes : les vertèbres n’aiment pas le mouvement vers l’avant, pour me pencher\n' +
              'en avant,\n' +
              'je fléchis mes genoux et/ou mes hanche, je n’arrondis jamais le bas du dos. J’évite également les\n' +
              'mouvements de torsion,\n' +
              'je choisis une chaise qui pivote si je travaille sur deux écrans, si je suis debout, ce sont mes\n' +
              'pieds qui pivotent.</p></li>\n' +
              '<li><p>Je respecte les courbures de ma colonne : en position assise, je positionne mon bassin en\n' +
              'position neutre.\n' +
              'La cambrure du bas du dos est physiologique, il faut la respecter, ni plus, ni moins.\n' +
              'J’évite les longues marches en avec des chaussures à talons pour ne pas accentuer cette\n' +
              'cambrure.</p></li>\n' +
              '<li><p>Je banis les postures asymétriques : croiser les jambes, torsion de la colonne sur un côté.</p>\n' +
              '</li>\n' +
              '<li><p>Je décomprime mes vertèbres lombaires : je me suspends à un support solide (barre de traction,\n' +
              'branche, mezzanine, escalier). Je peux aussi, en position debout, mettre tout le poids de mon corps\n' +
              'sur\n' +
              'mes avant-bras posés verticalement sur un bureau. En position allongée, je peux réunir mes deux\n' +
              'genoux\n' +
              'et les rapprocher de ma poitrine, de façon rectiligne puis circulaire</p>.\n' +
              '</li>\n' +
              '</ul>'
        },
        {
          id: 2,
          title: 'Cervicalgie',
          subTitle: 'Douleur du cou / Torticolis',
          catgeory: 'backPain',
          text: '<p class="text-justify">\n' +
              'On dénomme cervicalgie les douleurs du rachis cervical plus communément toutes les douleurs de la région du cou.\n' +
              'Elle peut diffuser dans le bras et/ou être associée de maux de tête.\n' +
              '</p>\n' +
              '<p class="text-justify">La douleur et la raideur cervicale sont des symptômes très fréquents, particulièrement chez les adultes.\n' +
              'La cervicalgie affecte entre 10 et 15% de la population. Tout comme la lombalgie, elle a un impact sur la qualité de vie et l’une des principales causes d’arrêt de travail.\n' +
              'Le traitement ostéopathique là aussi semble être la méthode de soin la plus efficace à court et à long terme.</p>\n' +
              '<p class="text-justify">Dans la très grande majorité des cas, il s’agit de cervicalgies communes (sans gravité) dues à un trouble fonctionnel musculo-ligamentaire de la région cervicale ou à une détérioration dégénérative (l’arthrose).\n' +
              'La cervicarthrose anatomique est d’une extrême fréquence : plus de 50 % des individus après 40 ans et elle augmente avec l’âge</p>\n' +
              '<p class="text-justify">Il est important de comprendre que l’arthrose n’est pas une fatalité et qu’elle n’est pas synonyme\n' +
              'de douleur sinon la moitié des individus après 40 ans auraient mal au cou! Il n’y a d’ailleurs pas de concordance entre le stade d’évolution de l’arthrose et la douleur ressentie</p>\n' +
              '<h4 class="text-justify pt-3">Astuces pour prévenir les cervicalgies : </h4>\n' +
              '<ul class="text-justify">\n' +
              '<li>\n' +
              '<p>Respecter l’horizontalité du regard : hausser le haut de l’écran, éviter les postures prolongées tête en bas </p>\n' +
              '</li>\n' +
              '<li>\n' +
              '<p>Traiter les troubles de la mâchoire : serrement des dents, problèmes d’occlusion</p>\n' +
              '</li>\n' +
              '<li>\n' +
              '<p>Traiter les troubles ophtalmiques et orthoptistes : porter des lunettes ou des lentilles adaptées à votre vision, suivi ophtalmologique régulier, séances d’orthoptie si nécessaire</p>\n' +
              '</li>\n' +
              '<li>\n' +
              '<p>Techniques de gestion du stress : activité physique pour décharger + activité douce pour abaisser le seuil de stress</p>\n' +
              '</li>\n' +
              '<li>\n' +
              '<p>Eviter la posture sur le ventre pour dormir</p>\n' +
              '</li>\n' +
              '<li>\n' +
              '<p>Prendre en charge les troubles de la postures dans son ensemble, les cervicalgies peuvent être la conséquences d’asymétries de postures provenant d’ailleurs :<br>\n' +
              'éviter de croiser les jambes, de toujours porter du même côté, d’incliner la tête toujours du même côté (exemple : port de casque),\n' +
              'de rééquilibrer le corps si pratique d’activité symétrique (ex : sports de raquette)</p>\n' +
              '</li>\n' +
              '</ul>'
        },
        {
          id: 3,
          title: 'Sciatique/Sciatalgie',
          subTitle: 'Douleur qui part du bas du dos ou de la fesse et irradie à la face postérieure de la jambe pouvant parfois aller jusqu’au pied.',
          catgeory: 'backPain',
          text: ''
        },
        {
          id: 4,
          title: 'Cruralgie',
          subTitle: 'Douleur qui part du bas du dos et qui irradie sur la face antérieure de cuisse jusqu’au genou.',
          catgeory: 'backPain',
          text: ''
        },
        {
          id: 5,
          title: 'Dorsalgie',
          subTitle: 'ouleur au milieu du dos, entre les omoplates',
          catgeory: 'backPain',
          text: '<p class="text-justify">\n' +
              'Les dorsalgies sont des douleurs ressenties au milieu du dos, en regard du rachis thoracique (T1 à\n' +
              'T12),\n' +
              'dans la zone des omoplates. Elles peuvent être la traduction d’une souffrance du rachis thoracique,\n' +
              'des côtes,\n' +
              'de la musculature dorsale, d’un problème de posture mais aussi souvent d’une souffrance viscérale\n' +
              '(système cardio-pulmonaire ou digestif haut).\n' +
              '</p>\n' +
              '<h4 class="text-justify pt-3">Conduite à tenir : </h4>\n' +
              '<p class="text-justify">Contrairement aux lombalgies, en dehors de toute orientation diagnostique\n' +
              'particulière,\n' +
              'des examens complémentaires radiologiques sont souvent nécessaires en première intention : </p>\n' +
              '<ul class="text-justify">\n' +
              '<li>\n' +
              '<p>Radiographies du rachis thoracique</p>\n' +
              '</li>\n' +
              '<li>\n' +
              '<p>+/- Recherche de signes biologiques d’inflammation (VS, CRP) par prise de sang.</p>\n' +
              '</li>\n' +
              '</ul>\n' +
              '<p class="text-justify">En l’absence d’affection rachidienne ou viscérale, on évoque des dorsalgies\n' +
              'fonctionnelles traitées efficacement en ostéopathie. </p>\n' +
              '\n' +
              '<h4 class="text-justify pt-3">Cause de la dorsalgie fonctionnelle : </h4>\n' +
              '<p class="text-justify">Nous avons très souvent les bras devant, travail devant l’ordinateur, pour\n' +
              'porter,\n' +
              'faire de la cuisine, lire, regarder notre téléphone... Rappelons que notre posture physiologique est\n' +
              'celle\n' +
              'de l’Homme debout, qui marche et court. Ces postures ont tendance à orienter les épaules vers l’avant\n' +
              'et\n' +
              'à arrondir le dos ce qui met sous contrainte la zone entre les omoplates.</p>\n' +
              '<h4 class="text-justify pt-3">Astuces pour prévenir une dorsalgie ou éviter sa récidive : </h4>\n' +
              '<ul class="text-justify">\n' +
              '<li><p>Engager les omoplates : pour protéger le dos, il faut resserrer les omoplates et les abaisser.\n' +
              'A partir de cette posture, nous pouvons solliciter les bras sans risque pour le dos. </p></li>\n' +
              '<li><p>Renforcer les muscles «grands» : grand dorsal, grand pectoral, rhomboïde, trapèzes,\n' +
              'paravertébraux.\n' +
              'Exercices du superman, tractions, rameur, traction d’élastique vers l’arrière...</p></li>\n' +
              '<li><p>Etirer la région de l’omoplate :<br>\n' +
              '1)Positionner les mains sur vos épaules, avec les coudes, dessiner les cercles les plus grands\n' +
              'possible vers l’arrière.\n' +
              '<br>\n' +
              '2)Mains jointes au dessus de la tête, reculer les coudes puis monter les mains au maximum. <br>\n' +
              '3)Mains jointes derrière le bassin, reculer les épaules puis descendre les mains au maximum.</p>\n' +
              '</li>\n' +
              '</ul>'
        },
        {
          id: 6,
          title: 'Douleur Articulaire',
          subTitle: '',
          catgeory: 'jointPain',
          text: '<p class="text-justify">On appelle « stressor » une forte stimulation (émotion forte, agression...) ' +
              'qui déclenche des réactions involontaires dites «neurovégétatives sympathiques» à savoir : l' +
              'e cœur qui bat plus vite, la bouche sèche, les mains moites, la respiration qui s’amplifie, la sueur, la rougeur du visage, l’apparition de tremblements…</p>\n' +
              '<video class="reason-video col-sm-12 mb-3"  src="video/joint.mp4" autoplay loop playsinline muted></video>' +
              '<p class="text-justify">Une articulation peut se mettre en dysfonction pour des raisons variées : traumatisme,' +
              ' faux mouvement, mauvaise posture, alimentation trop acide, mauvais apport sanguin, stress, trouble digestif…</p>' +
              '<p class="text-justify">Les conséquences de cette dysfonctions vont être multiples : une raideur de l’articulation et donc une difficulté à faire certains gestes,' +
              ' une douleur, une inflammation, une hypersollicitation musculaire, un trouble de la vascularisation et de la conduction nerveuse,' +
              ' l’apparition de nouvelle dysfonctions à distance (articulaire, viscérales) bref c’est tout le système qui en sera perturbé. <br>' +
              'A terme, si la dysfonction ne disparait pas on assistera à une modification irréversible des tissus : c’est alors qu’apparaissent les phénomènes de fibrose et d’arthrose.</p>\n' +
              '<p class="text-justify">Le but de l’ostéopathe n’est pas de « remettre les os en place » ni de les replacer dans un bon alignement mais de <b>traiter ces dysfonctions articulaires</b>' +
              ' ou d’éviter qu’il en apparaisse. L’intégrité du système locomoteur est d’une importance cruciale pour le fonctionnement général du corps et dans le maintien de la santé.</p>'
        },
        {
          id: 7,
          title: 'Stress et troubles du sommeil',
          subTitle: '',
          catgeory: 'stress',
          text: '<p class="text-justify">On appelle « stressor » une forte stimulation (émotion forte, agression...) qui déclenche des réactions involontaires dites' +
              ' «neurovégétatives sympathiques» à savoir : le cœur qui bat plus vite, la bouche sèche, les mains moites, la respiration qui s’amplifie, la sueur,' +
              ' la rougeur du visage, l’apparition de tremblements…</p>' +
              '<p class="text-justify">Le stressor peut avoir différentes origines : traumatique, infectieuse ou psychique.\n' +
              'Normalement, le retour à la normal s’effectue de façon automatique grâce au système «neurovégétatif parasympathique».</p>' +
              '<p class="text-justify">Parfois, l’état de stress est maintenu dans le temps car l’intensité ou le nombre de « stressors » sont trop importants pour un retour à la normale.' +
              ' Cela aboutit à une situation de tension permanente :</p>' +
              '<ul class="text-justify">' +
              '<li>Trouble du sommeil, irritabilité ;</li>' +
              '<li>Blocage articulaire douloureux, tensions musculaires (trapèzes, cervicale, mâchoire...) </li>' +
              '<li>Maux de ventre</li>' +
              '<li>Boule dans la gorge</li>' +
              '<li>Serrage ou grincement des dents</li>' +
              '<li>Tensions généralisées dans tout le corps</li>' +
              '</ul>' +
              '<p class="text-justify">Le système neurovégétatif sympathique se situe au niveau des articulations qui relient les côtes et les vertèbres du thorax.' +
              ' Le système parasympathique se situe essentiellement au niveau du crâne et du bassin.</p>' +
              '<p class="text-justify">L’ostéopathe peut directement agir sur le système neurovégétatif en travaillant sur le crâne, les vertèbres et le bassin.' +
              ' Il peut ainsi en rééquilibrant les deux systèmes : effacer l’état de stress, permettre au patient de retrouver un état de sérénité et un sommeil de meilleure qualité.' +
              ' Comme le corps et l’esprit sont indissociable, l’action de relâcher ces tensions du corps diminuera le seuil de stress.</p>'
        },
        {
          id: 9,
          title: 'Les différentes causes',
          subTitle: 'Accouchement difficile, difficultés de succion, d’allaitement, etc...',
          catgeory: 'baby',
          text: '<p class="text-justify">L’ostéopathe peut dès la naissance effectuer un bilan sur le nouveau-né.' +
              ' Ses techniques et sa prise en charge sont sans risque et indolores.</p>' +
              '<p class="text-justify">Pour les nouveau-nés et les bébés : </p>' +
              '<ul class="text-justify">' +
              '<li>Bilan</li>' +
              '<li>Accouchement difficile : instrumentation (forceps, ventouses), durée du travail...</li>' +
              '<li>Prématurité, aspiration, réanimation à la naissance</li>' +
              '<li>Cordon ombilical autour du cou</li>' +
              '<li>Accouchement en siège</li>' +
              '<li>Difficultés de succion, d’allaitement, frénotomie...</li>' +
              '<li>Pleurs incessants, troubles du sommeil, nervosité, se cambre</li>' +
              '<li>Pieds : déformation en varus (pied en dedans)</li>' +
              '<li>Dysplasie de hanche (en complément du suivi médical)</li>' +
              '<li>Yeux qui coulent, conjonctivite hors période d’infection, canal lacrymal bouché</li>' +
              '<li>Difficultés de motricité : ne se retourne pas, ne réussit pas à se déplacer, quatre pattes, difficultés pour marcher, tombe toujours du même côté, pieds en dehors ou en dedans à la marche ou à la course...</li>' +
              '<li>Syndrome de kiss</li>' +
              '</ul>'
        },
        {
          id: 10,
          title: 'Les Reflux gastro-oesophagien ',
          subTitle: '(RGO)',
          catgeory: 'baby',
          text: '<p class="text-justify">Le msd manual définit le reflux gastro-oesophagien par la remontée des aliments et des acides gastriques de l’estomac à l’oesophage et,' +
              ' parfois, à la bouche.</p>' +
              '<p class="text-justify">Il peut être causé par la position allongée du nourrisson; par une suralimentation; les maladies orl chroniques, ' +
              'l’exposition à la caféine ou la nicotine; une intolérance ou une allergie alimentaire; ou une anomalie du tube digestif.' +
              'L’anneau musculaire situé à la jonction de l’œsophage et de l’estomac (sphincter œsophagien inférieur) empêche en principe le contenu de l’estomac de pénétrer dans l’œsophage.</p>' +
              '<p class="text-justify">Chez les nourrissons, ce muscle peut être sous-développé, ou il peut se détendre à des moments inappropriés,' +
              'permettant ainsi au contenu de l’estomac de remonter (reflux) dans l’œsophage. Les nourrissons peuvent vomir, saliver, tousser, un refus de s’alimenter, une irritabilité, une tendance à se cambrer... </p>' +
              '<p class="text-justify">Si votre ostéopathe ne peut pas agir sur tous ces aspects, il sait minimiser les contraintes qui s’exercent sur l’estomac et l’oesophage et sur la commande nerveuse,' +
              ' les fameux «nerfs vagues». Il traite également les conséquences de du reflux. Il apaisera ainsi la douleur ressentie par votre bébé et attenuera ces remontées acides.</p>'
        },
        {
          id: 11,
          title: 'Les Coliques',
          subTitle: 'Les coliques sont un symptôme très fréquent dans les premiers mois de vie',
          catgeory: 'baby',
          text: '<p class="text-justify">Les coliques sont définies comme des épisodes de pleurs durant au minimum trois heures par jour pendant au moins trois jours par semaine pendant plus de trois semaines.' +
              ' Le bébé en dehors des crises est en pleine santé et se nourrit correctement.</p>' +
              '<p class="text-justify">Les coliques donnent lieu à un tableau caractéristique : le nourrisson a le visage rouge, les poings serrés, le front plissé,' +
              ' les cuisses repliées sur le ventre qui semble ballonné avec des émissions répétées de gaz. Ces pleurs surviennent le plus souvent en fin de journée,' +
              ' entre 18 h et minuit</p>' +
              '<p class="text-justify">Il n\'existe à ce jour aucune cause réellement déterminée pouvant expliquer les coliques du nourrisson.' +
              ' De nombreuses hypothèses sont néanmoins envisagées, parmi lesquelles : l’immaturité du système digestif,' +
              ' l’excès d’air avalé pendant l’allaitement, l’intolérance au lactose ou aux protéines de lait de vache.</p>' +
              '<p class="text-justify">Ce n’est pas parce que ces crises évoluent spontanément vers la disparition (à partir de l’âge de 4 mois) qu’il est inutile de les prendre en charge.' +
              ' Le caractère inconfortable voire douloureux pour l’enfant, les pleurs, le manque de sommeil et les tensions qui' +
              ' en découlent sont autant de raisons valables pour consulter votre ostéopathe. Le stress que cela inflige aux parents s’additionne à toutes ces raisons.</p>' +
              '<p class="text-justify">Les thérapies manuelles ont démontré leurs efficacité dans le traitement des coliques du nourrisson. ' +
              'Si l’ostéopathe ne peut avoir d’influence sur la maturation du tube digestif ni sur l’intolérance au lait, il peut agir sur la qualité de succion.</p>' +
              '<p class="text-justify">En effet, il existe une relation directe entre les muscles de la bouche et les cervicales supérieures.' +
              ' Le simple fait de relâcher les cervicales supérieures peut, dans de nombreux cas, faciliter la succion et diminuer l’absorption d’air pendant la tétée,' +
              ' que ce soit au sein ou au biberon.</p>' +
              '<p class="text-justify">D’autres dérangements mécaniques peuvent participer à ces troubles intestinaux (tension digestive, ligamentaire, bassin…).' +
              ' L’ostéopathe utilise des techniques douces, sans danger et indolores pour enlever l’ensemble de ces dérangements mécaniques ce qui améliore le confort de l’enfant et sa digestion.</p>'
        },
        {
          id: 12,
          title: 'Plagiocéphalie - torticolis congénital',
          subTitle: 'On appelle plagiocéphalie, un aplatissement du crâne',
          catgeory: 'baby',
          text: '<p class="text-justify">Le crâne du nourrisson est constitué de six os non soudés mais maintenus entre eux par un tissu élastique appelé suture.' +
              ' Les espaces entre les os sont appelés fontanelles. Les os du crâne restent séparés pendant 12-18 mois.</p>' +
              '<p class="text-justify">On distingue deux types de plagiocéphalie :</p>' +
              '<ul class="text-justify">' +
              '<li>Les plagiocéphalies par fusion (Les plagiocéphalies par fusion prématurée d’une suture (coronale ou lambdoïde).' +
              ' La déformation du crâne est visible dès la naissance. Elles sont très rares (moins de 5/1000 naissances).</li>' +
              '<li>Les plagiocéphalies positionnelles ou posturales où l’aplatissement est secondaire à une contrainte mécanique sur le crâne.' +
              ' Ce type de contrainte peut avoir eu lieu pendant la grossesse, l’accouchement ou après la naissance. C’est ce type de plagiocéphalie sur lequel votre ostéopathe intervient. Sa fréquence est beaucoup plus importante (19,7% à 4 mois)</li>' +
              '</ul>' +
              '<p class="text-justify">La déformation de plagiocéphalie positionnelle correspond, le plus souvent, à un aplatissement de la partie postérieure du crâne,' +
              ' plus rarement de sa partie antérieure. Elle est plus fréquente chez les garçons (71% cas) et chez les jumeaux. ' +
              'Elle s’associe à un torticolis congénital dans 37% des bébés avec aplatissement postérieur et dans 89,7% des bébés présentant un aplatissement antérieur.</p>' +
              '<p class="text-justify">Un torticolis congénital est généralement provoqué par une contracture unilatérale et une fibrose d’un muscle du cou' +
              ' (sterno-cléido-occipito-mastoïdien, SCOM) qui occasionne une inclinaison de la tête du côté du muscle raccourci et une rotation du côté opposé.' +
              ' Il touche un enfant sur 300. La déformation par traction et/ou compression s’installe in utéro ou chez le nouveau-né ' +
              'et le fait de mettre les enfants sur le dos est un facteur positionnel aggravant même s’il n’est pas à remettre en cause</p>' +
              '<p class="text-justify">La prise en charge ostéopathique consiste à libérer les sutures crânienne, normaliser les os du crâne mais surtout à traiter la posture générale' +
              ' (cervicales, bassin, membres, abdomen…). L’objectif de l’ostéopathe est d’aider le nourrisson à s’adapter à la vie extra-utérine et à le libérer des tensions et contraintes qu’il a pu subir durant la grossesse et l’accouchement</p>' +
              '<p class="text-justify">Cette méthode contribue à diminuer significativement le degré de l’asymétrie crânienne.\n' +
              'De nombreux conseils sont également donnés aux parents notamment pour stimuler la rotation opposée à celle du torticolis et/ou du méplat crânien.</p>'
        },
      ]
    }
  },
  computed: {
    reasonSelected() {
      return this.reasons.filter(p => p.catgeory === this.parentData);
    }
  },
}
</script>

<style scoped>

</style>