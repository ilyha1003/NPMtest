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
            const movie = new Movie(Date.now(), data);

            list.addMovie(movie);
            LocalStorage.set(list.getMovies());
            alert.showAlert('New movie was succesfully added!');
        } catch ({ message }) {
            alert.showAlert(message, true)
        }

    }

    form.getRating();    

    // form.node[1].addEventListener('click', () => {
    //     form.node[1].value = '1';
    //     form.node[2].value = '0';
    //     form.node[3].value = '0';
    //     form.node[4].value = '0';
    //     form.node[5].value = '0';
    //     console.log(form.node[1]);
    //     document.getElementById('firstStar').style.fill = 'gold';
    // })

    form.node.addEventListener('submit', (e) => {
        e.preventDefault();
        onAdd();
    })
})