// Import the model (cat.js) to use its database functions.
// Import our models to use its database functions.
const db = require("../../models");

// import the queryConditions to use as a condition generator
const queryConditions = require("../../Queries/queryRequests");

module.exports = app => {

  // Create all our routes and set up logic within those routes where required.
  app.get("/api/recipes", function(req, res) {
    // should send reqs through in the body.
    queryRequest = {
      // author: req.body.author, // need to join the tables first for this to work.
      name: req.body.name,
      ingredients: req.body.ingredients,
      ingredientsUnwanted: req.body.ingredientsUnwanted,
      tags: req.body.tags
      // cuisine: req.body.cuisine ---------------- not in the database
      // diet: req.body.diet ---------------- not in the database
    }
    
    db.Recipe.findAll({ 
      attributes: ["name", "ingredients", "servings", "instructions", "created_by", "tags"],
      // include: [
      //   db.User
      // ],
      where: queryConditions(queryRequest)
    }).then(function(data) {
      res.json({
        data: data
      })
    })

  });

  app.post("/api/recipes", function(req, res) {
    console.log(req.body);
    //TODO: do database stuff here to add a recipe
    // let wayne know how to change the keys in req.body to help you out here
  //   db.Recipe.create({name: req.body, ingredients: "", servings: "", instructions: "", created_by: "", tags: "", image: ""}).then(newrecipe => {
  //     console.log(object);
  //     res.json({ data: newrecipe });
  //   }).catch(error => {
  //     res.status(422).json({message: "recipe generation failed"})
  //   });
  });

  app.delete("/api/recipe/:id", function(req, res) {
    // remove the recipe with this id;
    const recipeID = req.params.id;
    

    //TODO: do database stuff here
    // var condition = "id = " + req.params.id;
    // cat.delete(condition, function(result) {
    //   if (result.affectedRows == 0) {
    //     // If no rows were changed, then the ID must not exist, so 404
    //     return res.status(404).end();
    //   } else {
    //     res.status(200).end();
    //   }
    // });
  });



};

/* 
app.get("/api/recipes", function(req, res) {
  

app.post("/api/cats", function(req, res) {
  cat.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });

  //TODO: create a recipe uuid here to also store this in s3. send image to s3, retrieve a url and send that to db, respond to user with success!
  app.post("/api/recipes", function(req, res) {console.log(req.body);
  //   db.Recipe.create({name: req.body, ingredients: "", servings: "", instructions: "", created_by: "", tags: "", image: ""}).then(newrecipe => {
  //     console.log(object);
  //     res.json({ data: newrecipe });
  //   }).catch(error => {
  //     res.status(422).json({message: "recipe generation failed"})
  //   });
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
  //});

  app.delete("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    cat.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
*/
