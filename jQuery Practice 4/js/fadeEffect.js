$(document).ready(function(){
//fade in method/event
$("#fadein").click(function(){
  $('#theDiv').fadeIn('normal');
});
// fade document
$("#fadeout").click(function(){
  $('#theDiv').fadeOut("slow");
});
// fade to 30%
$("#fadeTo30").click(function(){
  $("#theDiv").fadeTo("slow", 0.3); // 0.3 is the appacity when you have oppacity =1(solid) oppacity =0(invisible)
});
});
