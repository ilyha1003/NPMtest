import LocalStorage from "./LocalStorage";
import Movie from "./Movie";

class List {
    #movies = [];

    updateInfo() {
        this.node.innerHTML = '';
        this.#movies.map((movie) => {this.node.append(movie.node)});
    }

    createStorageList() {
        const moviesList = LocalStorage.get();
        const moviesListReversed = [];
        
        for(let i = moviesList.length - 1; i >= 0 ; i--) {
            moviesListReversed.push(moviesList[i]);
        }

        moviesListReversed.map(({ id, data }) => {
            const movie = new Movie(id, data);
            this.addMovie(movie);
        })
    }

    getMovies() {
        return this.#movies;
    }

    addMovie(movie) {
        this.#movies.unshift(movie);
        movie.deleteBtn.addEventListener('click', () => {
            this.removeMovie(movie.getId());
        })
        this.updateInfo();
    }

    removeMovie(id) {
        this.#movies = this.#movies.filter((movie) => movie.getId() !== id);
        this.updateInfo();
        LocalStorage.set(this.getMovies());
    }

    constructor() {
        this.node = document.getElementById('movieList');
        this.createStorageList();
    }
}

export default List;