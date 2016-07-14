var opts = {
  lines: 17 , length: 34, width: 14 , 
  radius: 42 , scale: 1.25, corners: 0.3, 
  color: '#000' , opacity: 0.25 , rotate: 13  , 
  direction: 1, speed: 1 , 
  trail: 60, fps: 20 , zIndex: 2e9, 
  className: 'spinner' , top: '50%' , left: '49%' , 
  shadow: false, hwaccel: false, position: 'absolute'
};

var spinner = new Spinner(opts).spin(); 
$("#loading").append(spinner.el)
$("#loading").hide();
$(document).ajaxStart(function() { $('#loading').show();});
$(document).ajaxComplete(function() { $('#loading').hide();});
