const express = require('express');
const cors = require('cors');
const hobbies = require('./route/hobbies.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', hobbies);

app.listen(8080, () => {
    console.log("Iniciando el backend en el puerto 8080");
});
