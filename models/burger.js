var orm = require("../config/orm.js");

var burger = {
  //to grab all existing burgers
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  //add burger
  create: function(vals, cb) {
      console.log("modelcreate");
    orm.insertBurger(vals, function(res) {
      cb(res);
    });
  },


  // update burger devoured boolean
  update: function(id, cb) {
    orm.updateBurger(id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = burger;
