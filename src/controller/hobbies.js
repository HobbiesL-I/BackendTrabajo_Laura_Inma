const { response } = require('express');
const { findAllBoardgames, findBoardgame, findBoardgameByName, addBoardgame, modifyBoardgame, removeBoardgame, boardgameExistsById, boardgameExistsByName} = require('../service/hobbies');


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
    const id = req.params.id;

    if (! await boardgameExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the boardgame has not been founded'
        });
    }

    const boardgame = await findBoardgame(id);
    res.status(200).json(boardgame);

});

const postBoardgame = (async (req, res) => {
    const name = req.body.name;

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
    const image= req.body.image;
    const description= req.body.description;
    const qualification=req.body.qualification;
    const review= req.body.review;
    const yearRelease= req.body.yearRelease; 

    if (name === null || numberPlayers === null || price===null || playTime === null || mecanic===null || age===null || image===null) {
        return res.status(400).json({
            code: 400,
            return: 'bad-request',
            message: 'There are fields to be filled in.'
        });
    }

    const newBoardgame = await addBoardgame(name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, image, description, qualification, review, yearRelease);

    res.status(201).json({
        code: 201,
        tittle: 'created',
        message: 'The data of the boardgame have been successfully entered.',
        data: newBoardgame
    });

});

const putBoardgame = (async (req, res) => {
    const id = req.params.id;

    if (!await boardgameExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the boardgame has not been founded'
        });
    }

    const name = req.body.name;
    const numberPlayers= req.body.numberPlayers;
    const onePlayer= req.body.onePlayer;
    const price= req.body.price;
    const playTime= req.body.playTime;
    const mecanic= req.body.mecanic;
    const age= req.body.age;
    const difficulty= req.body.difficulty;
    const image= req.body.image;
    const description= req.body.description;
    const qualification=req.body.qualification;
    const review= req.body.review;
    const yearRelease= req.body.yearRelease;  

    await modifyBoardgame(id, name, numberPlayers, onePlayer, price, playTime, mecanic, age, difficulty, image, description, qualification, review, yearRelease);

    res.status(204).end();

});


const deleteBoardgame = (async (req, res) => {
    const id = req.params.id;

    if (!await boardgameExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the boardgame has not been founded'
        });
    }

    await removeBoardgame(id);

    res.status(204).end();
});

module.exports = {
    getBoardGames,
    getBoardGame,
    postBoardgame,
    putBoardgame,
    deleteBoardgame
}