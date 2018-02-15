$(document).ready(function(){


  // Add responsive class to navbar when window width is less than 980px
  const $window = $(window),
  $navright = $('.nav-right');

  $window.resize(function resize() {
    if ($window.width() < 980) {
        return $navright.addClass('responsive').hide();
    }

    $navright.removeClass('responsive').show();
  }).trigger('resize');


  //Toggle open/close mobile navbar
  $(".icon").click(function(){
    $(".responsive").slideToggle();
  });

  // Add active class to middle menu links
  $(".middle-menu a:first-child").addClass('active');
  // Toggle content when click on Java, PHP and C++
  $(".right-bottom div:not(:first-child)").hide();
  $('.middle-menu a').click(function(e){
    e.preventDefault();
    $('.middle-menu a').removeClass('active');
    $(this).addClass('active');
   
    $('.right-bottom div').hide();
    $('#'+this.name).show();
 });

});

