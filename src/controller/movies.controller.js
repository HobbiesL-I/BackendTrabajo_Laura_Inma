const moviesService = require("../service/movies.service");

// Obtener todas las películas
exports.getMovies = async (req, res) => {
    try {
        const movies = await moviesService.getAllMovies();
        res.json(movies);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Obtener una película por ID
exports.getMovieById = async (req, res) => {
    try {
        const movie = await moviesService.getMovieById(req.params.id);
        if (!movie) return res.status(404).json({ message: "Película no encontrada" });
        res.json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Crear una película
exports.createMovie = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        await moviesService.createMovie(title, description, image);
        res.json({ message: "Película creada correctamente" });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Editar una película
exports.updateMovie = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        await moviesService.updateMovie(req.params.id, title, description, image);
        res.json({ message: "Película actualizada correctamente" });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Eliminar una película
exports.deleteMovie = async (req, res) => {
    try {
        await moviesService.deleteMovie(req.params.id);
        res.json({ message: "Película eliminada correctamente" });
    } catch (err) {
        res.status(500).json(err);
    }
};