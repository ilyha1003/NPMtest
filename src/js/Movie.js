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

    starIcon() {
        return `<svg class="star-ico" id="1Star" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12 5.173 2.335 4.817 5.305.732-3.861 3.71.942 5.27L12 17.178l-4.721 2.525.942-5.27-3.861-3.71 5.305-.733L12 5.173zm0-4.586L8.332 8.155 0 9.306l6.064 5.828-1.48 8.279L12 19.446l7.416 3.966-1.48-8.279L24 9.306l-8.332-1.15L12 .587z"/></svg>`;
    }

    createStarElement() {
        const starElement = document.createElement('span');
        starElement.style.display = 'inline-flex';
        starElement.style.height = '30px';
        starElement.style.width = '30px';
        starElement.insertAdjacentHTML('afterbegin', this.starIcon());

        return starElement;
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
            <span class="col-3 rating-field"></span>
            <span class="col-3">${opinion}</span>
            <span class="col-1">${favorite ? '❤' : ''}</span>
            <div class="col-3 buttons" role="group"></div>
        `;

        li.insertAdjacentHTML('beforeend',html);
        const buttonGroup = li.querySelector('.buttons');
        const editButton = this.createButtons(false);
        const deleteButton = this.createButtons(true);

        const ratingField = li.querySelector('.rating-field');
        for(let i = 1; i <= rating; i++) {
            ratingField.append(this.createStarElement());
        }
        

        buttonGroup.append(deleteButton, editButton);

        console.log(this.createStarElement());
        
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