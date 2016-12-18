(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
__$styleInject("* {\n  margin: 0;\n  padding: 0;\n  border: 0 none;\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=main.css.map */\n", undefined);

/**
 * Alerts.
 * @param
 * @return
 */
function runAlert() {
  console.log('Module 1 is alerting you Mo Fo');
}

/**
 * Adds all the values in an array.
 * @param  {String} name The name of the person
 * @return {String} greeting to the user
 */
var sayHi = function sayHi(name) {
  return "Hello " + name;
};

(function () {

    runAlert();
    console.log(sayHi('Alan'));
})();

})));
