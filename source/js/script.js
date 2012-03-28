/* Author: Tate Lucas

*/

// Show/Hide top link

$(window).bind('scroll', function(){
    if($(this).scrollTop() > 200) {
        $("#message a").fadeIn();
    } else {
        $("#message a").fadeOut();
    }
});
$(document).ready(function(){        
    $("#message a").hide();
});



$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  
  $("#topnav ul").localScroll();

});





















