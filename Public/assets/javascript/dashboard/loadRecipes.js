/**
 * finds all recipesIDs in the thumbnail data and performs an ajax call for recipe data
 * loads recipes into localstorage for fast access to recipe data;
 */
const loadRecipes = () => {
    recipeIDs = [];
    $('.recipe-card').each(function(index){
        const id = $(this).data('id');
        recipeIDs.push(id);
    });
    $.get('/api/recipeById', 
    {
        data:{recipeIDs}
    })
    .then(data => {
        localStorage.setItem('searchResults',JSON.stringify(data));
    })
    .catch(error => console.log('trouble loading recipes at loadRecipes'));
}