const express = require("express");
const cors = require("cors");
const app = express();

const moviesRoutes = require("./src/route/movies.routes");
app.use(cors({
  origin: "http://127.0.0.1:5500"
}));

app.use(express.json());

// Prefijo de rutas
app.use("/movies", moviesRoutes);

app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000");
});

