// a list of all function paths this file depends on to run.
const dependencies = [
    `members/createEditForm.js`,
    `members/createListItem.js`,
    `members/patch.js`,
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

    $('#user-preferences, #account-settings').on('click','.edit-btn',function(event) {
        const siblings = $(this).parent().siblings()[0];
        const value = $(siblings).children('.data').text()
        const dataLabel = $(siblings).children('.label').text()
        const field = $(siblings).children('.label').data('field');
        const editForm = createEditForm(value,dataLabel,field);
        const appendTarget = $(this).parents('li');
        appendTarget.html(editForm);
    });

    $('#user-preferences, #account-settings').on('click','.undo-btn',function(event){
        const appendTarget = $(this).parents('li');
        const classes = appendTarget.attr('class');
        const { value, dataLabel, field } = $(this).data();
        const listItem = createListItem(value,dataLabel,field,classes);
        appendTarget.html(listItem);
    });

    //this is for patching account information
    $('#user-preferences, #account-settings').on('click','.patch-button',function(event){
        $(this).prop('disabled', true).addClass('.disabled');
        const input = $(this).parent().siblings().children('.editInput');
        const value = input.val();
        const field = input.data('field');
        patch(field,value);
    });

    // this is for deleting recipes
    $('#authored-recipes').on("click",".remove-recipe-btn",function(){
        const recipeID = $(this).parent().siblings().children('.data').data('id');
        deleteRecipe(recipeID);
    });

});