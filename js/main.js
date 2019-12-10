//Loading screen
$(document).ready(function(){
  $('.loading').delay(1200).hide(0);
  setTimeout(function(){
    $('#bobbie').removeClass('hidden');
  }, 1200);
});
// Animate the title test
$('#title').text('Front-end')
  .delay(800)
  .slideDown(800)
  .slideUp(800, function(){
    $('#title').text('Back-end')
    .delay(800)
    .slideDown(800)
    .delay(800)
    .slideUp(800);
  });

// Animate Bobbie on scroll
$(window).scroll(function(){
    if($(window).scrollTop() > 450){
        $("#bobbie").animate({right: 1000});
    }
});
