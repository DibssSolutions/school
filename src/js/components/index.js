import { BODY, LOADED } from '../constants';
import './_lazyload.js';
import './_fp.js';
setTimeout(() => {
  BODY.addClass(LOADED);
}, 500);
