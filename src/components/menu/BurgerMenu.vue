<template>
  <div class="navigation">

    <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item"><a href="" class="navigation__link" @click="closeNav()">Le Cabinet
          d'Ostéopathie</a>
          <ul>
            <li class="navigation__item"><a href="#" class="navigation__link navigation__link__sub" @click="closeNav()">L'ostéopathie</a>
            </li>
            <li class="navigation__item "><a href="#" class="navigation__link navigation__link__sub"
                                             @click="closeNav()">Quand consulter</a>
            </li>
            <li class="navigation__item "><a href="#" class="navigation__link navigation__link__sub"
                                             @click="closeNav()">Tarifs & Horaires</a>
            </li>
          </ul>
        </li>
        <li class="navigation__item"><a href="#book_page" class="navigation__link" @click="closeNav()">Repenser
          l'équitation</a>
          <ul>
            <li class="navigation__item"><a href="#" class="navigation__link navigation__link__sub" @click="closeNav()">Le
              livre</a>
            </li>
            <li class="navigation__item"><a href="#" class="navigation__link navigation__link__sub" @click="closeNav()">Les
              auteurs</a>
            </li>
            <li class="navigation__item "><a href="#" class="navigation__link navigation__link__sub"
                                             @click="closeNav()">Les
              vidéos</a>
            </li>
            <li class="navigation__item "><a
                href="https://www.adverbum.fr/editions-desiris/frederic-brigaud-et-josephine-lyon/repenser-l-equitation_6xb5n7paauhq.html"
                class="navigation__link navigation__link__sub" target="_blank">Commander le livre</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'BurgerMenu',
  methods: {
    closeNav() {
      document.getElementById("navi-toggle").checked = false;
    }
  }


}
</script>

<style>

</style>
