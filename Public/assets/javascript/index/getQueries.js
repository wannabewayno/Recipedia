const getQueries = type => {
    const searchData = {};
    if (type === 'fridge') {

        // removes placeholder chips if the user doesn't remove them;
        removeInitialChips('#in-my-fridge',['Type ingredient','hit enter'])();
        searchData.ingredients = getChips('#in-my-fridge').map(keyword => keyword.trim().toLowerCase());

    } else {

        searchData.tags = $('#search-query').val().split(' ').map(keyword => keyword.trim().toLowerCase())
        searchData.cuisines = getDropdownValues('#cuisine');
        searchData.diets = getDropdownValues('#diet');

        // removes placeholder chips if the user doesn't remove them;
        removeInitialChips('#exclude-ingredients',['Type ingredient','hit enter'])();
        searchData.excludeIngredients =  getChips('#exclude-ingredients').map(keyword => keyword.trim().toLowerCase());
    }
    
    return searchData;
}