class EditField {
    showEditField(movie) {
        this.node.classList.remove('hidden');
        this.setInfo(movie);
    }

    hideEditField() {
        this.node.classList.add('hidden');
    }

    showEditRating(rating) {
        for(let i = 0; i < rating; i++) {
            this.form.querySelectorAll('.star')[i].classList.add('fas');
            this.form.querySelectorAll('.star')[i].classList.add('star-gold');
            this.form.querySelectorAll('.star')[i].classList.remove('far');
        }
    }

    setInfo(movie) {
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

    constructor() {
        this.node = document.getElementById('editField');
        this.form = document.getElementById('edit-form');
        this.cancelBtn = document.getElementById('edit-field-cancel');
        this.cancelBtn.addEventListener('click', () => {
            this.hideEditField();
        })
        // console.log(this);
    }
}

export default EditField;