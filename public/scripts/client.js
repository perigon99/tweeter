$(document).ready(function() {

  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

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
      <h5>${escape(information.content.text)}</h5>
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
    `;
    $("#newsection").prepend($section);
  }
}



const loadTweets = function() { 
  $.get("/tweets/", function(response) {
    renderTweets(response);
  })
}

const clearArticle = function() {
  $(".tweets-section").empty();
}



const newTweetEvent = function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    if(!$("#tweet-text").val()) {
      return alert("You must enter text here !!!")
    }
    if($(".counter").val() < 0) {
      return alert("Maximum character exeeded for the tweet !!!")
    }

    $.post("/tweets/", $( this ).serialize()).done(function() {
      clearArticle();
      loadTweets();
    $("#tweet-text").val("")
    }
      
    )      
    }    
  )}


//--------------------------------Function calling ------------------------------------------------
loadTweets();
newTweetEvent();


});




