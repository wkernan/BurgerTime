var connection = require('./connection.js');

var orm = {
	selectAll: function(table, cb) {
		connection.query("SELECT * FROM " + table, function(err, data) {
			if (err) throw err;
			cb(data);
		})
	},
	insertOne: function(table, col_name, burger_name, cb) {
		connection.query("INSERT INTO " + table + "(" + col_name + ")" + "VALUES (?)", [burger_name], function(err, data) {
			if (err) throw err;
			cb(data);
		})
	},
	updateOne: function(table, col_name, burger_id, cb) {
		connection.query("UPDATE " + table + " SET " + col_name + "=1 " + "WHERE id=" + burger_id, function(err, data) {
			if (err) throw err;
			cb(data);
		})
	},
	deleteOne: function(table, burger_id, cb) {
		connection.query("DELETE FROM " + table + " WHERE id=" + burger_id, function(err, data) {
			if (err) throw err;
			cb(data);
		})
	},
	reOrderOne: function(table, col_name, burger_id, cb) {
		connection.query("UPDATE " + table + " SET " + col_name + "=0 " + "WHERE id=" + burger_id, function(err, data) {
			if (err) throw err;
			cb(data);
		})
	}
}

module.exports = orm;