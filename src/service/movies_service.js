const db = require("../configuracion/db").db;

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

const createMovie = (async (title, description, image, year, genre, director, actors, duration, rating) => {
    return await db('movies').insert({
        title: title,
        description: description,
        image: image,
        year: year,
        genre: genre,
        director: director,
        actors: actors,
        duration: duration,
        rating: rating
    });
});

const createvaloration = (async (movie_id, user_name, score, comment, create_at) => {
    return await db('valorations').insert({
        movie_id: movie_id,
        user_name: user_name,
        score: score,
        comment: comment,
        create_at: create_at
    });
});


const modifymovie = (async (id, title, description, image, year, genre, director, actors, duration, rating) => {
    return await db('movies').where({ id: id }).update({
        title: title,
        description: description,
        image: image,
        year: year,
        genre: genre,
        director: director,
        actors: actors,
        duration: duration,
        rating: rating
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
