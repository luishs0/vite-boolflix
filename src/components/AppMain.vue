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

        <ul class="films">
            <li class="film mb-5" v-for="(film, index) in this.store.movies">
                <p>Tittolo: {{ film.title }}</p>
                <p>Tittolo originale: {{ film.original_title }} </p>
                <p>Lingua: {{ film.original_language }} </p>
                <p>Voto: {{ film.vote_average }} </p>
            </li>
        </ul>

    </div>
</template>


<style scoped>

</style>