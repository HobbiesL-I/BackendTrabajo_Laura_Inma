const db = require("../config/db");

// Obtener todas las películas
exports.getMovies = (req, res) => {
  db.query("SELECT * FROM movies", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Crear una película
exports.createMovie = (req, res) => {
  const { title, description, image, year, genre, director, actors, duration, rating } = req.body;

  const sql = "INSERT INTO movies (title, description, image, year, genre, director, actors, duration, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [title, description, image, year, genre, director, actors, duration, rating], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Película creada correctamente" });
  });
};
