const patch = (field, value) => {
    $.ajax("/api/user",{
        type:"PATCH",
        data: {
            field:field,
            value:value 
        }
    })
    .then(response => {
        console.log(response)
        // Reload the page to get the updated list
        // location.reload();
    })
    .fail(error => console.log("whoops couldn't update the given field"))
}