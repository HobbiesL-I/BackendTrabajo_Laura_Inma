const express = require('express');
const router = express.Router();

const {getBoardGames, getBoardGame, getAllBoardagmesValorations, getBoardgameValorations, postBoardgame, postValorationBoardgame, putBoardgame, deleteBoardgame,
    getMovies, getMovie, postmovie, postvaloration, putmovie, deletemovie, getmovievaloration, getvalorationmovie}= require('../controller/hobbies.js');

router.get('/hobbies/boardgames', getBoardGames);
router.get('/hobbies/boardgames/:idBoardgame', getBoardGame);
router.get('/hobbies/valorationsBoardgame', getAllBoardagmesValorations);
router.get('/hobbies/valorationsBoardgame/:idBoardgame', getBoardgameValorations);
router.post('/hobbies/boardgames', postBoardgame);
router.post('/hobbies/valorationsBoardgame', postValorationBoardgame);
router.put('/hobbies/boardgames/:idBoardgame', putBoardgame);
router.delete('/hobbies/boardgames/:idBoardgame', deleteBoardgame);

router.get("/hobbies/movies", getMovies);
router.get("/hobbies/movies/:id", getMovie);
router.get("/hobbies/valorations", getmovievaloration);
router.get("/hobbies/valorations/:movie_id", getvalorationmovie);
router.post("/hobbies/movies", postmovie);
router.post("/hobbies/valorations", postvaloration);  

router.put("/hobbies/movies/:id", putmovie);
router.delete("/hobbies/movies/:id", deletemovie);

module.exports = router;