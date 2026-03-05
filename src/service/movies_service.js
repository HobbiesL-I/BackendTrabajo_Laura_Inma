const db = require('../configuration/database.js').db;

const getAllMovies = (async () => {
    return await db('movies').select('*');
});

const getMovieById = (async (id) => {
    return await db('movies').where({ id: id }).first();
});
const findsAllMovieValoration = (async () => {
    return await db('valorations').select('*');
});

const findValorationByMovieId = (async (movie_id) => {
    return await db('valorations').select('*').where({ movie_id: movie_id });
});

const createMovie = (async (title, description, image, year, genre, director, actors, duration) => {
    return await db('movies').insert({
        title: title,
        description: description,
        image: image,
        year: year,
        genre: genre,
        director: director,
        actors: actors,
<<<<<<< HEAD
        duration: duration,
    });
});

const createvaloration = (async (movie_id, user_name, score, comment ) => {
=======
        duration: duration
    });
});

const createvaloration = (async (movie_id, user_name, score, comment) => {
>>>>>>> 32023d4a65aa3c1cc506189f22b7bc2f989e08b7
    return await db('valorations').insert({
        movie_id: movie_id,
        user_name: user_name,
        score: score,
<<<<<<< HEAD
        comment: comment,
=======
        comment: comment
>>>>>>> 32023d4a65aa3c1cc506189f22b7bc2f989e08b7
    });
});


const modifymovie = (async (id, title, description, image, year, genre, director, actors, duration) => {
    return await db('movies').where({ id: id }).update({
        title: title,
        description: description,
        image: image,
        year: year,
        genre: genre,
        director: director,
        actors: actors,
<<<<<<< HEAD
        duration: duration,
=======
        duration: duration
>>>>>>> 32023d4a65aa3c1cc506189f22b7bc2f989e08b7
    });
});
const deleteMovie = (async (id) => {
    return await db('movies').where({ id: id }).del();
});

const moviesExistById = (async (id) => {
    const movie = await db('movies').where({ id: id }).first();
    return movie != null;
});
const moviesExistByTitle = (async (title) => {
    const movie = await db('movies').select('*').where({ title: title }).first();
    return movie != null;
});

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    modifymovie,
    deleteMovie,
    createvaloration,
    findsAllMovieValoration,
    findValorationByMovieId,
    moviesExistByTitle,
    moviesExistById
};
