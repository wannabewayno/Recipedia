

const search = query => {
    console.log(query);
    
    console.log(`running search function`);
    // starts loading spinner
    const interval = spinner('#search-button');

    $.get('/api/recipes',{
        data:query
    })
    .then( results => {
        console.log(results);
        // * here we need to make two copies of the information
        // * 1.) an array of objects with keys imageURL, title and recipe id
        // * 2.) a nesteed object that has contains the full recipe (all information) with recipe id as the key
        recipeCardInfo = {};
        recipeInfo     = {};

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
        
        // * now we can push our recipeInfo into local storage, so when we pull up the modal
        // * we don't have to do another query and have the user wait a few/fraction-of seconds
        localstorage.setItem('searchResults',JSON.stringify(recipeInfo));

        // * we now pass the recipeCardInfo to render the recipe cards for the user to look at
        // * when they click on any of these cards, it will pull that recipe from local storage
        renderResults(recipeCardInfo);

        // clear the spinner when we're done
        clearSpinner(interval);
    })
    
    const renderResults = recipeCardInfo => {
        recipeCardInfo.forEach(recipeCardObject => {
            const recipeThumbnail = createThumbnail(recipeCardObject);
            $('#search-results').append(recipeThumbnail)
        });
    }
    
}