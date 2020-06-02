$(document).ready(function() {

    // activates select drop downs
     $('select').formSelect();

    // activates charracter count on
    $('#create-description').characterCounter();

    $('.chips').chips();
    // Initialize exclude ingredient placeholder chips
    const initialChips = ['Type keyword','hit enter','e.g BBQ']
    const target = '#user-keywords'
    $(target).chips({
        data:initialChips.map(text => {return {tag:text}}),
        onChipAdd:removeInitialChips(target,initialChips)
    });
});


// this takes the ingredient from the inputs and adds it as a list item element for the user to see
// has a delete button also associated with it to remove at anytime.
$('.add-ingredient-button').click(function() {

    // due to a materialize css bug with chrome, take two clicks to activate the given selection
    // we hack this by triggering another click on the #ingredient-unit instance here
    $('.select-dropdown').trigger("click");

    // then we get the dropdown instance, everything else can be done with jQuery
    const ingredientUnit = M.FormSelect.getInstance($('#ingredient-unit'));
    
    // we need to grab information from all those boxes
    const name  = $('#ingredient-name').val();
    const value = $('#ingredient-value').val();
    const unit  = ingredientUnit.getSelectedValues()[0];

    //gaurd clause here, will be client side validation at some point
    if ( name === ""|| value === "" ) {
        return
    }

    // construct the ingredient
    const ingredient = `${name} x ${value}${unit}`;

    // create a new list item
    const liEl = $('<li>').addClass('Valign-start saved-ingredient')

    // create our ingredient
    const ingredientEl = $('<span>')
    ingredientEl.text(ingredient);

    const deleteBtn = createDeleteBtn();

    //add everything to the list item
    liEl.append(ingredientEl,deleteBtn);

    //Add this back to the form.
    $('#ingredients').append(liEl);

    //Then clear the inputs
    $('#ingredient-name').val('');
    $('#ingredient-value').val('');
});


//Adds steps from the text-area to the DOM for the user to see
$('.add-step-button').click(function(){

    //get the step the user defined
    const stepText = $('#add-step').val();
    //find out what step this is
    let stepCount = $('#add-step').data('count');

    // create a list item, title and body placeholder
    const liEl = $('<li>').addClass('saved-step');
    const pEl = $('<p>').addClass('step-body zero');
    const h6El = $('<h6>').addClass('step-title');
    const headEL = $('<head>').addClass('Valign-start');

    const deleteBtn = createDeleteBtn();
    
    pEl.text(stepText); // fill the body with the step text
    h6El.text(`Step ${stepCount}`); // fill the title with the step number

    headEL.append(h6El,deleteBtn)
    liEl.append(headEL,pEl);

    // add this to the steps list for the user to see their saved step
    $('#steps').append(liEl);

    $('#add-step').val('') // clear the input
    stepCount++ // increase the count

    //update the data attribute
    $('#add-step').data('count',`${stepCount}`);
    //update our placeholder
    $('#add-step-label').text(`Step ${stepCount}`);

});

// removes target ingredient when clicking the bin icon
$('#steps, #ingredients').on('click','.remove-button',function(event){
    event.stopPropagation();
    const item = $(event.currentTarget).parents('.saved-ingredient, .saved-step');
    console.log(item);
    item.remove();
});

//TODO: FUNCTION: 
// trigger spinner
// parse data into format we can add to db
// ajax post infomration to database
// show a success message!

const createDeleteBtn = () => {
    //create a delete button
    const deleteBtn = $('<button>').addClass('remove-button nude-button');
    deleteBtn.attr('type','button');

    // the delete icon
    const deleteIcon = $('<i>').addClass('small material-icons');
    deleteIcon.html('delete');

    //wrap our delete button over the icon
    deleteBtn.append(deleteIcon);

    return deleteBtn;
}

/*
    Prefilling Text Inputs
    If you are having trouble with the labels overlapping prefilled content, Try adding class="active" to the label.
    You can also call the function M.updateTextFields(); to reinitialize all the Materialize labels on the page if you are dynamically adding inputs.
*/

/*
    $(document).ready(function() {
        $('input#input_text, textarea#textarea2').characterCounter();
    });
*/

/*
    resize upon dynamicaly adding fields
    $('#textarea1').val('New Text');
    M.textareaAutoResize($('#textarea1'));
*/