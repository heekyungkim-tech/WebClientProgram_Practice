//page 315
$(function() {
/* $("li[id!='one']").hide().fadeIn(1400); //chaining

  //-----getting at content and append it---
   var $listHTML = $('ul').html();
   $('ul').append($listHTML);


   var $listHTML = $('ul').text();
   $('ul').append('<p>' +$listHTML +'</p>');


   // ----Page 323 changing CSS rules---
   //---Get the background color of the first li---
  var backgroundFirst = $('li').css("background-color");
  //---write the background color was after the list---
  $('ul').append("<p>The color is: " +backgroundFirst +"</p>");

  //-----Page 325- each method-----
  $('li').each(function(){
  var ids = this.id; // this refers to the current node element in the loop, which is 'li'
  $(this).append('<span class="order"> ' + ids + '</span>');
*/
  // ------ Page 327 -------
  var ids = ""; //creating empty variable
  var $listItems = $('li'); // i put all my list into a variable (as an array) (list is a parrent folder)

  // When i put my mouse on, its display a id name of each list
  $listItems.on("mouseover click", function(){ //creating the function for mouse on (when you move your mouse in) let anonymous values to appear
    ids = this.id; // store this.id as variable ids... takes our ID
    $listItems.children("span").remove(); // removing span from children if we have any
    $(this).append(' <span class="hot">' + ids + '</span>');// attached to the end of the span
  });

  //When i put my mouse out, it reverse how it was in the first place!
  $listItems.on("mouseout", function(){ //creating the function for mouse out (when you move your mouse away)
  $(this).children('span').remove(); // removing what is in the end of span if any
  });

});
