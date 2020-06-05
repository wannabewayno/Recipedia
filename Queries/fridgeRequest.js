// ingredients list put in, unwanted ingredients list put in
// makes a query based on it
// reads the ingredients of the top most recipe
// adds the unwanted ones to the excluded ingredients recipe
// recalls the query, till the first one matches the ingredients, checks the rest and passes through the ones that match.
const db = require("../models");
const queryConditions = require("../Queries/queryRequests");

module.exports = queryLoop = async (conditions, conditionsUnwanted) => {

    // sets the request for the queryconditions folder to handle
    queryRequest = {
        ingredients: conditions,
        ingredientsUnwanted: conditionsUnwanted
    }
    // declares variable to be used before recursion begins
    let finalResult;
    return await db.Recipe.findAll({
        // include: [
        //   db.User
        // ],
        where: queryConditions(queryRequest)
        }).then(async function(data) {

            let unwantedIngredients = false;
            if (data.length != 0) {
                for (let i = 0; i < data[0].ingredients.length; i++) {
                    if (conditions.indexOf(data[0].ingredients[i]) === -1 && conditionsUnwanted.indexOf(data[0].ingredients[i]) === -1) {
                        conditionsUnwanted.push(data[0].ingredients[i]);
                        unwantedIngredients = true;
                    }
                }
            }

            if (unwantedIngredients) {
                // Loop is here
                return promiseData = new Promise ((resolve) => { 
                    resolve(queryLoop(conditions, conditionsUnwanted));
                }).then(results => {
                    return results;
                });;
            } else if (!unwantedIngredients) {
                for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < data[i].ingredients.length; j++) {
                        if (conditions.indexOf(data[i].ingredients[j]) === -1) {
                            data.splice(i, 1);
                            i--
                            break;
                        };
                    };
                };

                finalResult = data;
                return data;
            };
        });
};
