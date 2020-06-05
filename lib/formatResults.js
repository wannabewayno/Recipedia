const formatResults = results => {
    // * here we need to make two copies of the information
    // * 1.) an array of objects with keys imageURL, title and recipe id
    // * 2.) a nesteed object that has contains the full recipe (all information) with recipe id as the key
    const recipeCardInfo = [];
    const recipeInfo     = {};

    // * assume results come back in an array for all results and re-structure the information
    results.forEach(recipe => {
        recipeCardInfo.push(
            {
                imageURL: recipe.image,
                title: recipe.name,
                recipeID: recipe.id,
            }
        )

        recipeInfo[recipe.id] = recipe;
    })

    // pass back an object
    const formattedResults = {}
    
    //assign keys for de-structuring on the front end
    formattedResults.recipeCardInfo = recipeCardInfo;
    formattedResults.recipeInfo = recipeInfo;

    return formattedResults;
}

module.exports = formatResults;