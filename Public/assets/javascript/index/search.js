

const search = async (query,type) => {
    console.log(`running search function`);

    let endPoint;
    endPoint = type === 'fridge'? "/api/fridge":"/api/recipes";

    // starts loading spinner
    const interval = spinner('#search-button');

    const params = await JSON.stringify(query)

    $.get(`${endPoint}/${params}`)
    .then( results => {
        //this comes from db
        console.log(results);

        const { recipeCardInfo, recipeInfo } = results;
        // * now we can push our recipeInfo into local storage, so when we pull up the modal
        // * we don't have to do another query and have the user wait a few/fraction-of seconds
        localStorage.setItem('searchResults',JSON.stringify(recipeInfo));

        // * we now pass the recipeCardInfo to render the recipe cards for the user to look at
        // * when they click on any of these cards, it will pull that recipe from local storage
        
        // clear the spinner when we're done
        clearSpinner(interval);

        if (!recipeCardInfo){
            return
        } else {
            renderResults(recipeCardInfo);
        }
       
        
    })
    
    const renderResults = recipeCardInfo => {
        recipeCardInfo.forEach(recipeCardObject => {
            const recipeThumbnail = createThumbnail(recipeCardObject);
            $('#search-results').append(recipeThumbnail)
        });
    }
    
}