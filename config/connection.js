var mysql = require('mysql');
var connection = mysql.createConnection({
    host: ENV['db_host'],
    port: 3306,
    user: ENV['db_user'],
    password: ENV['db_pw'],
    database: ENV['db']
});

module.exports = connection;