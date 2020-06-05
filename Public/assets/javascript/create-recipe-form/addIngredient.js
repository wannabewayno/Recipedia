const addIngredient = () => {
    const ingredientName = document.querySelector('#ingredient-name');
    const ingredientValue = document.querySelector('#ingredient-value');
    const ingredientUnit = document.querySelector('#ingredient-unit');
    const ingredients = document.querySelector('#ingredients');

    // we need to grab information from all those boxes
    const name  = $(ingredientName).val();
    const value = $(ingredientValue).val();
    const unit  = getDropdownValues(ingredientUnit)[0]

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
    $(ingredients).append(liEl);

    //Then clear the inputs
    $(ingredientName).val('');
    $(ingredientValue).val('');

    //put the focus back to the name field
    $(ingredientName).get(0).focus();
}