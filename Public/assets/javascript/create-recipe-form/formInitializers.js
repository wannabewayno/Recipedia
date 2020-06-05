/**
 * this function is configured to add initializers for createRecipeForm;
 */
const formInitializers = (selector) => {
    console.log('is this firing?');
    if (selector) { // the selector achors the tags to the DOM after it's been dynamically inserted

        return () => {
            // Add more initializers as needed :D
            console.log('------------- modal statement');
            console.log(`${selector} > select`);
            // activates select drop downs
            $(selector).children('select').each(function(){
                console.log('-------------  formSelect');
                $(this).formSelect();
            });

            const dietSelector = document.getElementById('create-diet');
            const cuisineSelector = document.getElementById('create-cuisine');
            const description = document.getElementById('create-description');
            const chips = document.getElementsByClassName('chips');
            const initialChipsDiv = document.getElementById('create-keywords');

            $(dietSelector).formSelect();
            $(cuisineSelector).formSelect();
            $(description).characterCounter();
            $(chips).characterCounter();

            // Initialize keyword placeholder chips
            const initialChips = ['Type keyword','hit enter','e.g BBQ']
            const target = '#create-keywords'
            $(initialChipsDiv).chips({
                data:initialChips.map(text => {return {tag:text}}),
                onChipAdd:removeInitialChips(target,initialChips)
            });
        }

    } else {

        return () => {
            // Add more initializers as needed :D
            console.log('-------------- else statement');
            // activates select drop downs
            $('select').formSelect();
    
            // activates charracter count.
            $('#create-description').characterCounter();
    
            $('.chips').chips();
            // Initialize keyword placeholder chips
            const initialChips = ['Type keyword','hit enter','e.g BBQ']
            const target = '#create-keywords'
            $(target).chips({
                data:initialChips.map(text => {return {tag:text}}),
                onChipAdd:removeInitialChips(target,initialChips)
            });
        }
    }
}