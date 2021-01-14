<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="0"
        controls
        indicators
        background="#red"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-auto shadow rounded"
              width="585"
              height="827"
              src="../../../../public/img/repenser_equitation_cover.jpg"
              alt="Cabinet Ostéopathie Paris 15"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-auto shadow rounded"
              width="1200"
              height="1694"
              src="../../../../public/img/repenser_equitation_4.jpg"
              alt="Cabinet Ostéopathie Paris 15"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style>
.carousel-control-prev-icon{
  background-image:url("../../../../public/icon/left-arrow-carousel.svg");
  width: 40px;
  height: 40px;
}
.carousel-control-next-icon{
  background-image:url("../../../../public/icon/right-arrow-carousel.svg");
  width: 40px;
  height: 40px;
}
</style>