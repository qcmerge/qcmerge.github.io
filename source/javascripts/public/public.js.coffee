$ ->

    # $('.modal-btn').click ->
    #   modal = $(this).attr('href')
    #   $(modal).modal 'show'

    # Make sure older browsers support the HTML5 Placeholder Attribute
    unless "placeholder" of document.createElement("input")
      $("input[placeholder]").each ->
        val = $(this).attr("placeholder")
        @value = val  if @value is ""
        $(this).focus(->
          @value = ""  if @value is val
        ).blur ->
          @value = val  if $.trim(@value) is ""

    # Clear default placeholder values on form submit
    $("form").submit ->
      $(this).find("input[placeholder]").each ->
        @value = ""  if @value is $(this).attr("placeholder")


    #Sticky Panel
    stickyPanelOptions =
      afterDetachCSSClass: "attached"
      savePanelSpace: true

    $(".navbar").stickyPanel stickyPanelOptions

    # call jRespond and add breakpoints
    jRes = jRespond([
      label: "handheld"
      enter: 0
      exit: 767
    ,
      label: "tablet"
      enter: 768
      exit: 10000
    ])

    # register enter and exit functions for a single breakpoint
    jRes.addFunc
      breakpoint: "handheld"
      enter: ->
        $('.content-block h2').fitText(1.1)

    jRes.addFunc
      breakpoint: "tablet"
      enter: ->
        #Page Scroller Plugin
        $("body").pageScroller
          navigation: ".nav"
          scrollOffset: -80

    $('.header-content h1').fitText(.71)


    $(".footable").footable breakpoints:
      phone: 320
      tablet: 767