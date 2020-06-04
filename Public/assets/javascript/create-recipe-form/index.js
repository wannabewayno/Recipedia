// a list of all function paths this file depends on to run.
const dependencies = [
    `create-recipe-form/addIngredient.js`,
    `create-recipe-form/addStep.js`,
    `create-recipe-form/createDeleteBtn.js`,
    `create-recipe-form/getSteps.js`,
    `create-recipe-form/getIngredients.js`,
    `create-recipe-form/getRecipeFormData.js`,
    `create-recipe-form/getChips.js`,
    `create-recipe-form/uploadImage.js`,
    `create-recipe-form/publishRecipe.js`,
    //------ files not in this directory ------
    `removeElement.js`,
    `getDropdownValues.js`
];

$(document).ready(function() {
    // Initializers
    // ==========================================================================

    //inserts scripts for every new function we create so that we don't have to.
    dependencies.forEach(dependency => {
        const script = `<script src="./assets/javascript/${dependency}"></script>`
        $(script).insertBefore('#index');
    });

    // activates select drop downs
     $('select').formSelect();

    // activates charracter count.
    $('#create-description').characterCounter();

    $('.chips').chips();
    // Initialize keyword placeholder chips
    const initialChips = ['Type keyword','hit enter','e.g BBQ']
    const target = '#create-keywords'
    $(target).chips({
        data:initialChips.map(text => {return {tag:text}}),
        onChipAdd:removeInitialChips(target,initialChips)
    });

    // event listeners
    //====================================================================

    // adds ingredient from input into the container '#ingredients'
    $('.add-ingredient-button').click( addIngredient );

    // adds cooking steps from input into the container '#steps'
    $('.add-step-button').click( addStep );

    // removes target ingredient when clicking the bin icon  
    removeElement('.remove-button','#ingredients','#steps');

    // sends form data to post route via publishRecipe
    $('#publish-button').click( publishRecipe );
    
    $('#image-file').on('change',uploadImage)

});


//TODO: FUNCTION:
// validation function/s


//TODO: FUNCTION:
// write a function that takes in an image, stores it in amazon s3, returns the href it's stored under.
const amazonS3 = () => {

}

//TODO: FUNCTION:
// probably find the ingredient, replace it with an input instance... get the data from the data forms.
// either modify the existing function for both cases... or create a special add case
// a way to edit an ingredient or element without having to delete the whole stack and start again
// in the case of steps, order is important, will need a re-order function or the like.