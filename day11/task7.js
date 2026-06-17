const movies = [
    { title: "Movie A", rating: 8.5 },
    { title: "Movie B", rating: 6.0 }
];

const highlyRatedMovies = movies.filter(
    movie => movie.rating > 8
);

const titles = highlyRatedMovies.map(
    movie => movie.title
);

console.log(titles);