const express = require("express");
const cors = require("cors");
const app = express();

const moviesRoutes = require("./src/route/movies_routes");
app.use(cors());

app.use(express.json());

// Prefijo de rutas
app.use("/movies", moviesRoutes);

app.listen(8080, () => {
  console.log("Servidor funcionando en http://localhost:8080");
});

