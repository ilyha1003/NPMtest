class LocalStorage {
    static setMovies(movies) {
        const movieData = movies.map((movie) => ({ id: movie.getId(), data: movie.getData() }));
        localStorage.setItem('movies', JSON.stringify(movieData));
    }

    static getMovies() {
        return JSON.parse(localStorage.getItem('movies') ?? '[]');
    }

    static setColorTheme() {
        const checkbox = document.querySelector('.night-mode-checkbox');
        localStorage.setItem('colorTheme', JSON.stringify(checkbox.checked))
    }

    static getColorTheme() {
        return JSON.parse(localStorage.getItem('colorTheme') ?? '[]');
    }

    static setSort() {
        const sortSelect = document.querySelector('.select');
        localStorage.setItem('selectValue', JSON.stringify(sortSelect.value));
    }

    static getSort() {
        return JSON.parse(localStorage.getItem('selectValue') ?? '[]');
    }
}

export default LocalStorage;