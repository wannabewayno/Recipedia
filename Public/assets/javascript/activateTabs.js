// activates Materialize JS for tabs and chips. Hides advanced search on start up.
$(document).ready(function(){
    $("#advanced-search").hide();
    $('.tabs').tabs();
    $('.chips').chips();
});
 
//expands search bar when 'advanced' is clicked
$('#advanced-search-button').click(function(){
  $('#advanced-search').toggle("slow");
});