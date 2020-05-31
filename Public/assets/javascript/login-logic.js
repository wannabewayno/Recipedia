// DOM manipulation logic for login.html
$(document).ready(function(){
    $('#sign-up').hide();
})




// shows the sign-up drop down and hides the sign-in
$('#join-btn').click(function(){

    //shows sign-up form
    $('#sign-up').toggle("slow");

    //hides sign-in form
    $('.sign-in').toggle();
    
    // set a new button text
    let buttonText = $('#join-btn').text();
    const dropDown  = `<i class="material-icons right">arrow_drop_down</i>Join right now`;
    const dropUp    = `<i class="material-icons right">arrow_drop_up</i>Actually... no thanks`;
    //changes join-btn text
    if (buttonText.indexOf("Join right now") !== -1) {
        $('#join-btn').html(dropUp);
    } else {
        $('#join-btn').html(dropDown);
    }
});