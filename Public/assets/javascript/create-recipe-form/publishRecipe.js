const publishRecipe = async () => {
    //triggerSpinner();
    
    const data = await getRecipeFormData();
    console.log(data);
    $.post("/api/recipes", data)
    .then(response => console.log(response))
    .catch(error => console.log(error))

   // cancelSpinner();

    //successMessage()
}