$(document).ready(function() {
  let count = 140;
  $("#tweet-text").keydown( (event) => { 
   const countetElement = $(event.target).siblings(".counterclass").children("output"); 
   const currentString = $(this).val();
   let result = count - currentString.length
   countetElement.val(result);

  if (result <= 0) {
    countetElement.css("color", "red");
  } else {
    countetElement.css("color", "#545149");
    $("#warning").html(" ")
  }
  })
});