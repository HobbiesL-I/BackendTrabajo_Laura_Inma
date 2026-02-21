const express = require("express");
const router = express.Router();
const moviesController = require("../controller/movies.controller");

// GET - Obtener todas las películas
router.get("/", moviesController.getMovies);

// GET - Obtener una película por ID
router.get("/:id", moviesController.getMovieById);

// POST - Crear una película
router.post("/", moviesController.createMovie);

// PUT - Editar una película
router.put("/:id", moviesController.updateMovie);

// DELETE - Eliminar una película
router.delete("/:id", moviesController.deleteMovie);

module.exports = router;