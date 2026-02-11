const db = require('../configuration/database.js').db;
const { homedir, platform } = require('os');

const findAllBoardgames = (async () => {
    return await db('boardgame').select('*');  
});

const findBoardgame = (async (idBoardgame) => {
    return await db('boardgame').select('*').where({idBoardgame: idBoardgame}).first();
});

const findBoardgameByName = (async (name) => {
    return await db('boardgame').select('*').where(name, name).first();
});

const addBoardgame = (async(name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, description, yearRelease, imageBoardgame, videoBoardgame) =>{
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
        videoBoardgame: videoBoardgame
    });
    
});

const addBoardgameValoration = async (idBoardgame, namePerson, qualification, review) => {
    if(!idBoardgame){
        throw new Error ('Boardgame does not exist')
    }

    const data = {
        idBoardgame: idBoardgame,
        qualification: qualification,
        review: review
    }

    if(namePerson && namePerson.trim() !== ''){
        data.namePerson = namePerson.trim();
    }

    return await db('valoration').insert(data);
}

const boardgameExistsById = (async (idBoardgame) => {
    const boardgame = await db('boardgame').select('*').where({idBoardgame: idBoardgame}).first();    
    return boardgame != null;
});

const boardgameExistsByName = (async (name) => {
    const boardgame = await db('boardgame').select('*').where(name, name).first();
    return boardgame != null;
});

module.exports = {
    findAllBoardgames,
    findBoardgame,
    findBoardgameByName,
    addBoardgame,
    addBoardgameValoration,
    boardgameExistsById,
    boardgameExistsByName
}