// activates Materialize JS for tabs, chips, input selects and dropdowns, Hides advanced search on start up.
$(document).ready(function(){
  
  $('#show-more-btn').hide();
  $('#advanced-search').hide();
  
  //initialise tabs
  $('.tabs').tabs();

  // initializes chips
  $('.chips').chips();

  // Initialize exclude ingredient placeholder chips
  $('#exclude-ingredients').chips({
    data:[{tag:'Type ingredient'},{tag:'hit enter'}],
    onChipAdd:removeInitialChips
  });

  // activates multiple select drop downs
  $('select').formSelect();
});
 
//expands search bar when 'advanced' is clicked
$('#advanced-search-button').click(function(){
  $('#advanced-search').toggle("slow");
});


/** removeInitialChips()
 * Call back function for materialize onChipAdd option
 * Removes first two placeholder chips when user inputs their first chip
 */
const removeInitialChips = () => {
  const excludeIngredientChips = M.Chips.getInstance($('#exclude-ingredients'));
  chips = excludeIngredientChips.chipsData;
  chips.forEach((chip,index) => {
    if ( chip.tag === 'Type ingredient'|| chip.tag === 'hit enter' ) {
      excludeIngredientChips.deleteChip(0);
      excludeIngredientChips.deleteChip(0);
    }
  });
}