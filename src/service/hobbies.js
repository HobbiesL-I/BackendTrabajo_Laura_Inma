const db = require('../configuration/database.js').db;
const { homedir, platform } = require('os');
const { getDays, getDaysfromNow, getYearsFromNow } = require('../utils/dateUtils.js');
const { diff } = require('util');

const findAllBoardgames = (async () => {
    const boardgames = await db('hobbies').select('*');

    boardgames.forEach((boardgame) => {
        const realeseDate = new Date(boardgame.realeseDate);
        boardgame.year = getYearsFromNow(realeseDate);
        boardgame.realeseDate = new Date(boardgame.realeseDate).toISOString().split('T')[0];
    })

    return boardgames;
});

const findBoardgame = (async (id) => {
    const boardgame = await db('hobbies').select('*').where({ id: id }).first();

    //almacenamos en una variable el campo de birthDate de la base de datos pirate
    const realeseDate = new Date(boardgame.realeseDate)
    boardgame.year = getYearsFromNow(realeseDate);
    //formatea la fecha a YYYY-MM-DD
    boardgame.realeseDate = new Date(boardgame.realeseDate).toISOString().split('T')[0];

    return boardgame;
});

const findBoardgameByName = (async (name) => {
    const boardgame = await db('hobbies').select('*').where({ name: name }).first();

    if (boardgame === null) return null;

    if (boardgame.realeseDate) {
        const realeseDate = new Date(boardgame.realeseDate);
        boardgame.year = getYearsFromNow(realeseDate);
        boardgame.realeseDate = new Date(boardgame.realeseDate).toISOString().split('T')[0];
    }

    return boardgame
});

const addBoardgame = (async (name, realeseDate, playtime, players, onePlayer, difficulty, language, author, description) => {
    return await db('hobbies').insert({
        name: name,
        realeseDate, realeseDate,
        playtime, playtime,
        players: players,
        onePlayer: onePlayer,
        difficulty: difficulty,
        language: language,
        author: author,
        description: description
    });
});

const modifyBoardgame = (async (name, realeseDate, playtime, players, onePlayer, difficulty, language, author, description) => {
    return await db('hobbies').where({ id: id }).update({
        name: name,
        realeseDate, realeseDate,
        playtime, playtime,
        players: players,
        onePlayer: onePlayer,
        difficulty: difficulty,
        language: language,
        author: author,
        description: description
    });
});

const removeBoardgame = (async (id) => {
    return await db('hobbies').where({ id: id }).del();
});

const boardgameExistsById = (async (id) => {
    const boardgame = await db('hobbies').select('*').where({ id: id }).first();

    const realeseDate = new Date(boardgame.realeseDate);
    boardgame.year = getYearsFromNow(realeseDate);
    boardgame.realeseDate = new Date(boardgame.realeseDate).toISOString().split('T')[0];


    return boardgame != null;
});

const boardgameExistsByName = (async (name) => {
    const boardgame = await db('pirates').select('*').where({ name: name }).first();

    const realeseDate = new Date(boardgame.realeseDate);
    boardgame.year = getYearsFromNow(realeseDate);
    boardgame.realeseDate = new Date(boardgame.realeseDate).toISOString().split('T')[0];

    return pirate != null;
});

module.exports = {
    findAllBoardgames,
    findBoardgame,
    findBoardgameByName,
    addBoardgame,
    modifyBoardgame,
    removeBoardgame,
    boardgameExistsById,
    boardgameExistsByName
}