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
  }
}
</script>


<template>
  <h1>Ciao</h1>
</template>


<style>

</style>
