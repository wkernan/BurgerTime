var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-04.cleardb.net",
    port: 3306,
    user: "b8eb4a95d2da61", 
    password: "d98c0676", 
    database: "heroku_b82a5a8dda5ded9"
});

module.exports = connection;