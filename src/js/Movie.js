class Movie {
    #data = {};
    #id = null;

    setData(data) {
        this.#data = data;
    };

    setEditData(data) {
        this.#data = data;

        this.node.querySelector('.movie-rating').innerHTML = data.title;
        this.node.querySelector('#star1').value = data.star1;
        this.node.querySelector('#star2').value = data.star2;
        this.node.querySelector('#star3').value = data.star3;
        this.node.querySelector('#star4').value = data.star4;
        this.node.querySelector('#star5').value = data.star5;
        this.node.querySelector('.movie-opinion').innerHTML = data.opinion;
        this.node.querySelector('.movie-favorite').innerHTML = data.favorite ? '❤' : '';

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

        li.insertAdjacentHTML('beforeend',html);
        const buttonGroup = li.querySelector('.buttons');
        const editButton = li.querySelector('.edit-button');
        const deleteButton = li.querySelector('.delete-button');      

        buttonGroup.append(deleteButton, editButton);

        this.deleteBtn = deleteButton;
        this.editBtn = editButton;

        this.node = li;
        this.createMovieRating(this.ratingNumber(star1, star2, star3, star4, star5));
    }

    createButtons(isDelete) {
        const editIco = `<svg fill="#000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 528.899 528.899" xml:space="preserve"><g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
        c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
        C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
        L27.473,390.597L0.3,512.69z"></path></g></svg>`;
        const deleteIco = `<svg fill="#000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 41.336 41.336" xml:space="preserve"><g><path d="M36.335,5.668h-8.167V1.5c0-0.828-0.672-1.5-1.5-1.5h-12c-0.828,0-1.5,0.672-1.5,1.5v4.168H5.001c-1.104,0-2,0.896-2,2
        s0.896,2,2,2h2.001v29.168c0,1.381,1.119,2.5,2.5,2.5h22.332c1.381,0,2.5-1.119,2.5-2.5V9.668h2.001c1.104,0,2-0.896,2-2
        S37.438,5.668,36.335,5.668z M14.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5
        s1.5,0.672,1.5,1.5V35.67z M22.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5
        s1.5,0.672,1.5,1.5V35.67z M25.168,5.668h-9V3h9V5.668z M30.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21
        c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5V35.67z"></path></g></svg>`;
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('button');
        button.innerHTML = isDelete ? deleteIco : editIco;

        return button;
    }

    constructor(id, data) {
        this.setData(data);
        this.#id = id;
        this.createNode();
    }
}

export default Movie;