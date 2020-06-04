const getIngredients = () => {
    const ingredients = [];
    $("#ingredients").find(".saved-data").each(function(){
        ingredients.push($(this).data());
    });
    return ingredients;
}