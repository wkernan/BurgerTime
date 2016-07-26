var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.db_host || "localhost",
    port: 3306,
    user: process.env.db_user || "root",
    password: process.env.db_pw || "",
    database: process.env.db || "burgers_db"
});

module.exports = connection;