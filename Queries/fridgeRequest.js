// ingredients list put in, unwanted ingredients list put in
// makes a query based on it
// reads the ingredients of the top most recipe
// adds the unwanted ones to the excluded ingredients recipe
// recalls the query, till the first one matches the ingredients, checks the rest and passes through the ones that match.
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");
const queryConditions = require("../Queries/queryRequests");

module.exports = function(ingredients) {
    let conditions = ingredients;
    let conditionsUnwanted = [];
    

    let queryLoop = function() {
        queryRequest = {
            ingredients: conditions,
            ingredientsUnwanted: conditionsUnwanted
        }
        db.Recipe.findAll({ 
            attributes: ["name", "ingredients", "servings", "instructions", "created_by", "tags"],
            // include: [
            //   db.User
            // ],
            where: queryConditions(queryRequest)
          }).then(function(data) {
              let unwantedIngredients = false;
              for (let i = 0; i < data[0].ingredients.length; i++) {
                    if (conditions.indexOf(data[0].ingredients[i]) === -1 && conditionsUnwanted.indexOf(data[0].ingredients[i]) === -1) {
                        conditionsUnwanted.push(data[0].ingredients[i]);
                        unwantedIngredients = true;
                    }
              }
              if (unwantedIngredients) {
                    let ans = queryLoop()
                    console.log(ans)
                    return ans;
              } else if (!unwantedIngredients) {
                  for (let i = 0; i < data; i++) {
                        for (let j = 0; j < data[i].ingredients.length; j++) {
                            if (conditions.indexOf(data[i].ingredients[j]) === -1) {
                                conditions = conditions.splice(i, 1);
                                i--;
                            }
                        }
                  }
              }
          })
    }
};
