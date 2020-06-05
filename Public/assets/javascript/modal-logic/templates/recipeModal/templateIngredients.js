const templateIngredients = ingredients => {
    let htmlIngredients = ``;
    ingredients.forEach(ingredient => {
        htmlIngredients += `<li class="ingredient">${ingredient.name} - ${ingredient.value}${ingredient.unit}</li>`                
    });
    
    return htmlIngredients;
}