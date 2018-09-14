var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");


router.get('/', function(req,res){
  burger.all(function(data) {
    var hbsObject = {
        burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});


//api get route for all burgers objects
router.get('/api/burgers', function(req,res){
    burger.all(function(data) {
      var hbsObject = {
          burgers: data
      };
      console.log(hbsObject);
      res.json(hbsObject);
    });
  });
  


// add burger

router.post('/api/burgers', function(req,res){
  burger.create([
      req.body
  ], function(result) {
      res.json({id: result.insertID});
  });
});  
  

// update burger devoured boolean

router.put('/api/burgers/:id', function(req,res){
  var id = req.params.id;
  burger.update(id, function(response){
    res.json(response)
  })
});


module.exports = router;