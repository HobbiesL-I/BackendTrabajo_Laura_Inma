const db = require("../configuracion/db");

exports.getAllMovies = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM movies", (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

exports.getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM movies WHERE id = ?", [id], (err, results) => {
            if (err) reject(err);
            else resolve(results[0]);
        });
    });
};

exports.createMovie = (title, description, image) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO movies (title, description, image) VALUES (?, ?, ?)";
        db.query(sql, [title, description, image], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

exports.updateMovie = (id, title, description, image) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE movies SET title=?, description=?, image=? WHERE id=?";
        db.query(sql, [title, description, image, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

exports.deleteMovie = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM movies WHERE id = ?", [id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};