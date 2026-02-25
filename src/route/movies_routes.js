const express = require("express");
const router = express.Router();
const { getMovies, getMovie, postmovie, putmovie, deletemovie,  getmovievaloration, getvalorationmovie} = require("../controller/movies_controller");
router.get("/movies", getMovies);
router.get("/movies/:id", getMovie);
router.get("/valorations", getmovievaloration);
router.get("/valorations/:movie_id", getvalorationmovie);
router.post("/movies", postmovie);
router.put("/movies/:id", putmovie);
router.delete("/movies/:id", deletemovie);

module.exports = router;