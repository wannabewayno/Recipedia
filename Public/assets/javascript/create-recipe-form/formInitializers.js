/**
 * this function is configured to add initializers for createRecipeForm;
 */
const formInitializers = () => {
return () => {
        // Add more initializers as needed :D

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