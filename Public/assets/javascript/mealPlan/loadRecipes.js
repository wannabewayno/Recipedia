/**
 * finds all recipesIDs in the thumbnail data and performs an ajax call for recipe data
 * loads recipes into localstorage for fast access to recipe data;
 */
const loadRecipes = async () => {
    recipeIDs = [];
    await $('.recipe-card').each(function(index){
        const id = $(this).data('id');
        recipeIDs.push(id);
    });
    console.log(recipeIDs);
    $.get('/api/recipesById', 
    { data:recipeIDs })
    .then(data => {
        console.log('helloWorld');
        const { recipeInfo } = data;
        localStorage.setItem('searchResults',JSON.stringify(recipeInfo));
    })
    .catch(error => console.log('trouble loading recipes at loadRecipes'));
}