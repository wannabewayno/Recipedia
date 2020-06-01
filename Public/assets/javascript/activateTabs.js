// activates Materialize JS for tabs, chips, input selects and dropdowns, Hides advanced search on start up.
$(document).ready(function(){
  $("#advanced-search").hide();
  $('.tabs').tabs();
  $('.chips').chips();
  $('select').formSelect();
  $('.dropdown-trigger').dropdown();
});
 
//expands search bar when 'advanced' is clicked
$('#advanced-search-button').click(function(){
  $('#advanced-search').toggle("slow");
});