/** 
  example of a request :: 
  queryRequest = {
    author: "nick",
    name: "burger",
    ingredients: ["carrot"],
    ingredientsUnwanted: ["strawberries", "flour"],
    tags: ["gluten free"],
    cuisine: "italian",
    diet: "keto"
  }
  perfectly okay to omit fields.
*/ 

const sequelize = require("sequelize");

// this function takes in the object of requests and sorts through them one at a time, to add them to the query.

const requestHandler = (req) => {
    let query = "SELECT recipes.name, recipes.ingredients, recipes.servings, recipes.cuisine, recipes.diets, recipes.instructions, recipes.tags, user.name FROM recipedia.recipes LEFT JOIN user ON recipes.created_by = user.id WHERE"
    // author
    if ( req.author != null ) {
        query += " user.name LIKE '" + req.author + "' AND";
    }
    // name
    if ( req.name != null ) {
        query += " recipes.name LIKE '" + req.name + "' AND";
    }
    // ingredients
    if ( req.ingredients != null ) {
        for ( i = 0; i < req.ingredients.length; i++) {
            query += " recipes.ingredients LIKE '%" + req.ingredients[i] + "%' AND";
        }
    }
    // unwanted Ingredients
    if ( req.ingredientsUnwanted != null ) {
        for ( i = 0; i < req.ingredientsUnwanted.length; i++) {
            query += " recipes.ingredients NOT LIKE '%" + req.ingredientsUnwanted[i] + "%' AND";
        }
    }
    // tags
    if ( req.tags != null ) {
        for ( i = 0; i < req.tags.length; i++) {
            query += " recipes.tags LIKE '%" + req.tags[i] + "%' AND";
        }
    }
    // cuisine
    if ( req.cuisine != null ) {
        query += " recipes.cuisine LIKE '" + req.cuisine + "' AND";
    }
    // diet
    if ( req.diet != null ) {
        query += " recipes.diets LIKE '" + req.diet + "'"
    }
    // removes the final "AND" if it exists.
    if ( query.slice( query.length-3, query.length ) === "AND") {
        query = query.slice( 0, query.length-3 );
    }
    if (query.slice( query.length-5, query.length ) === "WHERE") {
     query = query.slice( 0, query.length-5 )
    }

    const results = await sequelize.query(query, {type: sequelize.SELECT});

    return(results);
}

module.exports = {requestHandler};

// requestHandler(queryRequest);