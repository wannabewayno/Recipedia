$(document).ready(function(){
    $('#back').hide();
});

// TODO: FUNCTION:
// scans shopping list to see if an entire recipe has been bought for and hides all those ingredients
// will be triggered by crossing off an item

// TODO: FUNCTION:
// logic that shows what reicpes to buy for
// this should interface with meal plan, we need a boolean status if a recipe has been bought for or not
// retrieves all recipes you need to buy for.
// if user manually adds a recipe this will be on the shopping list until it is bought for removed

//TODO: FUNCTION:
// manually adds a new item to the shopping list from the input at the top of the shopping list;
// will have check if the user has disclosed units or not, 
// probably need a consistency checker for solid or liquid to give everything in approproate units


$('#menu-button').click(function(){

    //find half the animation time
    const transitionCSS = $('.shopping-list-modal').css('transition');
    //Animation time is given in seconds so
    const animationTime = parseFloat(transitionCSS.slice(3,7))/2;

    //trigger animation
    $('.shopping-list-modal').toggleClass('flip');
    
    // We now trigger the change at half the animation time so the user won't see.
    setTimeout(() => {
        // re-flips content so we can read it :D
        $('#front,#back').toggle();
        $('#front, #back').toggleClass('flip');
        
        //swap button position so it's the same
        $('#menu-button, .close-button').toggleClass('top-right top-left')

        // set a new button icon
        const listButton = `<i class='small material-icons'>list</i>`
        const menuButton = `<i class='small material-icons'>tune</i>`
        const buttonText = $('#menu-button').text();
        if (buttonText === 'list') {
            $('#menu-button').html(menuButton)
        } else {
            $('#menu-button').html(listButton)
        }

    }, animationTime*1000);
})

//TODO: FUNCTION 
// any items on the list that have text-decoration:line-through will be removed from the list when the shopping list is opened again