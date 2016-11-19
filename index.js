
(function($) {
    "use strict"; // Start of use strict

    $(document).ready(function(){
       var scroll_start = 0;
       var startchange = $('#page-top');
       var offset = startchange.offset();
        if (startchange.length){
       $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
              $(".navbar-default").css('background-color', '#01579B');
           } else {
              $('.navbar-default').css('background-color', 'transparent');
           }
       });
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $anchor.blur();
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    // $(function() {
    //     $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    //         $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    //     }).on("focus", ".floating-label-form-group", function() {
    //         $(this).addClass("floating-label-form-group-with-focus");
    //     }).on("blur", ".floating-label-form-group", function() {
    //         $(this).removeClass("floating-label-form-group-with-focus");
    //     });
    // });

})(jQuery); // End of use strict
