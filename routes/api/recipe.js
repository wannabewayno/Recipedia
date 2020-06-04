<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const queryConditions = require("../../Queries/queryRequests");


// Import the model (cat.js) to use its database functions.
=======
// Import our models to use its database functions.
>>>>>>> cdb25d20ef6a0358c832f1d568a45a64a396c448
const db = require("../../models");


module.exports = app => {

  // Create all our routes and set up logic within those routes where required.
  app.get("/api/recipes", function(req, res) {
    db.Recipe.findAll().then(function(data) {
      res.json({
        data: data
      });
    });
  });
<<<<<<< HEAD
});

router.get("/api/recipesss", function(req, res) {
  // should send reqs through in the body.
  queryRequest = {
    // author: "nick", // need to join the tables first for this to work.
    name: "pasta",
    ingredients: ["b"],
    ingredientsUnwanted: ["a"],
    tags: ["vegan"]
    // cuisine: "italian", ---------------- not in the database
    // diet: "keto" ---------------- not in the database
  }
  
  db.Recipe.findAll({ 
    where: queryConditions(queryRequest),
    include: 
    }).then(function(data) {
    res.json({
      data: data
    })
  })
});

router.post("/api/cats", function(req, res) {
  cat.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
=======

  //TODO: create a recipe uuid here to also store this in s3. send image to s3, retrieve a url and send that to db, respond to user with success!
  app.post("/api/recipes", function(req, res) {console.log(req.body);
  //   db.Recipe.create({name: req.body, ingredients: "", servings: "", instructions: "", created_by: "", tags: "", image: ""}).then(newrecipe => {
  //     console.log(object);
  //     res.json({ data: newrecipe });
  //   }).catch(error => {
  //     res.status(422).json({message: "recipe generation failed"})
  //   });
>>>>>>> cdb25d20ef6a0358c832f1d568a45a64a396c448
  });


  // app.put("/api/cats/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;

  //   console.log("condition", condition);

  //   cat.update({
  //     sleepy: req.body.sleepy
  //   }, condition, function(result) {
  //     if (result.changedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });

  app.delete("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    cat.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

}
