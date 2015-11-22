$(function() {
    // code here
      var navpos = $('#mainnav').offset();
      console.log(navpos.top);
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > navpos.top) {
        $('#mainnav').addClass('navbar-fixed-top');
       }
       else {
         $('#mainnav').removeClass('navbar-fixed-top');
       }
    });
});
