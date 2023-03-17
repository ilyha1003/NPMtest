import LocalStorage from "./LocalStorage";
import Movie from "./Movie";
import EditField from './EditField';
import Alert from './Alert';

class List {
    #movies = [];

    clearList() {
        this.node.innerHTML = '';
    }

    updateInfo() {
        this.node.innerHTML = '';
        this.#movies.map((movie) => {
            this.node.append(movie.node);
        });
    }

    createStorageList() {
        const moviesList = LocalStorage.getMovies();
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
        movie.editBtn.addEventListener('click', () => {
            this.editField.showEditField(movie);
            this.editField.editRatingValue();
        })
        this.updateInfo();
    }

    removeMovie(id) {
        this.#movies = this.#movies.filter((movie) => movie.getId() !== id);
        this.updateInfo();
        LocalStorage.setMovies(this.getMovies());
    }

    constructor() {
        this.alert = new Alert();
        this.editField = new EditField();
        this.editField.form.addEventListener('submit', (e) => {
            try {
                e.preventDefault();
                this.editField.movie.setEditData(this.editField.outputEditData());
                this.editField.hideEditField();
                this.updateInfo();
                LocalStorage.setMovies(this.getMovies());
                this.alert.showSuccessAlert('Movie was successfully saved!');
            } catch ({ message }) {
                this.alert.showAlert(message, true);
            }
            
        })
        this.node = document.getElementById('movieList');
        this.createStorageList();
    }
}

export default List;