//Shortcut
$(function(){
//
$('#evtTarget').hover(hoverIn, hoverOut);
//
function hoverIn(){
  $("#evtTarget").toggleClass('boxIn');
    $("#evtTarget").text("boxIn");
}
//
function hoverOut(){
  $("#evtTarget").toggleClass('boxOut');
    $("#evtTarget").text("boxOut");
}
$('#evtTarget').click(clickOne);
//
function clickOne(){
  $('#one').html("<em>On ONE click");
// resize
$(window).resize(resizeWindow);
function resizeWindow(){
  $("#two").text("Hello World");
}

}
});
