import Form from './Form';
import Alert from './Alert';
import Movie from './Movie';
import List from './List';
import LocalStorage from './LocalStorage';
import EditField from './EditField';

document.addEventListener('DOMContentLoaded', () => {
    const form = new Form();
    const alert = new Alert();
    const list = new List();
    const editField = new EditField;

    const onAdd = () => {
        try {
            const data = form.getInfo();
            // console.log(data);
            const movie = new Movie(Date.now(), data);

            list.addMovie(movie);
            LocalStorage.set(list.getMovies());
            alert.showAlert('New movie was succesfully added!');
        } catch ({ message }) {
            alert.showAlert(message, true)
        }

    }

    form.getIndex();   
    form.setRatingValue();

    form.node.addEventListener('submit', (e) => {
        document.querySelector('.form-control').focus();
        
        e.preventDefault();
        onAdd();
    })
})