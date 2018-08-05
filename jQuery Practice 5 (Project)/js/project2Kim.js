$(function() {
  $("#icon1").click(function() {
    $("#image1").fadeIn("slow");
    $("#image2").hide();
    $("#image3").hide();
    $("#icon1").fadeTo("slow",0.4);
    $("#icon2").fadeTo("slow",1);
    $("#icon3").fadeTo("slow",1);
  });
  $("#icon2").click(function() {
    $("#image2").fadeIn("slow");
    $("#image3").hide();
    $("#image1").hide();
    $("#icon1").fadeTo("slow",1);
    $("#icon2").fadeTo("slow",0.4);
    $("#icon3").fadeTo("slow",1);
  });
  $("#icon3").click(function() {
    $("#image3").fadeIn("slow");
    $("#image1").hide();
    $("#image2").hide();
    $("#icon3").fadeTo("slow",0.4);
    $("#icon1").fadeTo("slow",1);
    $("#icon2").fadeTo("slow",1);
  });
});
