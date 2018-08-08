// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(bn) {
    orm.selectAll("burgers", function(res) {
      bn(res);
    });
  },
  
  // The variables cols and vals are arrays.
  // Create || Adding a burger
  insertOne: function(cols, vals, bn) {
    orm.insertOne("burgers", cols, vals, function(res) {
      bn(res);
    });
  },

  updateOne: function(objColVals, condition, bn) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      bn(res);
    });
  },

  delete: function(condition, bn) {
    orm.delete("burgers", condition, function(res) {
      bn(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
