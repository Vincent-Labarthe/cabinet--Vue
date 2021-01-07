<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="2500"
        controls
        indicators
        background="#ababab"
        style="box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide rounded="lg">
        <template #img >
          <img
              class=" d-block img-fluid w-auto "
              title="Nulla vitae elit libero, a pharetra augue mollis interdum."
              width="1350"
              height="650"
              src="../../../../public/img/carousel-1.jpg"
              alt="Cabinet Ostéopathie Paris 15"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide rounded="lg">
        <template #img>
          <img
              class="  d-block img-fluid w-auto  "
              width="1350"
              height="650"
              src="../../../../public/img/carousel-4.jpg"
              alt="Cabinet Ostéopathie Paris 15"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide rounded="lg">
        <template #img>
          <img
              class=" d-block img-fluid w-auto  "
              width="1350"
              height="650"
              src="../../../../public/img/carousel-3.jpg"
              alt="Cabinet Ostéopathie Paris 15"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide rounded="lg">
        <template #img>
          <img
              class=" d-block img-fluid w-auto  "
              width="1350"
              height="650"
              src="../../../../public/img/carousel-2.jpg"
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