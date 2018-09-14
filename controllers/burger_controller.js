var express = require('express')
var router = express.Router()
var burger = require("../models/burger.js")


router.get('/', function(req,res){
  burger.all(function(data) {
      var burgerObj = {
          id: data.id,
          burgerName: data.burger_name
      };
      res.send('Index', burgerObj);
  })
})



// add burger

router.post('/api/burgers', function(req,res){
  burger.create([
      req.body
  ], function(result) {
      res.json({id: result.insertID});
  })
  
  

// update burger devoured boolean

router.put('/api/burgers/:id', function(req,res){
  var id = req.params.id
  burger.update(id, function(response){
    res.json(response)
  })
})


module.exports = router