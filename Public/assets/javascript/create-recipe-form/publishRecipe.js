const publishRecipe = () => {
    //triggerSpinner();
    
    const data = getRecipeFormData();
    console.log(data);
    $.post("/api/recipes", data)
    .then(response => console.log(response));

   // cancelSpinner();

    //successMessage()
}