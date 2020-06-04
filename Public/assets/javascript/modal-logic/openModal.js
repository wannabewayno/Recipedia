const openModal = async recipeInfo => {
    // we will need to json parse ingredients, steps, diets
    let { diets, ingredients, instructions } = recipeInfo;

    //JSON parse could be computationaly taxing, so better async this to be safe.
    dietTags = await JSON.parse(diets);
    ingredients = await JSON.parse(ingredients);
    method = await JSON.parse(instructions);

    const components = {};
    // the modal is made up of four major parts. 
    // the head, all singular information here
    components.head = templateHead(recipeInfo);
    // diet tags, could be multiple so we'll need to loop these components
    components.dietTags = templateDietTags(dietTags);
    // ingredients will be mulitple, so we'll need a loop
    components.ingredients = templateIngredients(ingredients);
    // method will be multiple again we'll beed a loop
    components.method = templateMethod(method);

    // we append all these components to their containers in the modal body
    const modal = constructModal(components);

    //append the modal to the page, cleverly at...
    $('#modal-goes-here').append(modal);
}

