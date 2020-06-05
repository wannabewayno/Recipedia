// ingredients list put in, unwanted ingredients list put in
// makes a query based on it
// reads the ingredients of the top most recipe
// adds the unwanted ones to the excluded ingredients recipe
// recalls the query, till the first one matches the ingredients, checks the rest and passes through the ones that match.

module.exports = function(ingredients) {
    let conditions = ingredients;
    let conditionsUnwanted = [];
    let Sequelize = require("sequelize");
    let Op = Sequelize.Op;

    let queryLoop = () => {
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
              data = JSON.parse(data)
              let unwantedIngredients = false;
              for (let i = 0; i < data[0]; i++) {
                    if (ing.indexOf(data[i]) === -1 && conditionsUnwanted.indexOf(data[i] === -1)) {
                        conditionsUnwanted.append(data[i]);
                        unwantedIngredients = true;
                    }
              }
              if (unwantedIngredients) {
                  queryLoop()
              } else if ()
          })
    }

    // ingredients
    if (req.ingredients != null) {
        for (let i = 0; i < req.ingredients.length; i++) {
            conditions.push({
                ingredients: { [Op.substring]: req.ingredients[i] }
            })
        }
        for (let i = 0; i < ingredientsUnwanted.length; i++) {
            conditions.push({
                // need to use this method due to the way sequelize handles JSON requests 
                ingredients: Sequelize.where(Sequelize.fn('', Sequelize.col('ingredients')), ' NOT LIKE', '%' + req.ingredientsUnwanted[i] + '%')
            })
        }
    }

return conditions;
};
