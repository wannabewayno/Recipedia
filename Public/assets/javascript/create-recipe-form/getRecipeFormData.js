const getRecipeFormData = async () => {
    // data object placeholder
    const data = {};
    // first grab data that doesn't need to be formatted
    data.name = $('#create-title').val().trim();
    data.description = $('#create-description').val().trim();
    data.prep_time = parseInt($('#create-prep-time').val().trim());
    data.cook_time = parseInt($('#create-cook-time').val().trim());
    data.servings = parseInt($('#create-servings').val().trim());

    // // get the image the user uploads
    // const image = $('#image-file').prop('files')[0];
    // console.log(image);
    // data.image = image;

    //we'll run removeInitialChips in case the user didn't add any chips, this will clear the placeholder chips so we don't add those to the recipe
    removeInitialChips('#create-keywords',['Type keyword','hit enter','e.g BBQ'])();

    // then get the user's keywords, but only if there are any.
    const userKeywords = getChips('#create-keywords');
    const metaKeywords = data.title.split(' ');

    metaKeywords.push(...userKeywords);
    const keywords = await JSON.stringify(metaKeywords);
    data.tags = keywords;

    
    data.cuisine     = getDropdownValues('#create-cuisine')[0] // there will only be one cuisine
    data.diets       = await JSON.stringify(getDropdownValues('#create-diet')) // could be multiple diets
    data.ingredients = await JSON.stringify(getIngredients()); // get's ingredients and stringifies it ready for data storage
    data.instructions       = await JSON.stringify(getSteps()); // get's cooking steps and stringifies it, ready for data storage

    return data;
}
