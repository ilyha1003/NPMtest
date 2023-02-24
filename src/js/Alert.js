class Alert {
    showAlert(text, isError) {
        this.node.classList.remove('hidden');
    }

    constructor() {
        this.node = document.getElementById('alert');
    }
}

export default Alert;