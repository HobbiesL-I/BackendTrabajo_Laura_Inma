const db = require('../configuration/database.js').db;
const { homedir, platform } = require('os');

const findAllBoardgames = (async () => {
    return await db('boardgame').leftJoin('boardgameInfo', 'boardgame.idBoardgame', 'boardgameInfo.idBoardgame')
    .leftJoin('category', 'boardgameInfo.idCategory', 'category.idCategory')
    .leftJoin('language', 'boardgameInfo.idLanguage', 'language.idLanguage')
    .leftJoin('boardgameImage', 'boardgameInfo.idImage', 'boardgameImage.idImage')
    .select('boardgame.*',
    db.raw('GROUP_CONCAT(DISTINCT category.nameCategory) as categories'),
            db.raw('GROUP_CONCAT(DISTINCT language.nameLanguage) as languages'),
            db.raw('GROUP_CONCAT(DISTINCT boardgameImage.boardgameImage) as images'
    ))
    .groupBy('boardgame.idBoardgame')
    .orderBy('boardgame.idBoardgame');
});

const findBoardgame = (async (id) => {
    return await db('boardgame').select('*').where({idBoardgame: id}).first();
});

const findBoardgameByName = (async (name) => {
    return await db('boardgame').select('*').where({name: name}).first();
});

const addBoardgame = (async (name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, image, description, qualification, review, yearRelease) => {
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
        qualification: qualification,
        review: review,
        yearRelease: yearRelease
    });
});

const modifyBoardgame = (async (name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, image, description, qualification, review, yearRelease) => {
    return await db('boardgame').where({ idBoardgame: id }).update({
        name: name,
        numberPlayers: numberPlayers,
        onePlayer: onePlayer,
        price: price,
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