const express = require("express");
const router = express.Router();
const { getMovies, getMovie, postmovie,postvaloration, putmovie, deletemovie,  getmovievaloration, getvalorationmovie} = require("../controller/movies_controller");
router.get("/hobbies/movies", getMovies);
router.get("/hobbies/movies/:id", getMovie);
router.get("/hobbies/valorations", getmovievaloration);
router.get("/hobbies/valorations/:movie_id", getvalorationmovie);
router.post("/hobbies/movies", postmovie);
router.post("/hobbies/valorations", postvaloration);  
router.put("/hobbies/movies/:id", putmovie);
router.delete("/hobbies/movies/:id", deletemovie);


module.exports = router;