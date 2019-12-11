//Let's set the nav listeners
// TODO : See if this can be refactored with a loop

$('#nav-about-me').click(function(ev){
  ev.preventDefault();
  $('.slider-landing').slideUp('slow');
  $('.slider-about').slideDown('slow');
  $('footer').show();
});

$('#nav-portfolio').click(function(ev){
  ev.preventDefault();
  $('.slider-landing').slideUp('slow');
  $('.slider-portfolio').slideDown('slow');
  $('footer').show();
});

$('#nav-skills').click(function(ev){
  ev.preventDefault();
  $('.slider-landing').slideUp('slow');
  $('.slider-skills').slideDown('slow');
  $('footer').show();
});

$('#nav-contact').click(function(ev){
  ev.preventDefault();
  $('.slider-landing').slideUp('slow');
  $('.slider-contact').slideDown('slow');
  $('footer').show();
});

//nav-skills