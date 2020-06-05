const formatResults = require('./../../lib/formatResults');
// Import our models to use its database functions.
const db = require("../../models");

// import the queryConditions to use as a condition generator
const queryConditions = require("../../Queries/queryRequests");
const fridge = require("../../Queries/fridgeRequest");

module.exports = app => {

  // Create all our routes and set up logic within those routes where required.
  app.get("/api/recipes/:json", function (req, res) {
    console.log(req.params.json);
    req.body = JSON.parse(req.params.json)

    // sets parameters
    queryRequest = {
      // author: req.body.author, // need to join the tables first for this to work.
      name: req.body.name,
      ingredients: req.body.ingredients,
      excludeIngredients: req.body.excludeIngredients ,
      tags: req.body.tags,
      cuisines: req.body.cuisines,
      diets: req.body.diets
    }
    console.log("here!")

    db.Recipe.findAll({
      // include: [
      //   db.User
      // ],
      where: queryConditions(queryRequest)
    }).then(function (results) {
      data = formatResults(results);
      console.log(data)
      res.json({
        data: data
      })
    })

  });


  app.get("/api/fridge/:json", async function (req, res) {
    // should send reqs through in the body.
    req.body = JSON.parse(req.params.json);
    console.log(req.body);
    if (req.body.ingredients != null) {
      ingredients = req.body.ingredients;
      
      //declares variables
      let conditions = ingredients;
      let conditionsUnwanted = [];

      let newdata;
      await fridge(conditions, conditionsUnwanted).then(results => {
        newdata = formatResults(results);
      });
      console.log("51")
      res.json({
        data: newdata
      });
    } else {
      // in case req.body.ingredients is null
      res.json({
        data: ["error: no parameters"]
      })
    };
  });



  //this route simply gets any recipe by the requested id and sends it back to the front end

  app.get("/api/recipesById/:id", (req,res) => {
    console.log(req.params);
    req.body = JSON.parse(req.params);
    console.log(req.body);
    
    //query request
    db.Recipe.findAll({
      // include: [
      //   db.User
      // ],
      where: [{ id: req.body.id }]
    }).then(function (results) {
      let data = formatResults(results)
      res.json(data);
    })
  });

 app.post("/api/recipes", function (req, res) {
    console.log(req.body);
    //TODO: do database stuff here to add a recipe
    // let wayne know how to change the keys in req.body to help you out here

    db.Recipe.create(
      { 
        name: req.body.name,
        description: req.body.description,
        prep_time: req.body.prep_time,
        cook_time: req.body.cook_time,
        servings: req.body.servings,
        tags: req.body.tags,
        cuisine: req.body.cuisine,
        diets: req.body.diets,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        created_by: 1, // currently only one user
        // image: "1234.com" 
      }).then(newrecipe => {
      console.log(object);
      res.json({ data: newrecipe });
    }).catch(error => {
      res.status(422).json({ message: "recipe generation failed" })
    });
  });

 app.delete("/api/recipes/:id", function (req, res) {
    // remove the recipe with this id;
    const recipeID = req.params.id;

    db.Recipe.destroy({
      where: {
        id: recipeID
      }
    }).then(() => {
      console.log("Recipe deleted");
    });


    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
};

