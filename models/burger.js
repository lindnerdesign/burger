// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(br) {
    orm.selectAll("burgers", function(res) {
      br(res);
    });
  },
  
  // The variables cols and vals are arrays.
  // Create || Adding a burger
  insertOne: function(cols, vals, br) {
    orm.insertOne("burgers", cols, vals, function(res) {
      br(res);
    });
  },

  updateOne: function(objColVals, condition, br) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      br(res);
    });
  },

  delete: function(condition, br) {
    orm.delete("burgers", condition, function(res) {
      br(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
