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

    constructor() {
        this.node = document.getElementById('form');
    }
}

export default Form;