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
        this.modeButton = document.getElementById('moon');
        this.switch = document.getElementById('night-mode-checkbox');
        this.modeButton.addEventListener('click', () => {
            if(this.switch.value === '0') {
                this.switch.value = 1;
                this.modeButton.classList.remove('fa-moon');
                this.modeButton.classList.add('fa-sun');
                this.modeButton.setAttribute('data-tooltip', 'Day mode');
                document.body.classList.add('bg-dark');
                document.body.classList.add('text-white');
            } else {
                this.switch.value = 0;
                this.modeButton.classList.remove('fa-sun');
                this.modeButton.classList.add('fa-moon');
                this.modeButton.setAttribute('data-tooltip', 'Night mode');
                document.body.classList.remove('bg-dark');
                document.body.classList.remove('text-white');
            }
            
        })
    }
}

export default Form;