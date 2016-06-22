//Menu minimise on-click
$(function() {
    $('.nav a').on('click', function(){
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
$('.tab').on('click', function (event) {
    event.preventDefault();
    $('.active').removeClass('active');
    $(event.target).closest('.tab').addClass('active');
  });
});

$(document).ready(function(){
    // Set overriding CSS
  if (window.location.href === 'http://localhost:3000/#/login' ||
      window.location.href === 'http://localhost:3000/#/register' ||
      window.location.href === 'http://localhost:3000/#/logout'
    ) {
        $(".topnav").css('transition-duration', '0s');
        $('.topnav').css('background-color', 'black');
        $(".navbar-default .navbar-nav>li>a").css('color', '#ffffff');
        $(".navbar-default .navbar-brand ").css('color', '#ffffff');
      }

  if (window.location.href === 'http://localhost:3000/#/') {
    $(".topnav").css('transition-duration', '0.2s');
    $('.topnav').css('background-color', 'transparent');
    $(".navbar-default .navbar-nav>li>a").css('color', '#ffffff');
    $(".navbar-default .navbar-brand ").css('color', '#ffffff');
    // Add on-scroll listener
     var scroll_start = 0;
     var startchange = $('.intro-message');
     var offset = startchange.offset();
      if (startchange.length){
        var scrollHandler = function(){
        $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
              $(".topnav").css('transition-duration', '0.2s');
              $(".navbar-default .navbar-nav>li>a").css('color', '#000000');
              $(".navbar-default .navbar-brand ").css('color', '#000000');
              $(".topnav").css('background-color', '#ffffff');
              $(".navbar-default .navbar-toggle .icon-bar").css('background-color', '#000000');
              }
          else {
              $(".topnav").css('transition-duration', '0.2s');
              $('.topnav').css('background-color', 'transparent');
              $(".navbar-default .navbar-nav>li>a").css('color', '#ffffff');
              $(".navbar-default .navbar-brand ").css('color', '#ffffff');
              $(".navbar-default .navbar-toggle .icon-bar").css('background-color', '#ffffff');
          }
        })
      }();
    }
  }
    $('#bs-example-navbar-collapse-1').children().on('click', function (e) {
      $(".topnav").css('transition-duration', '0s');
      $(".navbar-default .navbar-nav>li>a").css('color', '#ffffff');
      $(".navbar-default .navbar-brand ").css('color', '#ffffff');
      $(".topnav").css('background-color', '#000000');
      $(document).off("scroll", scrollHandler);
    });
    $('#create-buttons').children().on('click', function (e) {
      $(".topnav").css('transition-duration', '0s');
      $(".navbar-default .navbar-nav>li>a").css('color', '#ffffff');
      $(".navbar-default .navbar-brand ").css('color', '#ffffff');
      $(".topnav").css('background-color', '#000000');
      $(document).off("scroll", scrollHandler);
    });
    $( ".navbar-toggle" ).click(function() {
      $(".navbar-default .navbar-nav>li>a").css('color', '#000000');
      $(".navbar-default .navbar-brand ").css('color', '#000000');
      $(".topnav").css('background-color', '#ffffff');
      $(".navbar-default .navbar-toggle .icon-bar").css('background-color', '#000000');
    if ($(this).attr('aria-expanded') === "true") {
      $('.topnav').css('background-color', 'transparent');
      $(".navbar-default .navbar-nav>li>a").css('color', '#ffffff');
      $(".navbar-default .navbar-brand").css('color', '#ffffff');
      $(".navbar-default .navbar-toggle .icon-bar").css('background-color', '#ffffff');
      }
    });
});
