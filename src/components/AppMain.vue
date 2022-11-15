<script>
import { store } from "../store";

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.utl).href
        }
    }
}
</script>


<template>
    <div class="container d-flex flex-wrap">

        <ul class="films">
            <h3 v-if="this.store.titleIndex === true">Movies</h3>
            <li class="film mb-5" v-for="(film, index) in this.store.movies">
                <div class="img"> <img class="img-card"
                        :src="getImagePath(`https://image.tmdb.org/t/p/w342${film.poster_path}`)" alt="">
                </div>
                <div class="info">
                    <p>Tittolo: {{ film.title }}</p>
                    <p>Tittolo originale: {{ film.original_title }} </p>
                    <p>Lingua:
                        <span v-if="film.original_language === 'es'"> <img class="flag" src="../assets/spainflag.png"
                                alt=""> </span>
                        <span v-else-if="film.original_language === 'en'"><img class="flag" src="../assets/ukflag.webp"
                                alt=""></span>
                        <span v-else-if="film.original_language === 'it'"><img class="flag"
                                src="../assets/italyflag.png" alt=""></span>
                        <span v-else-if="film.original_language === 'fr'"><img class="flag"
                                src="../assets/franceflag.png" alt=""></span>
                        <span v-else-if="film.original_language === 'de'"><img class="flag"
                                src="../assets/germanyflag.png" alt=""></span>
                        <span v-else> {{ film.original_language }} </span>
                    </p>
                    <div class="vote">
                        <p v-if="Math.round((5 * film.vote_average) / 10) === 0">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <p v-else-if="Math.round((5 * film.vote_average) / 10) === 1">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <p v-else-if="Math.round((5 * film.vote_average) / 10) === 2">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <p v-else-if="Math.round((5 * film.vote_average) / 10) === 3">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <p v-else-if="Math.round((5 * film.vote_average) / 10) === 4">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <p v-else-if="Math.round((5 * film.vote_average) / 10) === 5">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </p>
                    </div>

                </div>
            </li>
        </ul>
        <ul class="series">
            <h3 v-if="this.store.titleIndex === true">Series</h3>
            <li class="serie mb-5" v-for="(serie, index) in this.store.series">
                <div> <img class="img-card" :src="getImagePath(`https://image.tmdb.org/t/p/w342${serie.poster_path}`)"
                        alt=""> </div>
                <div class="info">
                    <p>Tittolo: {{ serie.name }} </p>
                    <p>Tittolo originale: {{ serie.original_name }} </p>
                    <p>Lingua:
                        <span v-if="serie.original_language === 'es'"> <img class="flag" src="../assets/spainflag.png"
                                alt="">
                        </span>
                        <span v-else-if="serie.original_language === 'en'"><img class="flag" src="../assets/ukflag.webp"
                                alt=""></span>
                        <span v-else-if="serie.original_language === 'it'"><img class="flag"
                                src="../assets/italyflag.png" alt=""></span>
                        <span v-else-if="serie.original_language === 'fr'"><img class="flag"
                                src="../assets/franceflag.png" alt=""></span>
                        <span v-else-if="serie.original_language === 'de'"><img class="flag"
                                src="../assets/germanyflag.png" alt=""></span>
                        <span v-else> {{ serie.original_language }} </span>
                    </p>
                    <div class="vote">
                        <p v-if="(Math.round((5 * serie.vote_average) / 10)) === 0">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <p v-else-if="Math.round((5 * serie.vote_average) / 10) === 1">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <p v-else-if="Math.round((5 * serie.vote_average) / 10) === 2">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <p v-else-if="Math.round((5 * serie.vote_average) / 10) === 3">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <p v-else-if="Math.round((5 * serie.vote_average) / 10) === 4">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <p v-else-if="Math.round((5 * serie.vote_average) / 10) === 5">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </p>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>


<style scoped>
.films,
.series {
    width: 50%;
}
</style>