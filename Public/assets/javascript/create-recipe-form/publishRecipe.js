const publishRecipe = async (uuidKey, downloadPreSignedUrl) => {
    //triggerSpinner();
    
    const data = await getRecipeFormData();
    //add the image url and access key into the data stream;
    data.image = downloadPreSignedUrl;
    data.imageKey = uuidKey;

    console.log(data);
    $.post("/api/recipes", data)
    .then(response => console.log(response))
    .catch(error => console.log(error))

    //cancelSpinner();

    //successMessage()
}