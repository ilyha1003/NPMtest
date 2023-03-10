class Form {
    clear() {
        this.node[0].value = '';
        this.node[1].value = 0;
        this.node[2].value = 0;
        this.node[3].value = 0;
        this.node[4].value = 0;
        this.node[5].value = 0;
        this.node[6].value = '';
        this.node[8].checked = false;
        for(let i = 0; i < 5; i++) {
            document.querySelectorAll('.star')[i].classList.remove('star-gold');
            document.querySelectorAll('.star')[i].classList.remove('fas');
            document.querySelectorAll('.star')[i].classList.add('far');
        }
    }

    getInfo() {
        
        const title = this.node[0].value;

        if(!title) {
            throw new Error(`You can't add movie without title!`);
        }

        const outputData = {
            title: this.node[0].value,
            star1: this.node[1].value,
            star2: this.node[2].value,
            star3: this.node[3].value,
            star4: this.node[4].value,
            star5: this.node[5].value,
            opinion: this.node[6].value,
            favorite: this.node[8].checked
        };

        this.clear();
        return outputData;
    }

    setRatingValue() {
        this.node.addEventListener('click', ({ target }) => {
            let index = [...this.node].indexOf(target);
            if(index === 1 || index === 2 || index === 3 || index === 4 || index === 5) {
                for(let i = 1; i <= 5; i++){
                    this.node[i].value = 0;
                }
                this.node[index].value = 1;
            }
        })
    }

    constructor() {
        this.node = document.getElementById('form');
    }
}

export default Form;