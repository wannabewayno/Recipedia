$(document).ready(function(){

// event listeners
// ===============================================================================
    $('#modal-goes-here').on('click', '.favourite-btn',async function() {

        const favouriteBtn = $(this);

        //first we disable the button to stop spamming the server with requests
        favouriteBtn.prop('disabled', true);

        // the favourite button stores the state and recipeID for us. 
        const { recipeId, favourited } = favouriteBtn.data();
        
        // favourited is a boolean state 
        // favourite button also doubles as an unfavourite button. controlled by this state
        // if true, the button will have a different appeareance by adding a css class
        // ultimately though the state is controlled by this data object

        // so if our recipe is favouited we need to remove from favourites
        if (favourited) {

            const AJAX = await removeFromFavourites(recipeId);
            AJAX
            .then(response => {
                console.log("success, recipe removed from favourites");
                
                // we now change the button to favourite with a data change and a css class
                favouriteBtn.data({'favourited':false}).toggleClass('unfavourite');

                // great we can now re-enable the button
                favouriteBtn.prop('diabled',false);
            })
            .catch(error => console.log("Oh no something went wrong and we couldn't remove this recipe from favourites"));

        } else { // otherwise add to favourites

            const AJAX = await addToFavourites(recipeId);
            AJAX
            .then(response =>{
                console.log("success, recipe added to favourites");

                // we now change the button to unfavourite with a data change and a css class
                favouriteBtn.data({'favourited':true}).toggleClass('unfavourite');

                // great we can now re-enable the button
                favouriteBtn.prop('diabled',false);
            })
            .catch(error => console.log("Oh no something went wrong and we couldn't add to favourites :("));
        }
    });
});


/**
 * @param {String} recipeID - the db recipe-id to add to favourites 
 */
const addToFavourites = recipeID => {
    const AJAX = $.post('/api/favourite',{
        data:{ "recipeID":recipeID }
    })

   return AJAX;
}


/**
 * @param {String} recipeID - the db recipe-id to remove from favourites
 */
const removeFromFavourites = recipeID => {
    const AJAX = $.ajax('/api/favourite',{
        method:'DELETE',
        data:{ "recipeID":recipeID }
    });

   return AJAX;
}