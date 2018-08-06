$(document).ready(function(){
  // show method
  $('#show').click(function(){
    $("#theDiv").show("normal");
  });
  // hide method
  $("#hide").click(function(){
    $("#theDiv").hide(1000, "swing");
  });
  $("#toggle").click(function(){
    $("#theDiv").hide(500, completion);
  });
  function completion(){
    $("#theDiv").text('completion');
  };
});
