import LazyLoad from '../lib/lazyload';

const myLazyLoad = new LazyLoad({
  elements_selector: '.js-lazy',
  callback_loaded: function() {
  	console.log('vvvs');
  },
  callback_finish: function() {
  	console.log('ss');
  }
});
