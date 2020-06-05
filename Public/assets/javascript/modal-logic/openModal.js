const openModal = async recipeInfo => {
    console.log(recipeInfo);
    // we will need to json parse ingredients, steps, diets
    const { diets, ingredients, instructions } = await recipeInfo;

    //JSON parse could be computationaly taxing, so better async this to be safe.
    const dietTags = await JSON.parse(diets);
    const ingredientArray = await JSON.parse(ingredients);
    const method = await JSON.parse(instructions);

    const components = {};
    // the modal is made up of four major parts. 
    // the head, all singular information here
    components.head = templateHead(recipeInfo);
    // diet tags, could be multiple so we'll need to loop these components
    components.dietTags = templateDietTags(dietTags);
    // ingredients will be mulitple, so we'll need a loop
    components.ingredients = templateIngredients(ingredientArray);
    // method will be multiple again we'll beed a loop
    components.method = templateMethod(method);

    // we append all these components to their containers in the modal body
    const modal = constructModal(components);

    //append the modal to the page, cleverly at...
    $('#modal-goes-here').append(modal);

    renderTimeBar(recipeInfo.cookTime,recipeInfo.prepTime)();

    return $(window).resize(function(){
        renderTimeBar(recipeInfo.cookTime,recipeInfo.prepTime)();
    });
}
