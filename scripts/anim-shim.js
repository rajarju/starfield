window.requestAnimationFrame = (function() {
  //Check for each browser
  //@paul_irish function
  //Globalises this function to work on any browser as each browser has a different namespace for this
  return window.requestAnimationFrame || //Chromium 
  window.webkitRequestAnimationFrame || //Webkit
  window.mozRequestAnimationFrame || //Mozilla Geko
  window.oRequestAnimationFrame || //Opera Presto
  window.msRequestAnimationFrame || //IE Trident?


  function(callback, element) { //Fallback function
    window.setTimeout(callback, 1000 / 60);
  }

})();