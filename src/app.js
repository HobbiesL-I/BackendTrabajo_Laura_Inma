const express = require('express');
const cors = require('cors');
const boardgames = require('./route/boardgames_routes.js');
const movies = require('./route/movies_routes.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', boardgames, movies);

app.listen(8080, () => {
    console.log("Iniciando el backend en el puerto 8080");
});
