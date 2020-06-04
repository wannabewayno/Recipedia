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
  let target = '#exclude-ingredients'
  $(target).chips({
    data:initialChips.map(text => {return {tag:text}}),
    onChipAdd:removeInitialChips(target,initialChips)
  });

  target = '#in-my-fridge'
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
    const pos1 = getHeight();
    $('#advanced-search').toggle("slow",function(){
      scrollToView(pos1);
    });
    
  //   setTimeout(() => {
  //     const pos2 = getHeight();
  //     const difference = pos2-pos1;
  //     console.log(difference);
  //     window.scrollBy(0, difference);
  //   }, 600);
  });
    
  // if the magnifying glass is clicked, triggers search function
  $('#search-button').click(function(event) {
      const query = getQueries();
      search(query)
  });

  // hitting enter in the search bar, triggers search function
  $('#search-query').keypress(function(event) {
    if(event.which === 13) {
        event.preventDefault();
        console.log('pressed enter key');
        const query = getQueries();
        search(query);
    }
  });

  $('#search-results').on('click','.recipe-card',function(event){
    console.log("hello-world");
  });



});
 


//TODO: FUNCTION:
// write a function that auto scrolls by the height of the tab box when a tab is pressed. 
