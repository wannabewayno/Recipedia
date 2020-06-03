const express = require('express');
const router = express.Router();

// Import the model (cat.js) to use its database functions.
const db = require("../../models");

// Create all our routes and set up logic within those routes where required.
router.get("/api/recipes", function(req, res) {
  db.Recipe.findAll().then(function(data) {
    res.json({
      data: data
    });
  });
});

router.post("/api/recipes", function(req, res) {console.log(req.body);
//   db.Recipe.create({name: req.body, ingredients: "", servings: "", instructions: "", created_by: "", tags: "", image: ""}).then(newrecipe => {
//     console.log(object);
//     res.json({ data: newrecipe });
//   }).catch(error => {
//     res.status(422).json({message: "recipe generation failed"})
//   });
// });

// router.put("/api/cats/:id", function(req, res) {
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

router.delete("/api/cats/:id", function(req, res) {
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

// Export routes for server.js to use.
module.exports = router;