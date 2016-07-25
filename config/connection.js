var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.db_host,
    port: 3306,
    user: process.env.db_user,
    password: process.env.db_pw,
    database: process.env.db
});

module.exports = connection;