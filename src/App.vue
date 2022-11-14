<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";

export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    searchMovies() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b296117dc40f05fe25e2213ed501ca25&query=${this.store.searchKey}`).then((resp) => {
        this.store.movies = resp.data.results;
        console.log(this.store.movies);
      })
    }
  }
}
</script>


<template>
  <AppHeader @search="searchMovies" />
  <AppMain />
</template>


<style>

</style>
