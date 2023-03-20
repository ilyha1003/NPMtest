class Movie {
    #data = {};
    #id = null;

    setData(data) {
        this.#data = data;
        this.title = data.title;
    };

    setEditData(data) {
        this.setData(data);
        this.node.querySelector('.movie-rating').innerHTML = data.title;
        this.node.querySelector('#star1').value = data.star1;
        this.node.querySelector('#star2').value = data.star2;
        this.node.querySelector('#star3').value = data.star3;
        this.node.querySelector('#star4').value = data.star4;
        this.node.querySelector('#star5').value = data.star5;
        this.node.querySelector('.movie-opinion').innerHTML = data.opinion;
        this.node.querySelector('.movie-favorite').innerHTML = data.favorite ? '<i class="fas fa-heart heart"></i>' : '';

        this.createMovieRating(this.ratingNumber(data.star1, data.star2, data.star3, data.star4, data.star5));
        
    }

    getData() {
        return this.#data;
    };

    getId() {
        return this.#id;
    }

    movieRatingStarFilter(rating) {
        for(let i = 0; i < 5; i++) {
            this.node.querySelectorAll('.star')[i].classList.remove('fas');
            this.node.querySelectorAll('.star')[i].classList.remove('star-gold');
            this.node.querySelectorAll('.star')[i].classList.add('far');
        }
        for(let i = 0; i < rating; i++) {
            this.node.querySelectorAll('.star')[i].classList.add('fas');
            this.node.querySelectorAll('.star')[i].classList.add('star-gold');
            this.node.querySelectorAll('.star')[i].classList.remove('far');
        }
    }

    createMovieRating(rating) {
        switch(rating) {
            case '0':
                break;
            case '1':
                this.movieRatingStarFilter(rating);
                break;
            case '2':
                this.movieRatingStarFilter(rating);
                break;
            case '3':
                this.movieRatingStarFilter(rating);
                break;
            case '4':
                this.movieRatingStarFilter(rating);
                break;
            case '5':
                this.movieRatingStarFilter(rating);
                break;
        }
        this.node.querySelector('.stars').value = rating;
    }

    ratingNumber(star1, star2, star3, star4, star5) {
        let rating = '0';
        if(star1 === '1') rating = '1';
        if(star2 === '1') rating = '2';
        if(star3 === '1') rating = '3';
        if(star4 === '1') rating = '4';
        if(star5 === '1') rating = '5';

        return rating;
    }

    createNode() {
        const {title, star1, star2, star3, star4, star5, opinion, favorite} = this.getData();
        
        const li = document.createElement('li');
        li.classList.add('row');
        li.classList.add('py-2');
        const html = `
            <span class="col-2 movie-rating">${title}</span>
            <span class="col-3 rating-field">
                <div class="stars" id="add-rating">
                    <label class="movie-rate">
                        <input type="radio" name="radio1" id="star1" value="0">
                        <i class="far fa-star 1star star"></i>
                    </label>
                    <label class="movie-rate">
                        <input type="radio" name="radio1" id="star2" value="0">
                        <i class="far fa-star 2star star"></i>
                    </label>
                    <label class="movie-rate">
                        <input type="radio" name="radio1" id="star3" value="0">
                        <i class="far fa-star 3star star"></i>
                    </label>
                    <label class="movie-rate">
                        <input type="radio" name="radio1" id="star4" value="0">
                        <i class="far fa-star 4star star"></i>
                    </label>
                    <label class="movie-rate">
                        <input type="radio" name="radio1" id="star5" value="0">
                        <i class="far fa-star 5star star"></i>
                    </label>
                </div>
            </span>
            <span class="col-3 movie-opinion">${opinion}</span>
            <span class="col-1 movie-favorite">${favorite ? '<i class="fas fa-heart heart"></i>' : ''}</span>
            <div class="col-3 buttons" role="group">
                <i class="fas fa-trash button delete-button"></i>
                <i class="fas fa-pen button edit-button"></i>
            </div>
        `;

        li.insertAdjacentHTML('beforeend', html);
        const buttonGroup = li.querySelector('.buttons');
        const editButton = li.querySelector('.edit-button');
        const deleteButton = li.querySelector('.delete-button');      

        buttonGroup.append(deleteButton, editButton);

        this.deleteBtn = deleteButton;
        this.editBtn = editButton;

        this.node = li;
        this.createMovieRating(this.ratingNumber(star1, star2, star3, star4, star5));
        if(favorite === true) {
            this.node.querySelector('.movie-favorite').value = 1;
        } else {
            this.node.querySelector('.movie-favorite').value = 0;
        }
    }

    constructor(id, data) {
        this.setData(data);
        this.#id = id;
        this.createNode();
        this.ratingField = this.node.querySelector('.stars');
        this.favoriteField = this.node.querySelector('.movie-favorite');
    }
}

export default Movie;