const express = require('express');
const router = express.Router();

const {getBoardGames, getBoardGame, getAllBoardagmesValorations, postBoardgame, postValorationBoardgame}= require('../controller/hobbies.js');

router.get('/hobbies/boardgames', getBoardGames);
router.get('/hobbies/boardgames/:idBoardgame', getBoardGame);
router.get('/hobbies/valorationsBoardgame', getAllBoardagmesValorations)
router.post('/hobbies/boardgames', postBoardgame);
router.post('/hobbies/boardgames/valorationsBoardgame', postValorationBoardgame);

module.exports = router;