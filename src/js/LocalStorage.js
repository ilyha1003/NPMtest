class LocalStorage {
    static set(movies) {
        const movieData = movies.map((movie) => ({ id: movie.getId(), data: movie.getData() }));
        console.log(movieData);
        localStorage.setItem('movies', JSON.stringify(movieData));
    }

    static get() {
        return JSON.parse(localStorage.getItem('movies') ?? '[]');
    }
}

export default LocalStorage;