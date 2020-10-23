<template>
  <div id="reasons">
    <div id="cabinet-background">
      <div class="osteopathie-header">
        <h3 class="header--secondary">Pourquoi consulter ? </h3>
      </div>
      <div  class="reason-modal ">
        <div id="back_pain" class="reason-modal--sub reason-modal--sub--1">
          <div class="reason-box reason-box--1">
            <img class="reason-img reason-img--1" src="../../../../public/img/back-pain.jpg" alt="">
            <p class="reason-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque, aut corporis dicta ea eaque
              est excepturi expedita fuga harum laborum molestiae mollitia nesciunt pariatur quae quaerat quam qui quis
              quisquam reiciendis sed sit veritatis! Eaque molestiae nulla quidem suscipit tempora? Aut blanditiis,
              laborum odit possimus saepe sequi suscipit. Aut?</p>
          </div>
          <div id="joint" class="reason-box reason-box--2">
            <img class="reason-img reason-img--2" src="../../../../public/img/joint.jpg" alt="">
            <p class="reason-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque, aut corporis dicta ea eaque
              est excepturi expedita fuga harum laborum molestiae mollitia nesciunt pariatur quae quaerat quam qui quis
              quisquam reiciendis sed sit veritatis! Eaque molestiae nulla quidem suscipit tempora? Aut blanditiis,
              laborum odit possimus saepe sequi suscipit. Aut?</p>          </div>
        </div>
        <div id="stress" class="reason-modal--sub reason-modal--sub--2">
          <div class="reason-box reason-box--3">
            <img class="reason-img reason-img--3" src="../../../../public/img/stress.jpg" alt="">
            <p class="reason-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque, aut corporis dicta ea eaque
              est excepturi expedita fuga harum laborum molestiae mollitia nesciunt pariatur quae quaerat quam qui quis
              quisquam reiciendis sed sit veritatis! Eaque molestiae nulla quidem suscipit tempora? Aut blanditiis,
              laborum odit possimus saepe sequi suscipit. Aut?</p>          </div>
          <div id="trauma" class="reason-box reason-box--4">
            <img class="reason-img reason-img--4" src="../../../../public/img/trauma.jpg" alt="">
            <p class="reason-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque, aut corporis dicta ea eaque
              est excepturi expedita fuga harum laborum molestiae mollitia nesciunt pariatur quae quaerat quam qui quis
              quisquam reiciendis sed sit veritatis! Eaque molestiae nulla quidem suscipit tempora? Aut blanditiis,
              laborum odit possimus saepe sequi suscipit. Aut?</p>          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Reasons',
  methods: {
    selectedSpe(param) {
      event.preventDefault()
      this.$emit('handle-spe', param)
    },

  }
}

</script>

<style scoped>


</style>
