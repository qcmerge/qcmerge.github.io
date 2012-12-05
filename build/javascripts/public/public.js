(function() {

  $(function() {
    if (!("placeholder" in document.createElement("input"))) {
      $("input[placeholder]").each(function() {
        var val;
        val = $(this).attr("placeholder");
        if (this.value === "") {
          this.value = val;
        }
        return $(this).focus(function() {
          if (this.value === val) {
            return this.value = "";
          }
        }).blur(function() {
          if ($.trim(this.value) === "") {
            return this.value = val;
          }
        });
      });
    }
    $("form").submit(function() {
      return $(this).find("input[placeholder]").each(function() {
        if (this.value === $(this).attr("placeholder")) {
          return this.value = "";
        }
      });
    });
    return $('ul.sortable').sortable({
      handle: 'i.icon-move',
      appendTo: 'body',
      helper: 'clone'
    });
  });

}).call(this);
