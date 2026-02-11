const { response } = require('express');
const { findAllBoardgames, findBoardgame, findBoardgameByName, addBoardgame, boardgameExistsById, boardgameExistsByName, addBoardgameValoration} = require('../service/hobbies');


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

const getBoardGame = (async (req, res) => {
    const idBoardgame = req.params.idBoardgame;

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

//Función para añadir un nuevo juego de mesa a la base de datos
const postBoardgame = async (req, res) => {
    const name= req.body.name;

    if (await boardgameExistsByName(name)) {
        return res.status(409).json({
            code: 409,
            title: 'conflict',
            message: 'The boardgame is already on the list.'
        });
    }

    const numberPlayers= req.body.numberPlayers;
    const onePlayer= req.body.onePlayer;
    const price= req.body.price;
    const playTime= req.body.playTime;
    const mecanic= req.body.mecanic;
    const age= req.body.age;
    const difficulty= req.body.difficulty;
    const description= req.body.description;
    const yearRelease= req.body.yearRelease;
    const imageBoardgame= req.body.imageBoardgame;
    const videoBoardgame= req.body.videoBoardgame;

    await addBoardgame(name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, description, yearRelease, imageBoardgame, videoBoardgame);

    res.status(204).end();
   
};

const postValoration = async (req, res) => {
    const idBoardgame=req.body.idBoardgame;

    if(!await boardgameExistsById(idBoardgame)){
        return res.status(409).json({
            code: 409,
            title: 'conflict',
            message: 'There is no boardgame to valorate.'
        });
    }

    const namePerson= req.body.namePerson;
    const qualification=req.body.qualification;
    const review=req.body.review;

    if(qualification === undefined || qualification < 0.0 || qualification > 5.9){
        return res.status(400).json({
            code: 400,
            title: 'bad-request',
            message: 'You must put a qualification and a review'
        });
    }

    const boardgameValoration = await addBoardgameValoration(idBoardgame, namePerson, qualification, review);
    res.status(201).json({
        code:201,
        title:'created',
        message: 'The valoration has been added correctly',
        data: {idValoration: boardgameValoration}
    });
}

module.exports = {
    getBoardGames,
    getBoardGame,
    postBoardgame,
    postValoration
}