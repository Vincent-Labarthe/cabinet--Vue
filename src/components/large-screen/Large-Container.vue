<template>
  <div style="width: 100vw">
    <HomePage @handle-book="switchPage"></HomePage>
    <BookPage v-if="page === 'book'"></BookPage>
    <HomePageCabinet v-if="page === 'cabinet'"> </HomePageCabinet>
  </div>

</template>

<script>
import HomePage from "@/components/large-screen/HomePage";
import BookPage from "@/components/large-screen/book/BookPage";
import HomePageCabinet from "@/components/large-screen/cabinet/HomePageCabinet";

export default {
  name: 'LargeContainer',
  components: {
    BookPage,
    HomePage,
    HomePageCabinet,
  },
  data() {
    return {
      page: ''
    }
  },
  methods: {
    switchPage(param) {
      this.page = param
    },
  }
}

</script>

<style scoped>


</style>
