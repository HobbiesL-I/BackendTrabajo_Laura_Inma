const { response } = require('express');
const { findAllBoardgames, findBoardgame, findsAllBoardgameValorations, findAllValorationsFromABoardgame, addBoardgame, addBoardgameValoration, modifyBoardgame, removeBoardgame, boardgameExistsById, boardgameExistsByName,getAllMovies, 
    getMovieById, createMovie, modifymovie, deleteMovie, createvaloration, findsAllMovieValoration, findValorationByMovieId, moviesExistByTitle, moviesExistById  } = require('../service/hobbies');

/**
 * Función para obtener los juegos de mesa. Si ademas en la ruta se mete ?name='nombre juego' se podrá buscar directamente por nombre un juego de mesa específico
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getBoardGames = (async (req, res) => {
    const name = req.query.name;

    if (req.query.name === undefined) {
        const boardgames = await findAllBoardgames();
        return res.status(200).json(boardgames);
    }

    else if (req.query.name !== undefined) {
        if (! await boardgameExistsByName(name)) {
            return res.status(404).json({
                code: 404,
                title: 'not-found',
                message: 'the boardgame has not been founded'
            });
        }

        const boardgame = await boardgameExistsByName(name);
        res.status(200).json(boardgame);
    }
});

/**
 * Función para buscar un juego de mesa por id y que te saque toda la información relacionada con este.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getBoardGame = (async (req, res) => {
    const idBoardgame = Number(req.params.idBoardgame);

    if (! await boardgameExistsById(idBoardgame)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'The boardgame has not been founded.'
        });
    }

    const boardgame = await findBoardgame(idBoardgame);
    res.status(200).json(boardgame);

});

/**
 * Función para obtener todas las valoraciones almacenadas en la base de datos.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getAllBoardagmesValorations = (async (req, res) => {
    const idBoardgame = req.query.idBoardgame;

    if (req.query.idBoardgame === undefined) {
        const valorations = await findsAllBoardgameValorations();
        return res.status(200).json(valorations);
    }

    else if (req.query.name != undefined) {
        if (!await valorationExistsByIdBoardgame(idBoardgame)) {
            return res.status(404).json({
                code: 404,
                title: 'not-found',
                message: 'the valorations have not been founded'
            });
        }

        const valorations = await valorationExistsByIdBoardgame(idBoardgame);
        res.status(200).json(valorations);
    }
});

/**
 * Función para sacar todas las valoraciones de un juego de mesa específico
 * @param {*} req 
 * @param {*} res 
 */
const getBoardgameValorations = (async (req, res) => {
    const idBoardgame = req.params.idBoardgame;

    const valorations = await findAllValorationsFromABoardgame(idBoardgame);
    res.status(200).json(valorations);
});

/**
 * Función para añadir un nuevo de juego a la base de datos. Si el nombre ya está registrado no te permite introducir nuevos datos.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const postBoardgame = (async (req, res) => {
    const name = req.body.name;

    if (await boardgameExistsByName(name)) {
        return res.status(409).json({
            code: 409,
            title: 'conflict',
            message: 'The boardgame is already on the list.'
        });
    }

    const numberPlayers = req.body.numberPlayers;
    const onePlayer = req.body.onePlayer;
    const price = req.body.price;
    const playTime = req.body.playTime;
    const mecanic = req.body.mecanic;
    const age = req.body.age;
    const difficulty = req.body.difficulty;
    const description = req.body.description;
    const yearRelease = req.body.yearRelease;
    const imageBoardgame = req.body.imageBoardgame;
    const videoBoardgame = req.body.videoBoardgame;
    const imageVideo = req.body.imageVideo;

    const isOnePlayer = !!onePlayer;

    await addBoardgame(name, numberPlayers, isOnePlayer, price, playTime, mecanic, age, difficulty, description, yearRelease, imageBoardgame, videoBoardgame, imageVideo);

    res.status(201).json({
        code: 201,
        title: 'created',
        message: 'The valoration has been added correctly.'
    });

});

/**
 * Función para añadir una valoración nueva a un juego de mesa. Se requiere el id del juego de mesa que quieres meter. 
 * Todavía no se si será más eficaz en vez de usar el id usar el nombre ya que ambos campos son únicos.
 * Si el campo de qualification está vacio o es menor de 0.0 o mayor de 5.0 entonces no se puede almacenar.
 * Si el campo de review está vacio no se puede crear ya que es obligatorio rellenar el campo.
 * Si el campo de review supera los 500 caracteres da error ya que supera la capacidad de almacenamiento de la base de datos
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const postValorationBoardgame = async (req, res) => {
    const idBoardgame = req.body.idBoardgame;

    if (!await boardgameExistsById(idBoardgame)) {
        return res.status(409).json({
            code: 409,
            title: 'conflict',
            message: 'There is no boardgame to valorate.'
        });
    }

    const namePerson = req.body.namePerson;
    const qualification = req.body.qualification;
    const review = req.body.review;

    if (qualification === undefined || review === null) {
        return res.status(400).json({
            code: 400,
            title: 'bad-request',
            message: 'You must put a qualification and a review.'
        });
    }

    if (qualification < 0.0 || qualification > 10.0) {
        return res.status(400).json({
            code: 400,
            title: 'bad-request',
            message: 'The qualification must be between 0.0 and 10.0.'
        });
    }

    if (review.lenght > 500) {
        return res.status(400).json({
            code: 400,
            title: 'bad-request',
            message: 'The field review cannot have more than 500 characters.'
        })
    }

    await addBoardgameValoration(idBoardgame, namePerson, qualification, review);
    res.status(201).json({
        code: 201,
        title: 'created',
        message: 'The valoration has been added correctly.'
    });
}

/**
 * Función para editar los datos de un juego de mesa que ya está almacenado en la base de datos
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const putBoardgame = (async (req, res) => {
    const idBoardgame = req.params.idBoardgame;

    if (!await boardgameExistsById(idBoardgame)) {
        return res.status(400).json({
            code: 404,
            title: 'not-found',
            message: 'The boardgame has not been founded'
        });
    }

    const name = req.body.name;
    const numberPlayers = req.body.numberPlayers;
    const onePlayer = req.body.onePlayer;
    const price = req.body.price;
    const playTime = req.body.playTime;
    const mecanic = req.body.mecanic;
    const age = req.body.age;
    const difficulty = req.body.difficulty;
    const description = req.body.description;
    const yearRelease = req.body.yearRelease;
    const imageBoardgame = req.body.imageBoardgame;
    const videoBoardgame = req.body.videoBoardgame;
    const imageVideo = req.body.imageVideo;

    const isOnePlayer = !!onePlayer;

    await modifyBoardgame(idBoardgame, name, numberPlayers, isOnePlayer, price, playTime, mecanic, age, difficulty, description, yearRelease, imageBoardgame, videoBoardgame, imageVideo);
    res.status(204).end();

});

/**
 * Función para eliminar el juego de mesa y sus correspondientes valoraciones
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const deleteBoardgame = (async (req, res) => {
    const idBoardgame = req.params.idBoardgame;

    if (!await boardgameExistsById(idBoardgame)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'The boardgame has not been founded'
        });
    }

    await removeBoardgame(idBoardgame);
    res.status(204).end();
});

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
    getBoardGames,
    getBoardGame,
    getAllBoardagmesValorations,
    getBoardgameValorations,
    postBoardgame,
    postValorationBoardgame,
    putBoardgame,
    deleteBoardgame,
    getMovies,
    getMovie,
    postmovie,
    postvaloration,
    putmovie,
    deletemovie,
    getmovievaloration,
    getvalorationmovie
}