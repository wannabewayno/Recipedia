const createRecipeForm = appendTarget => {
    const form = buildRecipeForm();

    $(appendTarget).html(form);

    //then we need to run all the initializations again.
}