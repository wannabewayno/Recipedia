const templateIngredients = ingredients => {
    const htmlIngredients = ``;
    ingredients.forEach(ingredient => {
        htmlIngredients += `<li class="ingredient">${ingredient.name} - ${ingredient.value}${ingredient.unit}</li>`                
    });
    
    return htmlIngredients;
}