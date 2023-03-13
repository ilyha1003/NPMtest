import Alert from './Alert';
import List from './List';
import LocalStorage from './LocalStorage';

class EditField {
    showEditField(movie) {
        this.node.classList.remove('hidden');
        this.movie = movie;
        this.setEditInfo(movie);
    }

    hideEditField() {
        this.node.classList.add('hidden');
    }

    showEditRating(rating) {
        for(let i = 0; i < 5; i++) {
            this.form.querySelectorAll('.star')[i].classList.remove('fas');
            this.form.querySelectorAll('.star')[i].classList.remove('star-gold');
            this.form.querySelectorAll('.star')[i].classList.add('far');
        }
        for(let i = 0; i < rating; i++) {
            this.form.querySelectorAll('.star')[i].classList.add('fas');
            this.form.querySelectorAll('.star')[i].classList.add('star-gold');
            this.form.querySelectorAll('.star')[i].classList.remove('far');
        }
    }

    setEditInfo(movie) {
        const { title, star1, star2, star3, star4, star5, opinion, favorite } = movie.getData();
        console.log({title, star1, star2, star3, star4, star5, opinion, favorite});
        this.form[0].value = title;
        this.form[1].value = star1;
        this.form[2].value = star2;
        this.form[3].value = star3;
        this.form[4].value = star4;
        this.form[5].value = star5;
        this.form[6].value = opinion;
        this.form[8].checked = favorite;

        const rating = movie.ratingNumber(star1, star2, star3, star4, star5);

        this.showEditRating(rating);
    }

    outputEditData() {
        const outputData = {
            title: this.form[0].value,
            star1: this.form[1].value,
            star2: this.form[2].value,
            star3: this.form[3].value,
            star4: this.form[4].value,
            star5: this.form[5].value,
            opinion: this.form[6].value,
            favorite: this.form[8].checked
        };

        if(!outputData.title) {
            throw new Error("You can't save movie without title!");
        } else {
            return outputData;
        }
    }

    editRatingValue() {
        this.form.addEventListener('click', ({target}) => {
            let index = [...this.form].indexOf(target);
            if(index === 1 || index === 2 || index === 3 || index === 4 || index === 5) {
                for(let i = 1; i <= 5; i++){
                    this.form[i].value = 0;
                }
                this.form[index].value = 1;
            }
        })
    }

    updateEditedList() {
        const list = new List();
        console.log(list.getMovies());
    }

    constructor() {
        this.node = document.getElementById('editField');
        this.form = document.getElementById('edit-form');
        this.alert = new Alert();
        this.cancelBtn = document.getElementById('edit-field-cancel');
        this.cancelBtn.addEventListener('click', () => {
            this.hideEditField();
        })
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            try {
                this.movie.setEditData(this.outputEditData());
                this.hideEditField();
                this.alert.showAlert("Movie was successfully saved!");
                LocalStorage.edit(this.movie.getId());
            } catch({ message }) {
                this.alert.showAlert(message, true);
            }
        })
    }
}

export default EditField;