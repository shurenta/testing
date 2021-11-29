if(document.querySelector('.page-header')) {
  var mainNav = document.querySelector('.main-nav');
  var buttonToggle = document.querySelector('.toogle-nav');
  var headerImage = document.querySelector('.background-img');
  mainNav.classList.remove('main-nav--nojs');
  buttonToggle.classList.remove('toogle-nav--nojs');
  buttonToggle.addEventListener('click', function() {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
      headerImage.classList.add('background-img--opened');
      buttonToggle.classList.remove('toogle-nav--opened');
      buttonToggle.classList.add('toogle-nav--closed');
    } else {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
        buttonToggle.classList.add('toogle-nav--opened');
        buttonToggle.classList.remove('toogle-nav--closed');
        headerImage.classList.remove('background-img--opened');
      }
    });
}
