$(document).ready(function() {
  // --- our code goes here ---

  let count = 140;
  $("#tweet-text").keypress( (event) => {
   count --;
   const countetElement = $(event.target).siblings(".counterclass").children("output");
   countetElement.val(count) ;
  if (count <= 0) {
    countetElement.css("color", "red");
  }
  })
});