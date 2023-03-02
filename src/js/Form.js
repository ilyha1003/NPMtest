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
        for(let i = 1; i <= 5; i++) {
            document.getElementById(`${i}Star`).style.fill = 'gray';
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

    getRating() {
        const starArray = [];
        const buttonArray = [];
        const buttons = document.getElementById('add-rating');
        for(let i = 1; i <= 5; i++) {
            starArray.push(document.getElementById(`${i}Star`));
            buttonArray.push(document.getElementById(`star${i}`));
        }
        
        buttons.addEventListener('mouseover', ({ target }) => {
            let nodeIndex = [...this.node].indexOf(target);
            if(nodeIndex === 1 || nodeIndex === 2 || nodeIndex === 3 || nodeIndex === 4 || nodeIndex === 5) {
                console.log('1');
                starArray.map((star) => {
                    star.style.fill = 'gray';
                })
                for(let i = nodeIndex; i > 0; i--) {
                    document.getElementById(`${i}Star`).style.fill = 'rgb(255, 237, 134)';
                }
            }

            setTimeout(() => {
                buttonArray.map((button) => {
                    button.style.pointerEvents = 'auto';
                })
            }, 2000)
        });
        
        buttons.addEventListener('click', ({ target }) => {
            starArray.map((star) => {
                star.style.fill = 'gray';
            })
            let nodeIndex = [...this.node].indexOf(target);
            console.log(nodeIndex);
            if(nodeIndex === 1 || nodeIndex === 2 || nodeIndex === 3 || nodeIndex === 4 || nodeIndex === 5) {
                for(let i = nodeIndex; i > 0; i--) {
                    document.getElementById(`${i}Star`).style.fill = 'gold';
                }
                buttonArray.map((star) => {
                    star.value = 0;
                })
                document.getElementById(`star${nodeIndex}`).value = 1;
            }
            setTimeout(() =>{
                buttonArray.map((button) => {
                    button.style.pointerEvents = 'none';
                })
            }, 10)
        });
    }

    constructor() {
        this.node = document.getElementById('form');
    }
}

export default Form;