var connection = require("./connection.js");

var orm = {
    all: function(input, cb) {
        var queryString = "SELECT * FROM " + input + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          console.log("result: " + result);
          cb(result);
        });
    },
    
    insertBurger: function(name, cb){
      console.log(name);
      connection.query("INSERT INTO burgers (burger_name) VALUES ('" + name[0].name + "')", function(error, result){
        if(error){
          console.log(error);
        }
        cb(result)
      })
    },

    updateBurger: function(id, cb){
      connection.query(`UPDATE burgers SET devoured = true WHERE id = ${id}`, function(error, result){
        if(error){
          console.log(error);
        }
        cb(result)
      })
    },
  
}
  
module.exports = orm;

