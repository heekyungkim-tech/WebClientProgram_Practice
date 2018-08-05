$(function() {

  $("#img2").hide();
  $("#img3").hide();
  $("#img4").hide();
  $("#two").fadeTo("fast",0.4);
  $("#three").fadeTo("fast",0.4);
  $("#four").fadeTo("fast",0.4);
  $("#text").show(statue);

  $("#one").click(function() {
    $("#img1").fadeIn("fast");
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#one").fadeTo("fast",1);
    $("#two").fadeTo("fast",0.4);
    $("#three").fadeTo("fast",0.4);
    $("#four").fadeTo("fast",0.4);
    $("#text").show(statue);
  });
  $("#two").click(function() {
    $("#img2").fadeIn("fast");
    $("#img1").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#one").fadeTo("slow",0.4);
    $("#two").fadeTo("slow",1);
    $("#three").fadeTo("slow",0.4);
    $("#four").fadeTo("slow",0.4);
    $("#text").show(bridge);
  });
  $("#three").click(function() {
    $("#img3").fadeIn("fast");
    $("#img1").hide();
    $("#img2").hide();
    $("#img4").hide();
    $("#one").fadeTo("slow",0.4);
    $("#two").fadeTo("slow",0.4);
    $("#three").fadeTo("slow",1);
    $("#four").fadeTo("slow",0.4);
    $("#text").show(washingonSqare);
  });
  $("#four").click(function() {
    $("#img4").fadeIn("fast");
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#one").fadeTo("slow",0.4);
    $("#two").fadeTo("slow",0.4);
    $("#three").fadeTo("slow",0.4);
    $("#four").fadeTo("slow",1);
    $("#text").show(timeSquare);
  });
});

function statue(){
  $(this).text("STATUE OF LIBERTY")
};
function bridge(){
  $(this).text("BROOKLYN BRIDGE")
};
function washingonSqare(){
  $(this).text("WASHINGTON SQUARE PARK")
};
function timeSquare(){
  $(this).text("TIME SQUARE PARK")
};

//slide image
$(document).ready(function(){
  $("#prev").on('click', function(){
    $("#img" + display).stop().fadeOut(1);
    decrease();
    $("#img" + display).stop().fadeIn(1);
  });
  $("#next").on('click', function(){
    $("#img" + display).stop().fadeOut(1);
    increase();
    $("#img" + display).stop().fadeIn(1);
  });

var display = 1;
var TotalImg = 4;

function increase() {
  ++display;
  if(display > TotalImg) {
    display = 1;
  }
}
function decrease() {
  --display;
  if(display < 1) {
    display = TotalImg;
  }
}
});
