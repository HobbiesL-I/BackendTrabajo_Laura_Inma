const express = require("express");
const app = express();

const moviesRoutes = require("./src/route/movies.routes");

app.use(express.json());

// Prefijo de rutas
app.use("/movies", moviesRoutes);

app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000");
});

