// This will open the recipe modal when clicked
$('.recipe-card').on('click',function(event){
    
    // Get the recipe ID from the data attribute
    const id = $(event.currentTarget).data('id');

    // get 
    const recipe = localStorage.getItem(id);
});