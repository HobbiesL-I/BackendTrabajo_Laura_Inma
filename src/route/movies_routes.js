const express = require("express");
const router = express.Router();
const { getMovies, getMovie, postmovie, putmovie, deletemovie,  getmovievaloration, getvalorationmovie} = require("../controller/movies_controller");
// GET - Obtener todas las películas
router.get("/moviesli/movies",getMovies);

// GET - Obtener una película por ID
router.get("/moviesli/movies/:id", getMovie);
router.get("/moviesli/valorations", getmovievaloration);
router.get("/moviesli/valorations/:movie_id", getvalorationmovie);

// POST - Crear una película
router.post("/moviesli/movies", postmovie);

// PUT - Editar una película
router.put("/moviesli/movies/:id", putmovie);

// DELETE - Eliminar una película
router.delete("/moviesli/movies/:id", deletemovie);

module.exports = router;