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
          d'Ostéopathie</a></li>
        <li class="navigation__item"><a href="#book_page" class="navigation__link" @click="closeNav()">Repenser
          l'équitation</a></li>
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
