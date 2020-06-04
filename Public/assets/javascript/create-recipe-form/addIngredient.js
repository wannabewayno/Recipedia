const addIngredient = () => {
    // we need to grab information from all those boxes
    const name  = $('#ingredient-name').val();
    const value = $('#ingredient-value').val();
    const unit  = getDropdownValues('#ingredient-unit')[0]

    //gaurd clause here, will be client side validation at some point
    if ( name === ""|| value === "" ) {
        return
    }

    // construct the ingredient
    const ingredient = `${name} x ${value}${unit}`;

    // create a new list item
    const liEl = $('<li>').addClass('Valign-start saved-data').data({name:name,value:value,unit:unit})

    // create our ingredient
    const ingredientEl = $('<span>').text(ingredient);

    //create a deleteBtn
    const deleteBtn = createDeleteBtn();

    //add everything to the list item
    liEl.append(ingredientEl,deleteBtn);

    //Add this back to the form.
    $('#ingredients').append(liEl);

    //Then clear the inputs
    $('#ingredient-name,#ingredient-value').val('');

    //put the focus back to the name field
    $('#ingredient-name').get(0).focus();
}