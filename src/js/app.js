import Form from './Form';
import Alert from './Alert';
import Movie from './Movie';
import List from './List';
import LocalStorage from './LocalStorage';

document.addEventListener('DOMContentLoaded', () => {
    const form = new Form();
    const alert = new Alert();
    const list = new List();

    const onAdd = () => {
        try {
            const data = form.getInfo();
            const movie = new Movie(Date.now(), data);

            list.addMovie(movie);
            LocalStorage.set(list.getMovies());
            alert.showAlert('New movie was succesfully added!');
        } catch ({ message }) {
            alert.showAlert(message, true)
        }
    }

    form.node.addEventListener('submit', (e) => {
        e.preventDefault();
        onAdd();
    })
})