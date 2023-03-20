import Form from './Form';
import Alert from './Alert';
import Movie from './Movie';
import List from './List';
import LocalStorage from './LocalStorage';
import WindowWidth from './WindowWidth';
import Sort from './Sort';

document.addEventListener('DOMContentLoaded', () => {
    const form = new Form();
    const alert = new Alert();
    const list = new List();
    const sort = new Sort();
    const sortSelect = document.querySelector('.select');

    const width = window.matchMedia("(max-width: 995px)");
    const appWidth = new WindowWidth(width);

    const onAdd = () => {
        try {
            const list = new List();
            const data = form.getInfo();
            const movie = new Movie(Date.now(), data);

            list.addMovie(movie);
            LocalStorage.setMovies(list.getMovies());
            alert.showAlert('New movie was succesfully added!');
            applySortingOnAdd();
        } catch ({ message }) {
            alert.showAlert(message, true)
        }
    }

    const onSwitchCheck = (checkboxState) => { 
        if(checkboxState === false) {
            form.modeButton.classList.remove('fa-moon');
            form.modeButton.classList.add('fa-sun');
            form.modeButton.setAttribute('data-tooltip', 'Day mode');
            document.body.classList.add('bg-dark');
            document.body.classList.add('text-white');
            list.node.classList.add('dark-theme');
            document.querySelector('.edit-field-body').classList.remove('bg-light');
            document.querySelector('.edit-field-body').classList.add('bg-dark');
        } else {
            form.modeButton.classList.remove('fa-sun');
            form.modeButton.classList.add('fa-moon');
            form.modeButton.setAttribute('data-tooltip', 'Night mode');
            document.body.classList.remove('bg-dark');
            document.body.classList.remove('text-white');
            list.node.classList.remove('dark-theme');
            document.querySelector('.edit-field-body').classList.add('bg-light');
            document.querySelector('.edit-field-body').classList.remove('bg-dark');
        }
    }

    const onSelectChange = (value) => {
        switch(value) {
            case '0':
                sort.sortInAdditionOrder();
                break;
            case '1': 
                sort.sortByRating()
                break;
            case '2': 
                sort.sortByFavorite();
                break;
            case '3':
                sort.sortByAlphabet();
                break;
        }
    }

    const applyThemeSettings = (checkboxState) => {
        if(checkboxState === false) {
            form.switch.checked = true;
            onSwitchCheck(checkboxState);
        } else {
            onSwitchCheck(checkboxState);
        }
    }

    const applySortingSettings = (value) => {
        onSelectChange(value);
        sortSelect.value = value;
    }

    const applySortingOnAdd = () => {
        onSelectChange(sortSelect.value);
    }

    applyThemeSettings(LocalStorage.getColorTheme());
    applySortingSettings(LocalStorage.getSort());
    
    form.modeButton.addEventListener('click', () => {
        onSwitchCheck(form.switch.checked);
        LocalStorage.setColorTheme();
    })

    sort.node.addEventListener('change', () => {
        onSelectChange(sortSelect.value);
        LocalStorage.setSort();
    })

    form.node.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector('.form-control').focus();
        onAdd();
    })
})