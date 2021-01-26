/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]




$(document).ready(function() {

const renderTweets = function(tweets) {
  for (let information of tweets) {
    const $section = 
    `
    <article>
      <div class="article-head">
        <img src="${information.user.avatars}" alt="">
        <h4>${information.user.name}</h4>           
          <small>${information.user.handle}</small>
      </div>   
      <h5>${information.content.text}</h5>
      <hr>
      <div class="article-footer">
        <h5>${information.created_at}</h5>
        <small>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
          </small> 
      </div>     
    </article>
    `
    $("#newsection").prepend($section)
  }
}



const loadTweets = function() {
  
  $.get("/tweets/", function(response) {
    console.log(response)
    renderTweets(response);
  })
  
}
loadTweets()



const createNewTweet = function() {
  $("#form1").submit(function(event) {
    event.preventDefault()
    $.post("/tweets/", $( this ).serialize())
    loadTweets()
  })
}
createNewTweet()

//renderTweets(data);

});




