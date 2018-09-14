var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  create: function(vals, cb) {
    orm.insertBurger(vals, function(res) {
      cb(res);
    });
  },

  update: function(id, cb) {
    orm.updateBurger(id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = burger;
