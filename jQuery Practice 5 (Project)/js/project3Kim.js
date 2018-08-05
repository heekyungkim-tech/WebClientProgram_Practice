$(function() {
  $("#btn1").click(function() {
    $('#text1').show();
    $("#text2").hide();
    $("#text3").hide();
    $("#btn1").css({"background-color":"white","color":"black"});
    $("#btn2").css({"background-color":"black","color":"white"});
    $("#btn3").css({"background-color":"black","color":"white"});
  });
  $("#btn2").click(function() {
    $('#text2').show();
    $("#text1").hide();
    $("#text3").hide();
    $("#btn1").css({"background-color":"black","color":"white"});
    $("#btn2").css({"background-color":"white","color":"black"});
    $("#btn3").css({"background-color":"black","color":"white"});
  });
  $("#btn3").click(function() {
    $('#text3').show();
    $("#text1").hide();
    $("#text2").hide();
    $("#btn1").css({"background-color":"black","color":"white"});
    $("#btn2").css({"background-color":"black","color":"white"});
    $("#btn3").css({"background-color":"white","color":"black"});
  });
});
