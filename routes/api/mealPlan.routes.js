// Import our models to use its database functions.
const db = require("../../models");

module.exports = app => {

    // when we add a meal to the meal planner
    app.patch('/api/mealplan:id',(req,res) => {

    });

    // when we remove a meal from the meal planner
    app.delete('/api/mealplan:id', function (req, res) {
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
    app.delete('/api/mealplan:id', (req,res) => {
        
    });
}