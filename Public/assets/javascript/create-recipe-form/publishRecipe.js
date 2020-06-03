const publishRecipe = () => {
    //triggerSpinner();
    
    const data = getRecipeFormData();

    $.post("/api/login", data)
    .then(/* do stuff here*/);

   // cancelSpinner();

    //successMessage()
}