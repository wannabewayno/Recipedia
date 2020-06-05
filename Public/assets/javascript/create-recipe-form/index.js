$(document).ready(function() {
    // Initializers
    // ==========================================================================

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
    $('#modal-goes-here').on('click','.add-ingredient-button', function() {
        addIngredient()
    });

    // adds cooking steps from input into the container '#steps'
    $('#modal-goes-here').on('click','.add-step-button', function() {
        addStep()
    });

    // removes target ingredient when clicking the bin icon  
    removeElement('.remove-button','.saved-data',['#ingredients','#steps'],noScroll);

    // sends form data to post route via publishRecipe
    $('#modal-goes-here').on('click','#publish-button', function() {
        publishRecipe()
    });
    
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