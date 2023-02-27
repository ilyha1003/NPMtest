class List {
    #movies = [];

    updateInfo() {
        this.node.innerHTML = '';
        this.#movies.map((movie) => {this.node.append(movie.node)});
    }

    addMovie(movie) {
        this.#movies.unshift(movie);
        this.updateInfo();
    }

    removeMovie(id) {
        this.#movies = this.#movies.filter((movie) => movie.getId() !== id);
        this.updateInfo();
    }

    constructor() {
        this.node = document.getElementById('movieList');
    }
}

export default List;