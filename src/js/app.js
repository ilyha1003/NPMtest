import Form from './Form';
import Alert from './Alert';

document.addEventListener('DOMContentLoaded', () => {
    const form = new Form();
    const alert = new Alert();

    form.node.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = form.getInfo();
        console.log(data);
    })
})