$(document).ready(function() {
  // --- our code goes here ---

  let count = 140
  $("#tweet-text").keypress( (event) => {
   count --;
   console.log(this)
   console.log(event.target)
   const countetElement = $(event.target).siblings(".counterclass").children("output")
   countetElement.val(count) ;
  if (count <= 0) {

    countetElement.css("color", "red")
  }
  })
 
 
});