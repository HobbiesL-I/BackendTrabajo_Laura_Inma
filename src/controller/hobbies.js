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

        const boardgame = await findBoardgameByName(name);
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

        const realeseDate = req.body.realeseDate;
        const playtime= req.body.playtime;
        const players= req.body.players;
        const onePlayer= req.body.onePlayer;
        const difficulty= req.body.difficulty;
        const language= req.body.language;
        const author= req.body.author;
        const description= req.body.description;    

    if (name === null || realeseDate === null || players === null || onePlayer===null) {
        return res.status(400).json({
            code: 400,
            return: 'bad-request',
            message: 'There are fields to be filled in.'
        });
    }

    const newBoardgame = await addBoardgame(name, realeseDate, playtime, players, onePlayer, difficulty, language, author, description);

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
    const realeseDate = req.body.realeseDate;
    const playtime= req.body.playtime;
    const players= req.body.players;
    const onePlayer= req.body.onePlayer;
    const difficulty= req.body.difficulty;
    const language= req.body.language;
    const author= req.body.author;
    const description= req.body.description;   

    await modifyBoardgame(id, name, realeseDate, playtime, players, onePlayer, difficulty, language, author, description);

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