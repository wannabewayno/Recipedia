$(document).ready(function() {

    // activates select drop downs
     $('select').formSelect();

    // activates charracter count on
    $('#create-description').characterCounter();

    $('.chips').chips();
    // Initialize keyword placeholder chips
    const initialChips = ['Type keyword','hit enter','e.g BBQ']
    const target = '#create-keywords'
    $(target).chips({
        data:initialChips.map(text => {return {tag:text}}),
        onChipAdd:removeInitialChips(target,initialChips)
    });
});


// this takes the ingredient from the inputs and adds it as a list item element for the user to see
// has a delete button also associated with it to remove at anytime.
$('.add-ingredient-button').click(addIngredient);

//Adds steps from the text-area to the DOM for the user to see
$('.add-step-button').click(addStep);

// removes target ingredient when clicking the bin icon
removeElement('.delete-btn')

//TODO: FUNCTION:
// function that parses data from the form in what-ever state it's in
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
    data.diets       = JSON.stringify(getDropdownvalues('#create-diet')) // could be multiple diets
    data.ingredients = JSON.stringify(getIngredients()); // get's ingredients and stringifies it ready for data storage
    data.steps       = JSON.stringify(getSteps()); // get's cooking steps and stringifies it, ready for data storage
}



//TODO: FUNCTION:
// validation function/s

//TODO: FUNCTION: publish recipe data.
const publish = () => {
    triggerSpinner();
    
    getRecipeFormData();

    $.POST();

    cancelSpinner();

    successMessage()
}


//TODO: FUNCTION:
// write a function that takes in an image, stores it in amazon s3, returns the href it's stored under.
const amazonS3 = () => {

}

//TODO: FUNCTION:
// a way to edit an ingredient or element without having to delete the whole stack and start again
// in the case of steps, order is important, will need a re-order function or the like.