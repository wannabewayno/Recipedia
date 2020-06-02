$(document).ready(function(){
    // activates select drop downs
  $('select').formSelect();

    // $('.select-wrapper').on('mousedown',function(event){
    // event.preventDefault();
    // })  

    

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

//TODO: FUNCITON:
//a function that displays the left over character count to the user on inputs that have a character count
$('.select-wrapper','#ingredient-unit').click(function(event){
    console.log(event);
});

// TODO: FUNCTION:
// create a function changes any add buttons to delete buttons when the add button is pressed
// ties in with dynamicallly creating step content!
// ok so this needs to be triggered with add step! so let's go
$('.add-ingredient-button').click(function(){

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
    const liEl = $('<li>').addClass('Valign-start browser-default')

    // create out ingredient
    const ingredientEl = $('<span>').addClass('saved-ingredient');
    ingredientEl.text(ingredient);

    // we need to add a delete button,
    const deleteBtn = $('<button>').addClass('remove-ingredient-button nude-button');
    // the delete icon
    const deleteIcon = $('<i>').addClass('small material-icons');
    deleteIcon.html('delete');

    //wrap our delete button over the icon
    deleteBtn.append(deleteIcon);

    //add everything to the list item
    liEl.append(ingredientEl);
    liEl.append(deleteBtn);

    //Add this back to the form.
    $('#ingredients').append(liEl);

    //Then clear the inputs
    $('#ingredient-name').val('');
    $('#ingredient-value').val('');
});

// TODO: FUNCTION:
// create a remove method when pressing a delete button
$('remove-ingredient-button').click(function(){
    
});

// TODO: FUNCTION:
// create a new field when pressing add button

// TODO: FUNCTION:
// for adding method steps, will need a counter that updates a new step when creating

//TODO: FUNCTION: 
// trigger spinner
// parse data into format we can add to db
// ajax post infomration to database
// show a success message!



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