const express = require('express');
const router = express.Router();

const {getBoardGames, getBoardGame, postBoardgame, putBoardgame, deleteBoardgame}= require('../controller/hobbies.js');

router.get('/hobbies/boardgames', getBoardGames);
router.get('/hobbies/boardgames/:id', getBoardGame);
router.post('/hobbies/boardgames', postBoardgame);
router.put('/hobbies/boardgames/:id', putBoardgame);
router.delete('/hobbies/boardgames/:id', deleteBoardgame);

module.exports = router;