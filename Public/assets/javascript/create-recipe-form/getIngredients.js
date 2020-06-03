const getIngredients = () => {
    const ingredients = [];
    $("#ingredients").find(".saved-ingredient").each(function(){
        ingredients.push($(this).data());
    });
 
    return ingredients;
}