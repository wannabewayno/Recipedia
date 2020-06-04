// a list of all function paths this file depends on to run.
const dependencies = [
    `members/createEditForm.js`,
    //------ files not in this directory ------
    `getDropdownValues.js`
];

$(document).ready(function() {
    // Initializers
    // ==========================================================================

    //inserts scripts for every new function we create so that we don't have to.
    dependencies.forEach(dependency => {
        const script = `<script src="./assets/javascript/${dependency}"></script>`
        $(script).insertBefore('#index');
    });

    $('#account-settings, #user-preferences').hide();

    // event listeners
    //===========================================================================
    $('#dropdown-preferences-btn').on('click',function(event){
        $('#user-preferences').toggle("slow");
    });

    $('#dropdown-account-btn').on('click',function(event){
        $('#account-settings').toggle("slow");
    });

    $('.edit-btn').on('click',function(event) {
        const siblings = $(event.currentTarget).siblings()[0];
        console.log(siblings);
        const value = $(siblings).children('.data').text()
        const dataLabel = $(siblings).children('.label').text()
        const editForm = createEditForm(value,dataLabel);
        const appendTarget = $(event.currentTarget).parents('li');
        appendTarget.html(editForm);
    });
})