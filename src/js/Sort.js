import List from './List';

class Sort {
    sortInAdditionOrder() {

    }

    sortByRating() {

    }

    sortByFavorite() {

    }

    sortByAlphabet() {

    }

    constructor() {
        this.list = new List();
        this.node = document.querySelector('.select');
        console.log(this.list.getMovies());
    }
}

export default Sort;