const db = require('../configuration/database.js').db;
const { homedir, platform } = require('os');

const findAllBoardgames = (async () => {
    return await db('boardgame').select('*');    
});

const findBoardgame = (async (id) => {
    return await db('boardgame').select('*').where({idBoardgame: id}).first();
});

const findBoardgameByName = (async (name) => {
    return await db('boardgame').select('*').where({name: name}).first();
});

const addBoardgame = (async (name, numberPlayers, onePlayer, playTime, mecanic, age, difficulty, image, description, qualification, review, yearRelease) => {
    return await db('boardgame').insert({
        name: name,
        numberPlayers: numberPlayers,
        onePlayer: onePlayer,
        playTime: playTime,
        mecanic: mecanic,
        age: age,
        difficulty: difficulty,
        image: image,
        description: description,
        qualification: qualification,
        review: review,
        yearRelease: yearRelease
    });
});

const modifyBoardgame = (async (name, numberPlayers, onePlayer, playTime, mecanic, age, difficulty, image, description, qualification, review, yearRelease) => {
    return await db('boardgame').where({ idBoardgame: id }).update({
        name: name,
        numberPlayers: numberPlayers,
        onePlayer: onePlayer,
        playTime: playTime,
        mecanic: mecanic,
        age: age,
        difficulty: difficulty,
        image: image,
        description: description,
        qualification: qualification,
        review: review,
        yearRelease: yearRelease
    });
});

const removeBoardgame = (async (id) => {
    return await db('boardgame').where({ idBoardgame: id }).del();
});

const boardgameExistsById = (async (id) => {
    const boardgame = await db('boardgame').select('*').where({idBoardgame: id}).first();    
    return boardgame != null;
});

const boardgameExistsByName = (async (name) => {
    const boardgame = await db('boardgame').select('*').where({name: name}).first();
    return boardgame != null;
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