var orm = require('../config/orm.js');

// var cat = {
// 	all: function (cb) {
// 		orm.all('cats', function (res) {
// 			cb(res);
// 		});
// 	},
// 	// cols and vals are arrays
// 	create: function (cols, vals, cb) {
// 		orm.create('cats', cols, vals, function (res) {
// 			cb(res);
// 		});
// 	},
// 	update: function (objColVals, condition, cb) {
// 		orm.update('cats', objColVals, condition, function (res) {
// 			cb(res);
// 		});
// 	},
// 	delete: function(objColVals, condition, cb) {
// 		orm.delete('cats', condition, function(res) {
// 			cb(res);
// 		})
// 	}
// };

// module.exports = cat;

var burger = {
	selectAll: function(cb) {
		orm.selectAll('burgers', function(data) {
			cb(data);
		})
	},
	insertOne: function(col, burger_name, cb) {
		orm.insertOne('burgers', col, burger_name, function(data) {
			cb(data);
		})
	},
	updateOne: function(col, burger_id, cb) {
		orm.updateOne('burgers', col, burger_id, function(data) {
			cb(data);
		}) 
	}
}

module.exports = burger;