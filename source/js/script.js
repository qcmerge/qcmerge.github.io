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
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });

  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }

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





















