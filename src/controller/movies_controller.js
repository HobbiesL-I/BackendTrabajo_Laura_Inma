const { response } = require("express");
const { getAllMovies, getMovieById, createMovie, modifymovie, deleteMovie, moviesExistById, findsAllMovieValoration, findValorationByMovieId, moviesExistByTitle, createvaloration } = require("../service/movies_service");

const getMovies = (async (req, res) => {
    const movies = await getAllMovies();
    return res.status(200).json(movies);
});

const getMovie = (async (req, res) => {
    const id = req.params.id;
    if (! await moviesExistById(id)) {
        return res.status(404).json({ code: 404, title: "not found", message: "Pelicula no encontrada" });
    }


    const movies = await getMovieById(id);

    return res.status(200).json(movies);
});

const getmovievaloration = (async (req, res) => {
    const valorations = await findsAllMovieValoration();
    return res.status(200).json(valorations);

});

const getvalorationmovie = (async (req, res) => {
    const movie_id = req.params.movie_id;
    const valorations = await findValorationByMovieId(movie_id);
    return res.status(200).json(valorations);
});

const postmovie = (async (req, res) => {
    const title = req.body.title;
    if (await moviesExistByTitle(title)) {
        return res.status(409).json({ code: 409, title: "conflict", message: "Ya existe una pelicula con ese titulo" });
    }
    const description = req.body.description;
    const image = req.body.image;
    const year = req.body.year;
    const genre = req.body.genre;
    const director = req.body.director;
    const actors = req.body.actors;
    const duration = req.body.duration;
    await createMovie(title, description, image, year, genre, director, actors, duration);
    return res.status(201).json({ code: 201, title: "created", message: "Pelicula creada correctamente" });
});

const postvaloration = (async (req, res) => {
    const movie_id = req.body.movie_id;
    if (! await moviesExistById(movie_id)) {
        return res.status(409).json({ code: 409, title: "conflict", message: "La película no existe" });

    }
    const user_name = req.body.user_name;
    const score = req.body.score;
    const comment = req.body.comment;

    if (comment === undefined || comment === null) {
        return res.status(400).json({ code: 400, title: "bad request", message: "El comentario es obligatorio" });
    }
    await createvaloration(movie_id, user_name, score, comment);
    return res.status(201).json({ code: 201, title: "created", message: "Valoración creada correctamente" });
});

const putmovie = (async (req, res) => {
    const id = req.params.id;
    if (! await moviesExistById(id)) {
        return res.status(404).json({ code: 404, title: "not found", message: "Pelicula no encontrada" });
    }
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const year = req.body.year;
    const genre = req.body.genre;
    const director = req.body.director;
    const actors = req.body.actors;
    const duration = req.body.duration;
    await modifymovie(id, title, description, image, year, genre, director, actors, duration);
    return res.status(204).end();
});
const deletemovie = (async (req, res) => {
    const id = req.params.id;
    if (! await moviesExistById(id)) {
        return res.status(404).json({ code: 404, title: "not found", message: "Pelicula no encontrada" });
    }
    await deleteMovie(id);
    return res.status(204).end();
});

module.exports = {
    getMovies,
    getMovie,
    postmovie,
    postvaloration,
    putmovie,
    deletemovie,
    getmovievaloration,
    getvalorationmovie
}
