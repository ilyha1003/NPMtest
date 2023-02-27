class Movie {
    #data = {};
    #id = null;

    setData(data) {
        this.#data = data;
    };

    getData() {
        return this.#data;
    };

    getId() {
        return this.#id;
    }

    createNode() {
        const {title, star1, star2, star3, star4, star5, opinion, favorite} = this.getData();
        let rating = '0';
        if(star1 === '1') {
            rating = '1';
        }
        if(star2 === '1') {
            rating = '2';
        }
        if(star3 === '1') {
            rating = '3';
        }
        if(star4 === '1') {
            rating = '4';
        }
        if(star5 === '1') {
            rating = '5';
        }
        const li = document.createElement('li');
        li.classList.add('row');
        const html = `
            <span class="col-2">${title}</span>
            <span class="col-3">${rating}</span>
            <span class="col-3">${opinion}</span>
            <span class="col-1">${favorite ? '❤' : ''}</span>
            <div class="col-3 btn-group" role="group"></div>
        `;

        li.insertAdjacentHTML('beforeend',html);
        const btnGroup = li.querySelector('.btn-group');
        const editButton = this.createButtons(false);
        const deleteButton = this.createButtons(true);

        btnGroup.append(editButton, deleteButton);
        
        this.deleteBtn = deleteButton;
        this.editDtn = editButton;
        
        this.node = li;
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
        button.classList.add(`btn-${isDelete ? 'danger' : 'warning'}`);
        button.innerHTML = isDelete ? deleteIco : editIco;

        return button;
    }

    constructor(data) {
        this.setData(data);
        this.#id = Date.now();
        this.createNode();
    }
}

export default Movie;

// const movieList = document.querySelector('.movie__list');
//         const listElement = document.createElement('li');
//         const elementTitle = document.createElement('span');
//         const elementRating = document.createElement('span');
//         const elementOpinion = document.createElement('span');
//         const elementFavorite = document.createElement('span');
//         const elementButtons = document.createElement('span');

//         listElement.classList.add('row');
//         elementTitle.classList.add('col-2');
//         elementRating.classList.add('col-3');
//         elementOpinion.classList.add('col-4');
//         elementFavorite.classList.add('col-1');
//         elementButtons.classList.add('col-2');

//         elementTitle.innerText = title;
//         elementOpinion.innerText = opinion;
//         elementButtons.innerText = '✏️🗑️';

//         if(favorite) {
//             elementFavorite.innerText = '❤';
//         } else {
//             elementFavorite.innerText = '';
//         }

//         listElement.append(elementTitle, elementRating, elementOpinion, elementFavorite, elementButtons);

//         movieList.prepend(listElement);