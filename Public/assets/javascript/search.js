// if the magnifying glass is clicked, triggers search function
$('.fa-search').click(function() {

});

// hitting enter in the search bar, triggers search function
$('#search-query').keypress(function(event) {
    if(event.which === 13) {
        console.log(`running search function`);
    }
});

const search = query => {

}