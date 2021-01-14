<template>
<!--  <div id="footer">
    <div class="footer&#45;&#45;container">
      <div class="footer&#45;&#45;container footer&#45;&#45;container__top">
        <ul>
          <li class="footer&#45;&#45;container__link">L'ostéopathie</li>
          <li class="footer&#45;&#45;container__link">Info pratiques</li>
          <li class="footer&#45;&#45;container__link">Contact</li>
        </ul>
      </div>
      <div class="footer&#45;&#45;container footer&#45;&#45;container__medium">
        <img class="footer&#45;&#45;container__medium&#45;&#45;icon" src="../../../public/icon/instagram.svg" alt="">
        <img class="footer&#45;&#45;container__medium&#45;&#45;icon" src="../../../public/icon/facebook.svg" alt="">
      </div>
      <div class="footer&#45;&#45;container__bottom">

      </div>
    </div>
  </div>-->

  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="bottom">
      <b-navbar-brand ><p class="footer--container__bottom footer--container__bottom--text">© 2020 Joséphine Lyon | Design by <a
          href="https://www.linkedin.com/in/%E2%8C%A8%EF%B8%8F-vincent-labarthe-6922b333/">Vincent Labarthe</a></p></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

</template>

<script>

export default {
  name: 'Footer',
}

</script>

<style scoped>


</style>
