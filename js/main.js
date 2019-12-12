/**
 * I should probably explain whats going on here. The function of this code is to
 * nicely switch between pages on my site. It loops through a couple of objects
 * that hold relevant info, and determines what page needs to be slideUp() or
 * slideDown() respectivly. I wrote this while being very tired and it's 
 * confusing to look at it now, so just don't touch it and everything should be fine.
**/

l_aElementObjects = [
  {
    'sliderElement' : $('.slider-landing'),
    'navElement' : $('#nav-home'),
    'currentlyActive' : true,
    'id' : 'nav-home'
  },
  {
    'sliderElement' : $('.slider-about'),
    'navElement' : $('#nav-about-me'),
    'currentlyActive' : false,
    'id' : 'nav-about-me'
  },
  {
    'sliderElement' : $('.slider-portfolio'),
    'navElement' : $('#nav-portfolio'),
    'currentlyActive' : false,
    'id' : 'nav-portfolio'
  },
  {
    'sliderElement' : $('.slider-skills'),
    'navElement' : $('#nav-skills'),
    'currentlyActive' : false,
    'id' : 'nav-skills'
  },
  {
    'sliderElement' : $('.slider-contact'),
    'navElement' : $('#nav-contact'),
    'currentlyActive' : false,
    'id' : 'nav-contact'
  }
];

for(l_oElement of l_aElementObjects){
  l_oElement.navElement.click(clickedElement => {
    loop:
    for(l_oSlideUp of l_aElementObjects){
      if(l_oSlideUp.currentlyActive === true){
        l_oSlideUp.sliderElement.slideUp('slow');
        l_oSlideUp.currentlyActive = false;
        for(l_oSlideDown of l_aElementObjects){
          if(l_oSlideDown.id === clickedElement.currentTarget.id){
            l_oSlideDown.sliderElement.slideDown('slow');
            l_oSlideDown.currentlyActive = true;
            break loop;
          }
        }
      }
    }
  });
}
