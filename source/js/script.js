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
    $('input[placeholder], textarea[placeholder]').placeholder();
});



$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  
  $("#topnav ul").localScroll();

  function onBoxcastReady(callback){
    if(onBoxcastReady.callback == undefined){
      onBoxcastReady.callback = callback;
    }
    if($(".boxcast-widget").length == 0){
      setTimeout(onBoxcastReady, 3000);
    } else {
      onBoxcastReady.callback.apply();
    }
  }

  $(function(){
    onBoxcastReady(function(){
      $(".broadcast-video img+p", ".boxcast-widget").remove();
    });
  })

});





















