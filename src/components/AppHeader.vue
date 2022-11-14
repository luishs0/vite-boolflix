<script>
import { store } from "../store";

export default {
    data() {
        return {
            store
        }
    }
}
</script>


<template>
    <div class="container">
        <div class="logo">BOOLFLIX</div>
        <div class="searchbar">
            <input type="text" placeholder="Cerca un film" v-model="store.searchKey">
            <button @click="$emit('search')">Cerca</button>
        </div>
    </div>
</template>


<style scoped>
.logo {
    font-size: 2rem;
}
</style>