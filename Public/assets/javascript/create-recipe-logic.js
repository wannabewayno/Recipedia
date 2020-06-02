$(document).ready(function(){
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

//TODO: FUNCITON:
//a function that displays the left over character count to the user on inputs that have a character count


// TODO: FUNCTION:
// create a function changes any add buttons to delete buttons when the add button is pressed

// TODO: FUNCTION:
// create a remove method when pressing a delete button

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