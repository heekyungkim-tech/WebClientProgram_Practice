$(document).ready(function(){
  //slide up
  $('#slideup').click(function(){
    $("#theDiv").slideUp(1000);
  });
  //slide down
  $('#slidedown').click(function(){
    $("#theDiv").slideDown(200);
  });
  $('#toggleSlide').click(function(){
    $("#theDiv").slideToggle("slow");
  });
});
