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
