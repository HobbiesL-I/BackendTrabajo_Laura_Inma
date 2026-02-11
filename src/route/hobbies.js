const express = require('express');
const router = express.Router();

const {getBoardGames, getBoardGame, postBoardgame, postValoration}= require('../controller/hobbies.js');

router.get('/hobbies/boardgames', getBoardGames);
router.get('/hobbies/boardgames/:idBoardgame', getBoardGame);
router.post('/hobbies/boardgames', postBoardgame);
router.post('/hobbies/boardgames/:idBoardgame/valoration', postValoration);

module.exports = router;