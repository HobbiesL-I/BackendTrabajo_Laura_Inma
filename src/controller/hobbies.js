const { response } = require('express');
const { findAllBoardgames, findBoardgame, findBoardgameByName, findsAllBoardgameValorations, findAllValorationsFromABoardgame, addBoardgame, addBoardgameValoration, modifyBoardgame, modifyValoration, boardgameExistsById, boardgameExistsByName, valorationExistsByIdBoardgame } = require('../service/hobbies');

/**
 * Función para obtener los juegos de mesa. Si ademas en la ruta se mete ?name='nombre juego' se podrá buscar directamente por nombre un juego de mesa específico
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

/*
* Función para obtener todas las valoraciones almacenadas en la base de datos.
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
 *  Función para sacar todas las valoraciones de un juego de mesa específico
 */
const getBoardgameValorations = (async (req, res) => {
    const idBoardgame = req.params.idBoardgame;

    const valorations = await findAllValorationsFromABoardgame(idBoardgame);
    res.status(200).json(valorations);
});

/**
 * Función para añadir un nuevo de juego a la base de datos. Si el nombre ya está registrado no te permite introducir nuevos datos.
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

    await addBoardgame(name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, description, yearRelease, imageBoardgame, videoBoardgame);

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

    if(qualification < 0.0 || qualification > 5.0){
        return res.status(400).json({
            code: 400,
            title: 'bad-request',
            message: 'The qualification must be between 0.0 and 5.0.'
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

const putBoardgame = (async (req, res) => {
    const idBoardgame = req.params.idBoardgame;

    if (!await boardgameExistsById(idBoardgame)) {
        return res.status(400).json({
            code: 404,
            title: 'not-found',
            message: 'The boardgame has not been founded'
        });
    }

    const name = req.params.name;
    const numberPlayers = req.params.numberPlayers;
    const onePlayer = req.params.onePlayer;
    const price = req.params.price;
    const playTime = req.params.playTime;
    const mecanic = req.params.mecanic;
    const age = req.params.age;
    const difficulty = req.params.difficulty;
    const description = req.params.description;
    const yearRelease = req.params.yearRelease;
    const imageBoardgame = req.params.imageBoardgame;
    const videoBoardgame = req.params.videoBoardgame;

    await modifyBoardgame(idBoardgame, name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, description, yearRelease, imageBoardgame, videoBoardgame);
    res.status(204).end();

});

const putValorationBoardgame =(async (req, res) => {
    const idValoration = req.params.idValoration;

    if (!await boardgameExistsById(idValoration)) {
        return res.status(400).json({
            code: 404,
            title: 'not-found',
            message: 'The valoration has not been founded'
        });
    }

    const namePerson= req.params.namePerson;
    const qualification= req.params.qualification;
    const review= req.params.review;

    await modifyValoration(idValoration, namePerson, qualification, review);
    res.status(204).end();

});

module.exports = {
    getBoardGames,
    getBoardGame,
    getAllBoardagmesValorations,
    getBoardgameValorations,
    postBoardgame,
    postValorationBoardgame,
    putBoardgame,
    putValorationBoardgame
}