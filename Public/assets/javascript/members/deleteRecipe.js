const deleteRecipe = recipeID => {

        $.ajax(`/api/recipe/${recipeID}`, {
                type: "DELETE"
        })
        .then(() => {
            console.log("deleted recipe");
            // Reload the page to get the updated list
            location.reload();
        })
        .catch(error => console.log("hmmm... unable delete the recipe from the database"))
}