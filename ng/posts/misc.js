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
})
