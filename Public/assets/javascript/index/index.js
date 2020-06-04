// activates Materialize JS for tabs, chips, input selects and dropdowns, Hides advanced search on start up.
$(document).ready(function(){
  // initializers
  // ============================================================================
  $('#show-more-btn').hide();
  $('#advanced-search').hide();
  
  //initialise tabs
  $('.tabs').tabs();

  // initializes chips
  $('.chips').chips();

  // Initialize exclude ingredient placeholder chips
  const initialChips = ['Type ingredient','hit enter']
  const target = '#exclude-ingredients'
  $(target).chips({
    data:initialChips.map(text => {return {tag:text}}),
    onChipAdd:removeInitialChips(target,initialChips)
  });

  // activates multiple select drop downs
  $('select').formSelect();

  // event listeners
  // ============================================================================

  //expands search bar when 'advanced' is clicked
  $('#advanced-search-button').click(function(){
    $('#advanced-search').toggle("slow");
  });


});
 


//TODO: FUNCTION:
// write a function that auto scrolls by the height of the tab box when a tab is pressed. 


