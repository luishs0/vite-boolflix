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
    <div class="container">

        <h3 class="pt-4 pb-4" v-if="this.store.titleIndex === true">Movies</h3>

        <ul class="films d-flex flex-wrap justify-content-between align-items-stretch row">

            <li class="film ms_card" v-for="(film, index) in this.store.movies">
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

        <h3 class="pt-4 pb-4" v-if="this.store.titleIndex === true">Series</h3>
        <ul class="series d-flex flex-wrap justify-content-between align-items-stretch row">

            <li class="serie ms_card" v-for="(serie, index) in this.store.series">
                <div class="img"> <img class="img-card"
                        :src="getImagePath(`https://image.tmdb.org/t/p/w342${serie.poster_path}`)" alt="">
                </div>
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
ul {
    color: white;
    padding: 0;
}

h3 {
    color: white;
}

li {
    height: 100%;
}

.ms_card {
    width: 100%;
    height: 30vw;
    margin-bottom: 1rem;
    cursor: ponter;
}

.ms_card img {
    object-fit: cover;
}

.img {
    display: block;
}

.info {
    display: none;
    height: 100%;
    width: 100%;
    padding: .3rem;
    background-color: black;
    object-fit: cover;
}

.ms_card:hover .img {
    display: none;
}

.ms_card:hover .info {
    display: block;
}



.ms_card .img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    cursor: pointer;
}

.container {
    max-width: 1000px;
}

.ms_card .img img {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 575px) {
    .ms_card {
        width: 100%;
        height: 120vw;
    }
}

@media screen and (min-width: 576px) {
    .ms_card {
        width: calc(100% / 2);
        height: 60vw;
    }
}

@media screen and (min-width: 768px) {
    .ms_card {
        width: calc(100% / 3);
        height: 40vw;
    }
}

@media screen and (min-width: 992px) {
    .ms_card {
        width: calc(100% / 4);
        max-height: 27vw;
    }
}
</style>