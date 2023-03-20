import LocalStorage from "./LocalStorage";
import Movie from "./Movie";
import EditField from './EditField';
import Alert from './Alert';
import Sort from './Sort';

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
            this.chooseSortingOnAction();
        })
        movie.editBtn.addEventListener('click', () => {
            this.editField.showEditField(movie);
            this.editField.editRatingValue();
        })
        this.updateInfo();
    }

    removeMovie(id) {
        this.#movies = this.#movies.filter((movie) => movie.getId() !== id);
        LocalStorage.setMovies(this.getMovies());
        this.updateInfo();
    }

    chooseSortingOnAction() {
        const sort = new Sort();
        switch(document.querySelector('.select').value) {
            case '0':
                sort.sortInAdditionOrder();
                break;
            case '1': 
                sort.sortByRating()
                break;
            case '2': 
                sort.sortByFavorite();
                break;
            case '3':
                sort.sortByAlphabet();
                break;
        }
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
                this.chooseSortingOnAction();
            } catch ({ message }) {
                this.alert.showAlert(message, true);
            }
            
        })
        this.node = document.getElementById('movieList');
        this.createStorageList();
    }
}

export default List;