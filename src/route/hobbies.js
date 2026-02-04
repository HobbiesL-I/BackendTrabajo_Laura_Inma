const express = require('express');
const router = express.Router();

const {getBoardGames, getBoardGame, postBoardgame, putBoardgame, deleteBoardgame}= require('../controller/hobbies.js');

router.get('/boardgames', getBoardGames);
router.get('/boardgames/:id', getBoardGame);
router.post('/boardgames', postBoardgame),
router.put('/boardgames/:id', putBoardgame),
router.delete('/boardgames/:id', deleteBoardgame);

module.exports = router;