import List from './List';

class Sort {
    sortInAdditionOrder() {
        this.list = new List();
        this.list.updateInfo();
    }

    sortByRating() {
        this.list = new List();
        this.list.clearList();
        const resultSortMovieList = [];
        resultSortMovieList.push(this.sortByStars(5), this.sortByStars(4), this.sortByStars(3), this.sortByStars(2), this.sortByStars(1), this.sortByStars(0));
        resultSortMovieList.flat().map((movie) => this.list.node.append(movie.node));
    }

    sortByFavorite() {
        this.list = new List();
        this.list.clearList();
        const movieList = this.list.getMovies();
        const favoriteMovieList = [];
        favoriteMovieList.push(movieList.filter((movie) => movie.favoriteField.value === 1));
        favoriteMovieList.flat().map((movie) => this.list.node.append(movie.node));
    }

    sortByAlphabet() {
        this.list = new List();
        this.list.clearList();
        const movieList = this.list.getMovies();
        const movieTitles = [];
        movieTitles.push(movieList.map((movie) => movie.getData().title));
        const sortedMovieTitlesArray = movieTitles.flat().sort();
        const resultSortMovieArray = [];
        sortedMovieTitlesArray.map((title) => {
            movieList.map((movie) => {
                if(title === movie.title) {
                    resultSortMovieArray.push(movie);
                }
            })
        })
        resultSortMovieArray.map((movie) => this.list.node.append(movie.node));
    }

    sortByStars(star) {
        const movieList = this.list.getMovies();
        const ratingMovieList = [];
        ratingMovieList.push(movieList.filter((movie) =>  movie.ratingField.value > (star-1) && movie.ratingField.value < (star+1)));
        return ratingMovieList.flat();
    }

    constructor() {
        this.node = document.querySelector('.select');
    }
}

export default Sort;