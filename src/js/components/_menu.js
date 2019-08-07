import { BODY, HTML } from '../constants';
const menuBtn = $('.js-btn-menu');
const openMenu = 'is-open-menu';
menuBtn.on('click', () => {
  if (!HTML.hasClass(openMenu)) {
  	HTML.addClass(openMenu);
  	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  	const body = document.body;
  	body.style.position = 'fixed';
  	body.style.top = `-${scrollY}`;
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
  } 
  else {
  	const body = document.body;
  	const scrollY = body.style.top;
  	body.style.position = '';
  	body.style.top = '';
  	window.scrollTo(0, parseInt(scrollY || '0') * -1);
  	HTML.removeClass(openMenu);
  	$.fn.fullpage.setMouseWheelScrolling(true);
  	$.fn.fullpage.setAllowScrolling(true);
  }
});

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
