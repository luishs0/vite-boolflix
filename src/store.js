import { reactive } from "vue";

export const store = reactive({
    apiMovieURL: "https://api.themoviedb.org/3/search/movie",
    apiSeriesURL: "https://api.themoviedb.org/3/search/tv",
    apiKey: "b296117dc40f05fe25e2213ed501ca25",
    searchKey: "",
    loading: false,
    titleIndex: false,
    series: [],
    movies: [],
})