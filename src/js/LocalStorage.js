class LocalStorage {
    static setMovies(movies) {
        const movieData = movies.map((movie) => ({ id: movie.getId(), data: movie.getData() }));
        // console.log(movieData);
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
}

export default LocalStorage;