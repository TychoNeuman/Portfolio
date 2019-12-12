/**
 * I should probably explain whats going on here. The function of this code is to
 * nicely switch between pages on my site. It loops through a couple of objects
 * that hold relevant info, and determines what page needs to be slideUp() or
 * slideDown() respectivly. I wrote this while being very tired and it's 
 * confusing to look at it now, so just don't touch it and everything should be fine.
**/

// $l_eHomeElement = $('.slider-landing');
// $l_eAboutElement = $('.slider-about');
// $l_ePortfolioElement = $('.slider-portfolio');
// $l_eSkillsElement = $('.slider-skills');
// $l_eContactElement = $('.slider-contact');

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
]

l_aElementObjects.forEach((element) => {         
  element.navElement.click((clickedElement) => {
    l_aElementObjects.forEach(element => {     
      if(element.currentlyActive === true){
        element.sliderElement.slideUp('slow');
        element.currentlyActive = false;
      }
      if(element.id === clickedElement.currentTarget.id){
        element.sliderElement.slideDown('slow');
        element.currentlyActive = true;
      }
    });
  });
});