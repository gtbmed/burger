// Dependencies
const connection = require('../config/connetion.js');

// ORM functions
var orm = {
  // Select All ORM function
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString
  }

}
