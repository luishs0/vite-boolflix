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

      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=b296117dc40f05fe25e2213ed501ca25&query=${this.store.searchKey}`).then((resp) => {
        this.store.series = resp.data.results;
      })
      this.store.titleIndex = true;
    }
  }
}
</script>


<template>
  <div class="content">
    <header>
      <AppHeader @search="searchMovies" />
    </header>
    <main>
      <AppMain />
    </main>
  </div>
</template>


<style>
.content {
  width: 100%;
  height: 100vh;
  padding-top: 5rem;
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

header {
  background-color: #263238;
}

main {
  background-color: #4f5b62;
  height: calc(100vh - 80px);
  overflow: scroll;
}
</style>
