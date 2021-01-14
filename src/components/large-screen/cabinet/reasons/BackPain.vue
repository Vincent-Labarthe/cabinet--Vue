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
            <b-sidebar id="sidebar-1" title="Lombalgie" shadow>
              <div class="px-3 py-20">
                <p class="text-justify">
                  Selon l’International Association for the study of pain (IASP), la lombalgie peut être définie comme la perception d’une douleur provenant de la région lombaire (bas du dos) et / ou du sacrum (os médian et supérieur du bassin).
                  <br><br>Elle peut s’accompagner de décharges dans la jambes médicalement appelées radiculopathies : trouble neurologique qui bloque la conduction d’un nerf ou de ses racines.
                  On parle alors de sciatique, de <b>sciatalgie</b>, de <b>sciatalgie</b> ou encore de <b>cruralgie</b> en fonction de la topographie de la racine ou du nerf atteint. Elle résulte d’une compression ou d’une diminution d’apport sanguin du nerf ce qui entraîne des troubles de la sensibilité appelées paresthésies (fourmillement, picotement, engourdissement).
                </p>
                <img src="../../../../../public/img/back-pain.jpg" class="img-fluid img-thumbnail" style="width: 30%" alt="cabinet osteopathe paris 15">

                <p class="text-justify">Les douleurs sont typiquement intermittentes, d'un seul côté (unilatérale), irradiantes du rachis lombaire jusque dans les orteils, parfois majorées lors des efforts de toux ou à la défécation, calmées par le repos en position allongée ou debout. Elles peuvent être déclenchées par la position assise (notamment en voiture).</p>

                <p class="font-italic text-justify">«Il faut bien comprendre que nous ne sommes pas constitués physiologiquement et structurellement pour être en position assise prolongée.  Nous sommes fait pour être debout, marcher, courir, bouger, nous reposer en position allongée. Nos modes de vie sédentaires sont la cause principale de notre mal de dos. Nous n’en avons pas conscience car le mal de dos se manifeste souvent à la suite d’un faux mouvements ou d’une activité quelconque. Le souffrant accuse à tord ce mauvais geste qui’ n’est en réalité que l’interrupteur d’un problème sous-jacent.» </p>
                <p class="text-justify">Les lombalgies représentent à elles seules plus de <b>la moitié des motifs de consultation en ostéopathie </b> et la seconde place en médecine générale. Elles représentent un <b>problème de santé publique majeur</b> en raison de sa fréquence et des répercussions socio-économiques qui en découlent (arrêt de travail, bien-être, appréhension pour réaliser des activités, baisse de moral...).</p>
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
            <p class="card-text">Douleur qui part du bas du dos ou de la fesse et irradie à la face postérieure de la jambe pouvant parfois aller jusqu’au pied. </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 highlight">
        <div class=" card-home">
          <div class="card-body text-center">
            <img class="card-icon mb-4" src="../../../../../public/icon/question.svg" alt="">
            <div class="h-caption"><h4 class="card-title">Cruralgie</h4></div>
            <p class="card-text">Douleur qui part du bas du dos et qui irradie sur la face antérieure de cuisse jusqu’au genou. </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 highlight">
        <div class=" card-home">
          <div class="card-body text-center">
            <img class="card-icon mb-4" src="../../../../../public/icon/question.svg" alt="">
            <div class="h-caption"><h4 class="card-title">Dorsalgie</h4></div>
            <p class="card-text">Douleur au milieu du dos, entre les omoplates </p>
            <b-button  v-b-toggle.sidebar-2 variant="light">Lire notre dossier</b-button >
            <b-sidebar id="sidebar-2" title="Dorsalgie" shadow>
              <div class="px-3 py-20">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
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