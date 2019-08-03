import { ANIMATE, INIT, WIN, BODY } from '../constants';
var fullpage = require('../lib/jquery.fullpage.min.js');

const sections = '.js-section';
const header = '.js-header';
const fullpageContainer = $('.js-fullpage');
const mobClass = 'is-mob-state';

var timeout;
WIN.resize(() => {
  clearTimeout(timeout);
  timeout = setTimeout(fp, 100);
});

function fp() {
  if (WIN.width() <= 1024) {
    if (!fullpageContainer.hasClass(INIT) || BODY.hasClass(mobClass)) return;
    BODY.addClass(mobClass);
    $.fn.fullpage.destroy('all');
    fullpageContainer.removeClass(INIT);
  } else {
    if (fullpageContainer.hasClass(INIT)) return;
    initFullpage();
    if (BODY.hasClass(mobClass)) BODY.removeClass(mobClass);
  }
}
fp();

function initFullpage() {
  fullpageContainer.addClass(INIT);

  fullpageContainer.fullpage({
    fixedElements: header,
    sectionSelector: sections,
    responsiveWidth: 10,
    responsiveHeight: 10,
    scrollingSpeed: 800,
    responsive: 768,
    css3: true
  });
}
