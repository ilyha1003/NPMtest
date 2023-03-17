import List from './List';
import LocalStorage from './LocalStorage';

class Sort {
    sortInAdditionOrder() {
        this.list.updateInfo();
    }

    sortByRating() {
        this.list.clearList();
        const resultSortMovieList = [];
        resultSortMovieList.push(this.sortByStars(5), this.sortByStars(4), this.sortByStars(3), this.sortByStars(2), this.sortByStars(1), this.sortByStars(0));
        resultSortMovieList.flat().map((movie) => this.list.node.append(movie.node));
        console.log(resultSortMovieList.flat());
    }


    sortByFavorite() {
        
        this.list.clearList();
        const movieList = this.list.getMovies();
        const favoriteMovieList = [];
        favoriteMovieList.push(movieList.filter((movie) => movie.favoriteField.value === 1));
        favoriteMovieList.flat().map((movie) => this.list.node.append(movie.node));
    }

    sortByAlphabet() {
        this.list.clearList();
        
    }

    sortByStars(star) {
        const movieList = this.list.getMovies();
        const ratingMovieList = [];
        ratingMovieList.push(movieList.filter((movie) =>  movie.ratingField.value > (star-1) && movie.ratingField.value < (star+1)));
        return ratingMovieList.flat();
    }

    favoriteFilter() {
        
    }

    constructor() {
        this.list = new List();
        this.node = document.querySelector('.select');
    }
}

export default Sort;