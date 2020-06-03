const getRecipeFormData = () => {
    // data object placeholder
    const data = {};
    // first grab data that doesn't need to be formatted
    data.title = $('#create-title').val().trim();
    data.description = $('#create-description').val().trim();
    data.prepTime = parseInt($('#create-prep-time').val().trim());
    data.cookTime = parseInt($('#create-cook-time').val().trim());
    data.servings = parseInt($('#create-servings').val().trim());

    // get the image the user uploads
    const image = $('#create-image').val()
    //send this to amazons3
    data.imgeURL = amazonS3(image);

    //we'll run removeInitialChips in case the user didn't add any chips, this will clear the placeholder chips so we don't add those to the recipe
    removeInitialChips('#create-keywords',['Type keyword','hit enter','e.g BBQ']);
    // then get the user's keywords, but only if there are any.
    const keywords = getChips('#create-keywords');
    keywords.length === 0 ? null : data.keywords = keywords; 

    
    data.cuisine     = getDropdownValues('#create-cuisine')[0] // there will only be one cuisine
    data.diets       = JSON.stringify(getDropdownValues('#create-diet')) // could be multiple diets
    data.ingredients = JSON.stringify(getIngredients()); // get's ingredients and stringifies it ready for data storage
    data.steps       = JSON.stringify(getSteps()); // get's cooking steps and stringifies it, ready for data storage
}