const getDropdownValues = target => {
    // due to a materialize css bug with chrome, take two clicks to activate the given selection
    // we hack this by triggering another click on the #ingredient-unit instance here
    $('.select-dropdown').trigger("click");

    // then we get the dropdown instance, everything else can be done with jQuery
    const dropdown = M.FormSelect.getInstance($(target));
    
    const dropdownValues  = dropdown.getSelectedValues();

    return dropdownValues;
}
