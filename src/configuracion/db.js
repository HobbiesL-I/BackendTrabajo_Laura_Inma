const mysql = require('mysql2');

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "admin",
  database: process.env.DB_NAME || "moviesli"
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Error de conexión:", err);
  } else {
    console.log("Conectado a la base de datos");
    connection.release();
  }
});

module.exports = db;