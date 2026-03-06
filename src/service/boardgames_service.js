const db = require('../configuration/database.js').db;
const { homedir, platform } = require('os');

/**
 * Funcion para sacar todos los juegos de mesa almacenados en la base de datos
 * @returns 
 */
const findAllBoardgames = (async () => {
    return await db('boardgame').select('*');
});

/**
 * Funcion para sacar los datos de un juego de mesa específico buscando por su id.
 * @param {*} idBoardgame 
 * @returns 
 */
const findBoardgame = (async (idBoardgame) => {
    return await db('boardgame').select('*').where({ idBoardgame: idBoardgame }).first();
});

/**
 * Función para sacar los datos de un juego de mesa especifico buscando por su nombre
 * @param {*} name 
 * @returns 
 */
const findBoardgameByName = (async (name) => {
    return await db('boardgame').select('*').where({ name, name }).first();
});

/**
 * Función para sacar todas las valoraciones que se han almacenado en la base de datos
 * @returns 
 */
const findsAllBoardgameValorations = (async () => {
    return await db('valorationBoardgame').select('*');
});

/**
 * Función para sacar todas las valoraciones que se han almacenado de un juego de mesa en concreto
 * @param {*} idBoardgame 
 * @returns 
 */
const findAllValorationsFromABoardgame = (async (idBoardgame) => {
    return await db('valorationBoardgame').select('*').where({ idBoardgame: idBoardgame });
});

/**
 * Función para añadir un juego de mesa a la base de datos
 * @param {*} name 
 * @param {*} numberPlayers 
 * @param {*} onePlayer 
 * @param {*} price 
 * @param {*} playTime 
 * @param {*} mecanic 
 * @param {*} age 
 * @param {*} difficulty 
 * @param {*} description 
 * @param {*} yearRelease 
 * @param {*} imageBoardgame 
 * @param {*} videoBoardgame 
 * @param {*} imageVideo 
 * @param {*} imageBoardgame2
 * @returns 
 */
const addBoardgame = (async (name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, description, yearRelease, imageBoardgame, videoBoardgame, imageVideo, imageBoardgame2) => {
    return await db('boardgame').insert({
        name: name,
        numberPlayers: numberPlayers,
        onePlayer: onePlayer,
        price: price,
        playTime: playTime,
        mecanic: mecanic,
        age: age,
        difficulty: difficulty,
        description: description,
        yearRelease: yearRelease,
        imageBoardgame: imageBoardgame,
        videoBoardgame: videoBoardgame,
        imageVideo: imageVideo,
        imageBoardgame2: imageBoardgame2
    });
});

/**
 * Función para añadir una valoración a un juego de mesa en concreto.
 * @param {*} idBoardgame 
 * @param {*} namePerson 
 * @param {*} qualification 
 * @param {*} review 
 * @returns 
 */
const addBoardgameValoration = (async (idBoardgame, namePerson, qualification, review) => {
    return await db('valorationBoardgame').insert({
        idBoardgame: idBoardgame,
        namePerson: namePerson || 'anonymous',
        qualification: qualification,
        review: review
    });
});

/**
 * Función para modificar los datos del juego de mesa almacenado en la base de datos. 
 * @param {*} idBoardgame 
 * @param {*} name 
 * @param {*} numberPlayers 
 * @param {*} onePlayer 
 * @param {*} price 
 * @param {*} playTime 
 * @param {*} mecanic 
 * @param {*} age 
 * @param {*} difficulty 
 * @param {*} description 
 * @param {*} yearRelease 
 * @param {*} imageBoardgame 
 * @param {*} videoBoardgame 
 * @param {*} imageVideo 
 * @param {*} imageBoardgame2
 * @returns 
 */
const modifyBoardgame = (async (idBoardgame, name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, description, yearRelease, imageBoardgame, videoBoardgame, imageVideo, imageBoardgame2) => {
    return await db('boardgame').where({ idBoardgame: idBoardgame }).update({
        name: name,
        numberPlayers: numberPlayers,
        onePlayer: onePlayer,
        price: price,
        playTime: playTime,
        mecanic: mecanic,
        age: age,
        difficulty: difficulty,
        description: description,
        yearRelease: yearRelease,
        imageBoardgame: imageBoardgame,
        videoBoardgame: videoBoardgame,
        imageVideo: imageVideo,
        imageBoardgame2: imageBoardgame2
    });
});

/**
 * Función para eliminar un juego de mesa en concreto
 * @param {*} idBoardgame 
 * @returns 
 */
const removeBoardgame = (async (idBoardgame) => {
    return await db('boardgame').where({ idBoardgame: idBoardgame }).del();
});

/**
 * Función para localizar si un juego de mesa existe a través de su id
 * @param {*} idBoardgame 
 * @returns 
 */
const boardgameExistsById = async (idBoardgame) => {
    const boardgame = await db('boardgame').where('idBoardgame', idBoardgame).first();
    return boardgame != null;
}

/**
 * Función para localizar si un juego de mesa existe a través de su nombre
 * @param {*} name 
 * @returns 
 */
const boardgameExistsByName = (async (name) => {
    const boardgame = await db('boardgame').select('*').where('name', name).first();
    return boardgame != null;
});

module.exports = {
    findAllBoardgames,
    findBoardgame,
    findBoardgameByName,
    findsAllBoardgameValorations,
    findAllValorationsFromABoardgame,
    addBoardgame,
    addBoardgameValoration,
    modifyBoardgame,
    removeBoardgame,
    boardgameExistsById,
    boardgameExistsByName
}