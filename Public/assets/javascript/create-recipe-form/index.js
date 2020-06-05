$(document).ready(function() {
    // Initializers
    // ==========================================================================

    formInitializers();

    // event listeners
    //====================================================================

    // adds ingredient from input into the container '#ingredients'
    $('.add-ingredient-button').click( addIngredient );

    // adds cooking steps from input into the container '#steps'
    $('.add-step-button').click( addStep );

    // removes target ingredient when clicking the bin icon  
    removeElement('.remove-button','.saved-data',['#ingredients','#steps'],noScroll);

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