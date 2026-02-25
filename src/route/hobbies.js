const express = require('express');
const router = express.Router();

const {getBoardGames, getBoardGame, getAllBoardagmesValorations, getBoardgameValorations, postBoardgame, postValorationBoardgame, putBoardgame, deleteBoardgame}= require('../controller/hobbies.js');

router.get('/hobbies/boardgames', getBoardGames);
router.get('/hobbies/boardgames/:idBoardgame', getBoardGame);
router.get('/hobbies/valorationsBoardgame', getAllBoardagmesValorations);
router.get('/hobbies/valorationsBoardgame/:idBoardgame', getBoardgameValorations);
router.post('/hobbies/boardgames', postBoardgame);
router.post('/hobbies/valorationsBoardgame', postValorationBoardgame);
router.put('/hobbies/boardgames/:idBoardgame', putBoardgame);
router.delete('/hobbies/boardgames/:idBoardgame', deleteBoardgame);

module.exports = router;