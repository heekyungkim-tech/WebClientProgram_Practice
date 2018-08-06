$(document).ready(function(){
 //change the width
$("#right").click(function(){
  $('#theDiv').animate({width: "500px", fontSize:"3em"},1000);
  $('#theDiv').text("Grow to right");
}); //change the width END
$('#text').click(function(){
  $('#theDiv').animate({fontSize: "24px", wordSpacing: "1em"},1000);
    $('#theDiv').text("Animate Text");
});
$("#move").click(function(){
  $("#theDiv").animate({left: "200px"}, 1200);
    $("#theDiv").text("move");
});

});
