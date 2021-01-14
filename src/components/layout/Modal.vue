<template>
    <div class="modal-box">
      <div class="modal-header">
        <h3 class="">Site en cours de création</h3>
      </div>
      <div class="modal-body">
        <h3 class="">Attention ce site est en cours de création et n'est optimisé pour les smatphones, des fonctionnalités peuvent ne pas fonctionner. </h3>
      </div>
      <div class="modal-footer-btn">
        <button class="modal-btn" @click="close">J'ai compris ! </button>
      </div>
    </div>
</template>


<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>


<style>

</style>