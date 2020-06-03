// a list of all file names this depends on to run.
const dependencies = [
    `create-recipe-form/addIngredient.js`,
    `create-recipe-form/addStep.js`,
    `create-recipe-form/createDeleteBtn.js`,
    `create-recipe-form/getSteps.js`,
    `create-recipe-form/getIngredients.js`,
    `create-recipe-form/getRecipeFormData.js`,
    `create-recipe-form/getChips.js`,
    //------ files not in this directory ------
    `removeElement.js`,
    `getDropdownValues.js`
];

$(document).ready(function() {
    //inserts scripts for every new function we create so that we don't have to.
    dependencies.forEach(dependency => {
        const script = `<script src="./assets/javascript/${dependency}"></script>`
        $(script).insertBefore('#index');
    });

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

    // adds ingredient from input into the container '#ingredients'
    $('.add-ingredient-button').click(addIngredient);

    // adds cooking steps from input into the container '#steps'
    $('.add-step-button').click(addStep);

    // removes target ingredient when clicking the bin icon  
    removeElement('.remove-button','#ingredients','#steps');

});


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