/**
 * I should probably explain whats going on here. The function of this code is to
 * nicely switch between pages on my site. It loops through a couple of objects
 * that hold relevant info, and determines what page needs to be slideUp() or
 * slideDown() respectivly. I wrote this while being very tired and it's 
 * confusing to look at it now, so just don't touch it and everything should be fine.
**/

class l_oElementObject {
  constructor(p_eSlider, p_eNav, p_bIsActive, p_sId){
    this.sliderElement = p_eSlider,
    this.navElement =  p_eNav,
    this.isActive = p_bIsActive,
    this.id = p_sId 
  }
};

l_aElementObjects = [
  new l_oElementObject(
    $('.slider-landing'),
    $('#nav-home'),
    true,
    'nav-home'
  ),
  new l_oElementObject(
    $('.slider-about'),
    $('#nav-about-me'),
    false,
    'nav-about-me'
  ),
  new l_oElementObject(
    $('.slider-portfolio'),
    $('#nav-portfolio'),
    false,
    'nav-portfolio'
  ),
  new l_oElementObject(
    $('.slider-skills'),
    $('#nav-skills'),
    false,
    'nav-skills'
  ),
  new l_oElementObject(
    $('.slider-contact'),
    $('#nav-contact'),
    false,
    'nav-contact'
  )
];

for(l_oElement of l_aElementObjects){
  l_oElement.navElement.click(clickedElement => {
    loop:
    for(l_oSlideUp of l_aElementObjects){
      if(l_oSlideUp.isActive === true){
        l_oSlideUp.sliderElement.slideUp('slow');
        l_oSlideUp.isActive = false;
        for(l_oSlideDown of l_aElementObjects){
          if(l_oSlideDown.id === clickedElement.currentTarget.id){
            l_oSlideDown.sliderElement.slideDown('slow');
            l_oSlideDown.isActive = true;
            break loop;
          }
        }
      }
    }
  });
}
